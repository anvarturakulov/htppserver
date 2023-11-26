import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { IMiddleware } from './middleware.interface';
import { verify } from 'jsonwebtoken';
import { inject } from 'inversify';
import { TYPES } from '../types';
import { IConfigService } from '../config/config.service.interface';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			req.headers.authorization.split(' ')[1];
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload) {
					if (typeof payload != 'string') {
						req.user = payload.email;
					}
					next();
				}
			});
		} else {
			next();
		}
	}
}
