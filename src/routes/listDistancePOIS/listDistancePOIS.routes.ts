import { Router } from "express";
import { DistancePointController } from "../../modules/Pois/useCases/listDistancePOIS/distancePointController";

const distancePOISroutes = Router();
const distancePOISController = new DistancePointController()

distancePOISroutes.post("/listDistance", distancePOISController.handle)

export {distancePOISroutes};