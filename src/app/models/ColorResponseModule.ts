import { Color } from "./Color";
import { ResponseModule } from "./ResponseModule";

export interface ColorResponseModule extends ResponseModule{
    data:Color[]
} 