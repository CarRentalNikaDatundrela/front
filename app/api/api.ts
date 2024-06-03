import { BASE_URL } from "../utils/api";

export async function getCarsByBrand(brands: string[]) {
  try {
    const response = await fetch(`${BASE_URL}/car/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand: brands,
      }),
      cache: 'no-store'
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
export async function getMostViewedCars(amount: number) {
  try {
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
  } catch (e) {
    console.log(e);
  }
}
