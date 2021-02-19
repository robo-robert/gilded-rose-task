import winston, { format } from 'winston';

import { AbstractLogger } from '../abstract/logger';

export class Logger extends AbstractLogger {
  private filename: string;

  protected initialize(): void {
    this.filename = `${Date.now()}-debug.log`;

    const { combine, timestamp, printf } = format;

    const customFormat = printf(({ level, message, timestamp }) => {
      return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    });

    this.logger = winston.createLogger({
      levels: winston.config.syslog.levels,
      format: combine(timestamp(), customFormat),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `logs/${this.filename}`,
        }),
      ],
    });

    this.info(`Successfully created log file - ${this.filename} which can be found in logs folder.`);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }
}
