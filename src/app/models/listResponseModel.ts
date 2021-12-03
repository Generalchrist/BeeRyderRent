import { ResponseModule } from "./ResponseModule";

export interface listResponseModel<T> extends ResponseModule{
    data:T[]
}