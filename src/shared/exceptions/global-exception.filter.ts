import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly httpAdapter: any;

  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly logger: Logger,
  ) {
    this.httpAdapter = this.httpAdapterHost?.httpAdapter ?? {};
  }

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this;

    const response = host.switchToHttp().getResponse();

    const request = host.switchToHttp().getRequest<Request>();

    const locationUrl = `${request.protocol}://${request.get('host')}${request.originalUrl}`;

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Houve um erro interno ao processar solicitação';

    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      message = exception.message;
    } else if (exception.status) {
      httpStatus = exception.status;
      message =
        exception.message || 'Houve um erro interno ao processar solicitação';
    }

    if (
      exception instanceof QueryFailedError &&
      exception.message.includes('unique constraint')
    ) {
      httpStatus = HttpStatus.CONFLICT;
      message = `Registro duplicado: ${exception.driverError?.detail}`;
    }

    this.logger.error(
      `${request.method} ${request.originalUrl} ${httpStatus} error: ${message}`,
    );

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toLocaleTimeString(),
      message: exception.response ? exception.response.message : message,
      route: locationUrl,
    };

    if (httpAdapter && httpAdapter.reply) {
      httpAdapter.reply(response, responseBody, httpStatus);
    }
  }
}
