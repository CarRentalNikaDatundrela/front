import { revalidatePath } from "next/cache";
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
    next: {
      tags: ['popular']
    }
  });
  const data = await response.json();
  return data;
}
export async function getAllCars() {
  const response = await fetch(`${BASE_URL}/car/getAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: 'no-store'
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
    cache: 'no-store'
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
    cache: 'no-store'
  })
  const data = await response.json();
  return data;
}

export async function incrementView(carId: number) {
  await fetch(`${BASE_URL}/car/incrementView`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CarId: carId
    }),
  })
  revalidatePath('popular')
}


export async function getCarById(carId: number) {
  const response = await fetch(`${BASE_URL}/car/getSingle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CarId: carId
    }),
  });
  const data = await response.json();
  return data;
}