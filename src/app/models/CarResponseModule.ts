import { Car } from "./Car";
import { ResponseModule } from "./ResponseModule";

export interface CarResponseModule extends ResponseModule{
    data:Car[],
} 