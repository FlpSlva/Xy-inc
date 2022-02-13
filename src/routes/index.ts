import { Router } from "express";

import { POISroutes } from "./createPOIS/createPOIS.routes";
import { distancePOISroutes } from "./listDistancePOIS/listDistancePOIS.routes";
import { listPOISroutes } from "./listPOIS/listPOIS.routes";

const router = Router()

router.use("/pointInterest", POISroutes);
router.use("/pointInterest", listPOISroutes);
router.use("/pointInterest", distancePOISroutes);

export {router}