import { setSearchParams } from "@/app/actions";
import FilterCheckbox from "../shared/FilterCheckbox";
import { redirect } from "next/navigation";

interface Filters {
  [key: string]: string[];
}
interface FilterSidebarProps {
  filters: Filters;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters }) => {
  return (
    <div className="h-fit px-[40px] py-[20px] border rounded-l0g">

      <h2 className="text-xl font-bold mb-4">Filter by</h2>
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{filterKey}</h3>
          {filters[filterKey].map((filterValue, index) => (
            <div key={index} className="flex items-center mb-2">
              <FilterCheckbox
                filterKey={filterKey}
                filterValue={filterValue}
                handleChange={async (checked, currentSearchParams) => {
                  'use server'
                  const params = await setSearchParams(filterKey, filterValue, checked, currentSearchParams);
                  redirect(`/cars?${params}`)
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
