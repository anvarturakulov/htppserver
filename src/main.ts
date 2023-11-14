import {App} from './app'
import { LoggerSevice } from './logger/logger.service'
import { UserController } from './users/users.controller'

async function bootstrap() {
    const logger = new LoggerSevice()
    const app = new App(logger, new UserController(logger))
    await app.init()
}

bootstrap()