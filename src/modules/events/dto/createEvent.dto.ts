import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  eventName: string;

  @IsString()
  @IsNotEmpty()
  eventDescription: string;

  @IsNumber()
  eventCategory: number;

  @IsOptional()
  @IsDateString()
  eventDate: string;

  @IsString()
  @IsNotEmpty()
  bannerURL: string;
}
