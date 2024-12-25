// create-order.dto.ts
export class CreateOrderDto {
  clientId: number;
  restaurantId: number;
  dishId: number;
  quantity: number;
  status?: string;
}

// update-order.dto.ts
export class UpdateOrderDto {
  clientId?: number;
  restaurantId?: number;
  dishId?: number;
  quantity?: number;
  status?: string;
}
