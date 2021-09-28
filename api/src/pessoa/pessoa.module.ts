import { Module } from '@nestjs/common';
import { PessoaService } from './services/pessoa.service';
import { PessoaController } from './controllers/pessoa.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pessoa} from "./entities/pessoa.entity";
import {ConnectionModule} from "../connection/connection.module";

@Module({
  imports: [
      ConnectionModule,
      TypeOrmModule.forFeature([Pessoa])
  ],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
