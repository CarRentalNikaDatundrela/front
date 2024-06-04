interface BroaderCar {
  [key: string]: any;
}

interface Car extends BroaderCar {
  carID: number;
  brand: string;
  model: string;
  year: number;
  imageURL: string;
  price: number;
  capacity: number;
  transmission: string;
  fuelCapacity: number;
  city: string;
  rented: boolean;
  viewed: number;
}

interface FilterAPIBody {
  transmission?: string;
  brand?: string[];
  city?: string[];
  capacity?: number;
}