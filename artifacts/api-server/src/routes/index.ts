import { Router, type IRouter } from "express";
import healthRouter from "./health";
import instructorRouter from "./instructor";

const router: IRouter = Router();

router.use(healthRouter);
router.use(instructorRouter);

export default router;
