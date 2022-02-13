import { inject, injectable } from "tsyringe";
import { IDmaxRequest} from "../../dtos/ICreatePoisDTO";
import { POIS } from "../../entities/POIS";
import { IPointInterestRepository } from "../../repositories/IPointInrestRepository";




@injectable()
class DistancePointUseCase {


    // Injeção De Dependências

    constructor(
        @inject("PointInterestRepository")
        private pointInterestRepository: IPointInterestRepository
    ) { }





    // Services Pra Listagem De Pontos De Interesses

    async execute({ x, y, dMax }: IDmaxRequest): Promise<POIS | any> {

        const pois = await this.pointInterestRepository.distancePoint({ x, y, dMax })

        return pois;
    }

}

export { DistancePointUseCase }