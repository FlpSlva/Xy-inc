import { Router } from "express";
import { PointInterestController } from "../../modules/Pois/useCases/createPOIS/PointInterestController";

const POISroutes = Router()
const createPOIS = new PointInterestController();


POISroutes.post("/create", createPOIS.handle)


export {POISroutes}