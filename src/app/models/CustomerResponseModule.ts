import { Customer } from "./Customers";
import { ResponseModule } from "./ResponseModule";

export interface CustomerResponseModule extends ResponseModule{
    data:Customer[]
} 