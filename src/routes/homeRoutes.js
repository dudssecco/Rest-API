import { Router } from 'express';
import HomeCtrl from '../controllers/HomeCtrl'
const router = new Router

router.get('/', HomeCtrl.index)

export default router
