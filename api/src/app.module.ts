import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConnectionMiddleware} from './connection/service/connection-middleware';
import {PessoaModule} from './pessoa/pessoa.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {Pessoa} from "./pessoa/entities/pessoa.entity";
import { ConnectionModule } from './connection/connection.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            // @ts-ignore
            type: process.env.TYPEORM_CONNECTION,
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: [Pessoa],
            synchronize: false,
        }),
        PessoaModule,
        ConnectionModule,
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService,
    ],
})

export class AppModule {}

