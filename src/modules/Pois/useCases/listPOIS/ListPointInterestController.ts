import {Request, Response} from 'express'
import { container } from "tsyringe"
import { ListPointInterestUseCase } from "./ListPointInterestUseCase"











class ListPointInterestController {


    // Controlador


    async handle(req: Request, res: Response): Promise<Response> {

        const listPointInterestUseCase = container.resolve(ListPointInterestUseCase)

        const list = await listPointInterestUseCase.execute();

        return res.status(201).json(list)

    }
}

export {ListPointInterestController}