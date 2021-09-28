import {BadRequestException, Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response} from "express";
import {Connection, createConnection, getConnection} from "typeorm";
import {Pessoa} from "../../pessoa/entities/pessoa.entity";

@Injectable()
export class ConnectionMiddleware implements NestMiddleware {
    async use(request: Request, response: Response, next: () => void): Promise<any> {
        if (request.headers.domain) {
            const domainDatabase: string = request.headers.domain.toString();

            console.log('Request');
            console.log(domainDatabase);

            try {
                getConnection(domainDatabase);
                console.log('Conexão já existe');
                next();
            } catch (e) {
                console.log('Criando conexão');
                const createdConnection: Connection = await createConnection({
                    type: 'mysql',
                    name: domainDatabase,
                    host: domainDatabase,
                    port: parseInt(process.env.TYPEORM_PORT),
                    username: process.env.TYPEORM_USERNAME,
                    password: process.env.TYPEORM_PASSWORD,
                    database: process.env.TYPEORM_DATABASE,
                    entities: [Pessoa],
                    synchronize: false,
                })

                if (createdConnection) {
                    console.log('Conectado')
                    next();
                } else {
                    console.log('Erro na conexão')
                    throw new BadRequestException(
                        'Database Connection Error',
                        'There is a Error with the Database!',
                    );
                }
            }
        }
    }
}
