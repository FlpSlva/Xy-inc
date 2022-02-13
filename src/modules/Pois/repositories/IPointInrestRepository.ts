import { ICreatePoinInterestDTO, IDmaxRequest } from "../dtos/ICreatePoisDTO";
import { POIS } from "../entities/POIS";


// Interface Do Repositorio


interface IPointInterestRepository {

    create(data: ICreatePoinInterestDTO): Promise<void>;
    findByName(name: string): Promise<POIS>
    list(): Promise<POIS[]>
    distancePoint({x, y, dMax}: IDmaxRequest): Promise<POIS | any>
}

export {IPointInterestRepository};



