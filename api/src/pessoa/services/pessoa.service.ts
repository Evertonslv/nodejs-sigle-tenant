import {Inject} from '@nestjs/common';
import {CreatePessoaDto} from '../dto/create-pessoa.dto';
import {UpdatePessoaDto} from '../dto/update-pessoa.dto';
import {getRepository, Repository} from "typeorm";
import {Pessoa} from "../entities/pessoa.entity";
import {ConnectionService} from "../../connection/service/connection.service";

@ConnectionService()
export class PessoaService {

    private pessoaRepository: Repository<Pessoa>

    constructor(@Inject('CONNECTION') private connection) {
        this.pessoaRepository = connection.getRepository(Pessoa);
    }

    async create(createPessoaDto: CreatePessoaDto) {
        const pessoa = await this.pessoaRepository.create(createPessoaDto);
        return this.pessoaRepository.save(pessoa);
    }

    findAll() {
        return `This action returns all pessoa`;
    }

    findOne(id: number) {
        return `This action returns a #${id} pessoa`;
    }

    update(id: number, updatePessoaDto: UpdatePessoaDto) {
        return `This action updates a #${id} pessoa`;
    }

    remove(id: number) {
        return `This action removes a #${id} pessoa`;
    }
}
