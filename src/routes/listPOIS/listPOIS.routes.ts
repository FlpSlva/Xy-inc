import { Router } from "express";
import { ListPointInterestController } from "../../modules/Pois/useCases/listPOIS/ListPointInterestController";

const listPOISroutes = Router();
const listPOIScontroller = new ListPointInterestController()


listPOISroutes.get("/list", listPOIScontroller.handle)

export {listPOISroutes}
