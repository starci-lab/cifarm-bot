export enum NodeEnv {
    Production = "production",
    Development = "development",
}

export const envConfig = () => ({
    port: Number(process.env.PORT) || 3000,
    nodeEnv: (process.env.NODE_ENV ?? NodeEnv.Development) as NodeEnv,
    telegramBots: {
        ciFarm: {
            token: process.env.TELEGRAM_CIFARM_BOT_TOKEN,
            miniAppUrl: process.env.TELEGRAM_CIFARM_MINIAPP_URL,
        },
        ciWallet: {
            token: process.env.TELEGRAM_CIWALLET_BOT_TOKEN,
            miniAppUrl: process.env.TELEGRAM_CIWALLET_MINIAPP_URL,
        },
    },
    database: {
        postgresql: {
            telegramUserTracker: {
                dbName: process.env.TELEGRAM_USER_TRACKER_POSTGRESQL_DBNAME,
                host: process.env.TELEGRAM_USER_TRACKER_POSTGRESQL_HOST,
                port: Number(process.env.TELEGRAM_USER_TRACKER_POSTGRESQL_PORT),
                username: process.env.TELEGRAM_USER_TRACKER_POSTGRESQL_USERNAME,
                password: process.env.TELEGRAM_USER_TRACKER_POSTGRESQL_PASSWORD,
            },
        },
    },
});
