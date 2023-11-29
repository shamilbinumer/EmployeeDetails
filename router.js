import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();

router.route("/addemploye").post(controller.addData)
router.route("/getemploye").get(controller.getData)
router.route("/getDetails/:id").post(controller.getfullData)
router.route("/deleployee/:id").delete(controller.delEmployee);
router.route("/editemployee/:id").patch(controller.editEmployee);

export default router;