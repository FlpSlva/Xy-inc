// Design Patterns, Registro De Singleton Utilizando Tsyringe


import { container } from "tsyringe";
import { PointInterestRepository } from "../../modules/Pois/repositories/implementations/PointInterestRepository";
import { IPointInterestRepository } from "../../modules/Pois/repositories/IPointInrestRepository";

container.registerSingleton<IPointInterestRepository>(
    
    "PointInterestRepository",
    PointInterestRepository
)

