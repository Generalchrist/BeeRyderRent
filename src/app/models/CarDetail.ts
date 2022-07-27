import { CarImage } from "./CarImage";

export interface CarDetail{
    carId: number,
    brandId: number,
    brandName:string,
    colorId: number,
    colorName:string,
    modelYear:number,
    dailyPrice:number,
    description:string,
    model : string,
    images : CarImage[],
}