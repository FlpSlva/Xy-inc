import { inject, injectable } from "tsyringe";
import { POIS } from "../../entities/POIS";
import { IPointInterestRepository } from "../../repositories/IPointInrestRepository";








@injectable()
class ListPointInterestUseCase {


    // Injeção De Dependências

    constructor(
        @inject("PointInterestRepository")
        private pointInterestRepository: IPointInterestRepository
    ) {}




    // Services Pra Listar Por Proximidade

    async execute(): Promise<POIS[]> {

        const lists = await this.pointInterestRepository.list();

        return lists;

    }



}


export {ListPointInterestUseCase}