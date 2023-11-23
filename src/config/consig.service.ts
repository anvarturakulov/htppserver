import { inject } from 'inversify';
import { IConfigService } from './config.servoce.interface';
import { DotenvConfigOptions, DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';

export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error('Не удалось прочитать файл .env или он отсуствует');
		} else {
			this.config = result.parsed as DotenvParseOutput;
		}
	}

	get<T extends number | string>(key: string) {
		return this.config[key] as T;
	}
}
