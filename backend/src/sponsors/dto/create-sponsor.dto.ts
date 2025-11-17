import { IsString, IsOptional, IsUrl, IsInt, IsBoolean, IsDateString } from 'class-validator';

export class CreateSponsorDto {
  @IsString()
  name: string;

  @IsUrl()
  logo: string;

  @IsUrl()
  link: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  shortDescription?: string;

  @IsOptional()
  @IsString()
  scope?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

