import { Brand } from "./Brand";
import { ResponseModule } from "./ResponseModule";

export interface BrandResponseModule extends ResponseModule{
    data:Brand[]
} 