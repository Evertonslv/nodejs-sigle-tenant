import {MiddlewareConsumer, Module, NestModule, RequestMethod, Scope} from '@nestjs/common';
import {REQUEST} from "@nestjs/core";
import {Connection, getConnection} from "typeorm";
import {ConnectionMiddleware} from "./service/connection-middleware";

@Module({
    providers: [
        {
            provide: 'CONNECTION',
            inject: [
                REQUEST,
                Connection,
            ],
            scope: Scope.REQUEST,
            useFactory: async (request, connection) => {
                return getConnection(request.headers.domain);
            }
        }
    ],
    exports: [
        'CONNECTION'
    ]
})
export class ConnectionModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(ConnectionMiddleware)
            .forRoutes({path: '*', method: RequestMethod.ALL})
    }
}
