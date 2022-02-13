
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreatePoinInterestDTO } from "../../dtos/ICreatePoisDTO";
import { IPointInterestRepository } from "../../repositories/IPointInrestRepository";




@injectable()
class PointInterestUseCase {

    // Injeção De Dependências

    constructor(
        @inject("PointInterestRepository")
        private pointInterestUseCase: IPointInterestRepository
    ) { }




    // Services Pra Criar Um Ponto De interesse

    async execute({ name, x, y }: ICreatePoinInterestDTO): Promise<void> {

        const nameAlreadyExists = await this.pointInterestUseCase.findByName(name)

        if (nameAlreadyExists) {
            throw new AppError("Esse Nome ja Está Em Uso !")
        }

        await this.pointInterestUseCase.create({
            name,
            x,
            y
        })

    }

}






export { PointInterestUseCase }