export class CreateMenuDto {
  restaurantId: number;
  name: string;
}

// update-menu.dto.ts
export class UpdateMenuDto {
  restaurantId?: number;
  name?: string;
}
