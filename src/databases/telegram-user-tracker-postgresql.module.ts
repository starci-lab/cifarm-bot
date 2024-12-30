import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { telegramUserTrackerPostgreSqlEntites } from "./entities";
import { envConfig } from "src/env";
import { TelegramUserTrackerPostgreSQLService } from "./telegram-user-tracker-postgresql.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: envConfig().database.postgresql.telegramUserTracker.host,
            port: envConfig().database.postgresql.telegramUserTracker.port,
            username: envConfig().database.postgresql.telegramUserTracker.username,
            password: envConfig().database.postgresql.telegramUserTracker.password,
            database: envConfig().database.postgresql.telegramUserTracker.dbName,
            entities: telegramUserTrackerPostgreSqlEntites(),
            synchronize: true,
            poolSize: 10,
            connectTimeoutMS: 5000,
        }),
        TypeOrmModule.forFeature(telegramUserTrackerPostgreSqlEntites()),
    ],
    controllers: [],
    providers: [TelegramUserTrackerPostgreSQLService],
    exports: [TelegramUserTrackerPostgreSQLService],
})
export class TelegramUserTrackerPostgreSQLModule {}
