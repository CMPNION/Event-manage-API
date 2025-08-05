import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import config from "./config";
import validationSchema from "./validation.schema";

@Module({
    imports: [
        NestConfigModule.forRoot({
            load: [config],
            isGlobal: true,
            validationSchema,
            envFilePath: `.env.${process.env.NODE_ENV || "development"}`,
        }),
    ],
    exports: [NestConfigModule],
})
export class ConfigHostModule {}