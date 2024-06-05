"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function FilterCheckbox({
  filterKey,
  filterValue,
  handleChange,
}: {
  filterKey: string;
  filterValue: string;
  handleChange: (
    checked: boolean,
    currentSearchParams: { [key: string]: string }[]
  ) => void;
}) {
  const searchParams = useSearchParams();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const currentParams = searchParams.get(filterKey);
    if (currentParams) {
      const values = currentParams.split(",");
      if (values.includes(filterValue)) {
        setIsChecked(true);
      }
    } else {
      setIsChecked(false);
    }
  }, [filterKey, filterValue, searchParams]);

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    
    let currentSearchParams = [];
    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? '' });
    }
    handleChange(checked, currentSearchParams);
  };

  return (
    <>
      <input
        type="checkbox"
        id={`${filterKey}-${filterValue}`}
        name={filterKey}
        value={filterValue}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <label htmlFor={`${filterKey}-${filterValue}`} className="text-gray-700">
        {filterValue}
      </label>
    </>
  );
}

export default FilterCheckbox;
