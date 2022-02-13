import { getRepository, LessThanOrEqual, Repository } from "typeorm";
import { ICreatePoinInterestDTO, IDmaxRequest } from "../../dtos/ICreatePoisDTO";
import {POIS } from "../../entities/POIS";
import { IPointInterestRepository } from "../IPointInrestRepository";

// Repositório Que Implementa Interface

class PointInterestRepository implements IPointInterestRepository {

    private repository?: Repository<POIS>

    constructor() {
        this.repository = getRepository(POIS)
    }

    // Método Criar

    async create({ name, x, y }: ICreatePoinInterestDTO): Promise<void> {

        const pointInterest = this.repository.create({
            name,
            x,
            y
        })

        await this.repository.save(pointInterest);


        
    }

    // Procurar Nome Já Existente No Banco De Dados

    async findByName(name: string): Promise<POIS> {

        const pointName = await this.repository.findOne({ name })

        return pointName
    }

    // Listar Todos Os Pontos De Interesse

    async list(): Promise<POIS[]> {
        const lists = await this.repository.find();

        return lists;
    }

    // Listar Pontos De Interesse Por proximidade

    async distancePoint({ x, y, dMax }: IDmaxRequest): Promise<POIS | any> {

        const database = await this.repository.find()

        const arra = []
        


        database.forEach((c) => {

            const cordA = c.x - x;
            const cordB = c.y - y;
            const nameCord = c.name

            const cordC = Math.sqrt(Math.pow(cordA, 2) + Math.pow(cordB, 2))
            if (Math.floor(cordC) <= dMax) {

                
                arra.push(nameCord)

            }
            
        })

        return arra;
    }
}


export { PointInterestRepository };

