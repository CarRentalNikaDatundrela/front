import { setSearchParams } from "@/app/actions";
import FilterCheckbox from "../shared/FilterCheckbox";
import { redirect } from "next/navigation";
import FilterInput from "../shared/FilterInput";
import Button from "../shared/Button";

interface Filters {
  [key: string]: string[];
}
interface FilterSidebarProps {
  filters: Filters;
}

const handleInputChange = async (
  key: string,
  value: string,
  currentSearchParams: { [key: string]: string }[]
) => {
  "use server";
  const params = await setSearchParams(key, value, currentSearchParams, false);
  redirect(`/cars?${params}`);
};

const handleReset = async () => {
  "use server";
  const params = new URLSearchParams();
  redirect(`/cars?${params.toString()}`);
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters }) => {

  return (
    <div className="h-fit px-[50px] py-[20px] border rounded-l0g">
      <h2 className="text-xl font-bold mb-4">Filter by</h2>
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey}>
          <h3 className="text-lg font-semibold mb-3">{filterKey}</h3>
          <div className="mb-4 max-h-[160px] pr-3 overflow-y-auto">
            {filters[filterKey].map((filterValue, index) => (
              <div key={index} className="flex items-center mb-2">
                <FilterCheckbox
                  filterKey={filterKey}
                  filterValue={filterValue}
                  handleChange={async (checked, currentSearchParams) => {
                    "use server";
                    const params = await setSearchParams(
                      filterKey,
                      filterValue,
                      currentSearchParams,
                      true,
                      checked
                    );
                    redirect(`/cars?${params}`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3">Min Year</h3>
        <FilterInput
          type="number"
          name="YearMin"
          className="w-full p-2 border rounded"
          placeholder="Min Year"
          handleChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3">Max Year</h3>
        <FilterInput
          type="number"
          name="YearMax"
          placeholder="Max Year"
          className="w-full p-2 border rounded"
          handleChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3">Min Price</h3>
        <FilterInput
          type="number"
          name="PriceMin"
          placeholder="Min Price"
          className="w-full p-2 border rounded"
          handleChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3">Max Price</h3>
        <FilterInput
          type="number"
          name="PriceMax"
          placeholder="Max Price"
          className="w-full p-2 border rounded"
          handleChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3">Seats</h3>
        <FilterInput
          name="Capacity"
          type="number"
          placeholder="Seats"
          className="w-full p-2 border rounded"
          handleChange={handleInputChange}
        />
      </div>
      <Button handleClick={handleReset} className="mt-4 px-4 py-2 text-[1rem] font-thin bg-red-500 text-white rounded">Reset Filters</Button>
    </div>
  );
};

export default FilterSidebar;
