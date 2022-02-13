import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DistancePointUseCase } from './distancePointUseCase'








class DistancePointController {

    // Controlador

    async handle(req: Request, res: Response): Promise<Response | void> {

        const { y, x, dMax } = req.body

        const distancePointUseCase = container.resolve(DistancePointUseCase)

        const pois = await distancePointUseCase.execute({x, y, dMax})



        return res.status(201).json(pois)

    }

}

export { DistancePointController }