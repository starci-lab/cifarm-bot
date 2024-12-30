import { AbstractEntity } from "./abstract"
import { UserEntity } from "./user.entity"

export const telegramUserTrackerPostgreSqlEntites = () : Array<typeof AbstractEntity> => ([
    UserEntity,
])