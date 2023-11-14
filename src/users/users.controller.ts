import { Response, NextFunction, Request } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerSevice } from "../logger/logger.service";
import { IControllerRoute } from "../common/route.interface";

export class UserController extends BaseController{
    routes: IControllerRoute[] = [
        { path: '/login', func: this.login, method: 'post'},
        { path: '/register', func: this.register, method: 'post' }
    ] 

    constructor(logger: LoggerSevice) {
        super(logger)
        this.bindRoutes(this.routes)
    }

    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'login')
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register')
    }

}