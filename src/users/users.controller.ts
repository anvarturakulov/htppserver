import { Response, NextFunction, Request } from 'express';
import { BaseController } from '../common/base.controller';
import { IControllerRoute } from '../common/route.interface';
import { HTTPError } from '../errors/http-error.class';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';

injectable();
export class UserController extends BaseController implements IUserController {
	routes: IControllerRoute[] = [
		{ path: '/login', func: this.login, method: 'post' },
		{ path: '/register', func: this.register, method: 'post' },
	];

	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes(this.routes);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		console.log('Privet');
		next(new HTTPError(401, 'Ощибка авторизации', 'login'));
	}

	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
