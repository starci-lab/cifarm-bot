import { Module } from "@nestjs/common"
import { EnvModule } from "src/env"
import { CiFarmService } from "./cifarm.service"

@Module({})
export class CiFarmModule {
    public static forRoot() {
        return {
            module: CiFarmModule,
            imports: [
                EnvModule.forRoot(),
            ],
            providers: [
                CiFarmService
            ],
            exports: []
        }
    }
}