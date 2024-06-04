import { BASE_URL } from "../utils/constants";

export async function getCarsByBrand(brands: string[]) {
  const response = await fetch(`${BASE_URL}/car/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand: brands,
    }),
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}
export async function getMostViewedCars(amount: number) {
  const response = await fetch(`${BASE_URL}/car/popular`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amount,
    }),
  });
  const data = await response.json();
  return data;
}
export async function getAllCars() {
  const response = await fetch(`${BASE_URL}/car/getALl`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
export async function getAllBrands() {
  const response = await fetch(`${BASE_URL}/car/brands`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function getCarsWithFilter(filter: FilterAPIBody) {
  const response = await fetch(`${BASE_URL}/car/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filter),
  })
  const data = await response.json();
  return data;
}


