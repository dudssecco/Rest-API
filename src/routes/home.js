import express from "express";
import homeCtrl from "../controllers/HomeCtrl"
const router = express.Router()

router.get('/', homeCtrl.index)

export default router