import { Rental } from "./Rental";
import { ResponseModule } from "./ResponseModule";

export interface RentalResponseModule extends ResponseModule{
    data:Rental[]
} 