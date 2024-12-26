import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateRestaurantDto {
  @IsNotEmpty()
  user_id: number; // user_id como un número

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  cuisine_type: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  isActive: boolean;
}
