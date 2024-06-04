"use server";
import { getAllCars, getCarsWithFilter } from "./api/api";

export async function setSearchParams(
  name: string,
  value: string,
  checked: boolean,
  currentSearchParams: { [key: string]: string }[]
) {
  let updatedSearchParams = [...currentSearchParams];
  const index = updatedSearchParams.findIndex((param) => param[name]);

  if (checked) {
    if (index !== -1) {
      updatedSearchParams[index][name] += `,${value}`;
    } else {
      updatedSearchParams.push({ [name]: value });
    }
  } else {
    if (index !== -1) {
      const values = updatedSearchParams[index][name]
        .split(",")
        .filter((v) => v !== value);
      if (values.length > 0) {
        updatedSearchParams[index][name] = values.join(",");
      } else {
        updatedSearchParams.splice(index, 1);
      }
    }
  }

  const params = new URLSearchParams();
  updatedSearchParams.forEach((param) => {
    const [key, val] = Object.entries(param)[0];
    params.append(key, val);
  });

  return params;
}

export async function getCarsByFilter(searchParams: { [key: string]: string }) {
  if (Object.keys(searchParams).length === 0) {
    return getAllCars();
  } else {
    const filter: FilterAPIBody = {};
    if (
      searchParams["Transmission"] &&
      searchParams["Transmission"].split(",").length === 1
    ) {
      filter.transmission = searchParams["Transmission"];
    }
    if (searchParams["Brand"]) {
      filter.brand = searchParams["Brand"].split(",");
    }

    if (Object.keys(filter).length === 0) {
        return getAllCars();
      } else {
        return getCarsWithFilter(filter);
      }
  }
}
