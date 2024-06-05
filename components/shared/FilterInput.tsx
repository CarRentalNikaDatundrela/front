"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface FilterInputProps {
  type: "text" | "number" | "range" | "date";
  placeholder?: string;
  className?: string;
  min?: string;
  max?: string;
  handleChange?: (
    key: string,
    value: string,
    currentSearchParams: { [key: string]: string }[]
  ) => void;
  name: string;
}

function FilterInput({
  type,
  placeholder = "",
  className = "",
  handleChange,
  name,
}: FilterInputProps) {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const currentParam = searchParams.get(name);
    if (currentParam) {
      setInputValue(currentParam);
    } else {
        setInputValue("");
    }
  }, [name, searchParams]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue(value);

    let currentSearchParams = [];
    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? "" });
    }
    if (handleChange) handleChange(name, value, currentSearchParams);
  };

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={handleInputChange}
      name={name}
      value={inputValue}
    />
  );
}

export default FilterInput;
