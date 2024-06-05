"use server";
import { getAllCars, getCarsWithFilter, incrementView } from "./api/api";

export async function setSearchParams(
  name: string,
  value: string,
  currentSearchParams: { [key: string]: string }[],
  isCheckbox: boolean,
  checked?: boolean,
) {
  let updatedSearchParams = [...currentSearchParams];
  const index = updatedSearchParams.findIndex((param) => param[name]);

  if (isCheckbox) {
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
  } else {
    if (index !== -1) {
      if (value === "") {
        updatedSearchParams.splice(index, 1);
      } else {
        updatedSearchParams[index][name] = value;
      }
    } else if (value !== "") {
      updatedSearchParams.push({ [name]: value });
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
  console.log(searchParams)
  if (Object.keys(searchParams).length === 0) {
    console.log("joooooooooo")
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
    if (searchParams["YearMin"]) {
      filter.yearMin = parseInt(searchParams["YearMin"]);
    }
    if (searchParams["YearMax"]) {
      filter.yearMax = parseInt(searchParams["YearMax"]);
    }
    if (searchParams["PriceMin"]) {
      filter.priceMin = parseInt(searchParams["PriceMin"]);
    }
    if (searchParams["PriceMax"]) {
      filter.priceMax = parseInt(searchParams["PriceMax"]);
    }
    if (searchParams["Capacity"]) {
      filter.capacity = parseInt(searchParams["Capacity"]);
    }

    if (Object.keys(filter).length === 0) {
        return getAllCars();
      } else {
        return getCarsWithFilter(filter);
      }
  }
}
