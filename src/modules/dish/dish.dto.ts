// create-dish.dto.ts
export class CreateDishDto {
  menuId: number;
  name: string;
  description?: string;
  price: number;
}

// update-dish.dto.ts
export class UpdateDishDto {
  menuId?: number;
  name?: string;
  description?: string;
  price?: number;
}
