import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { PointInterestUseCase } from './PointIterestUseCase'





class PointInterestController {

    // Controlador 

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, y, x } = req.body

        const pointInterestUseCase = container.resolve(PointInterestUseCase)

        await pointInterestUseCase.execute({ name, x, y })

       return res.status(201).json({message: "Criado Com Sucesso !"});
       
    }
}

export { PointInterestController }