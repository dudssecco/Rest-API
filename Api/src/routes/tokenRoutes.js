import { Router } from 'express';
import TokenCtrl from '../controllers/TokenCtrl'
const router = new Router

router.post('/', TokenCtrl.store)

export default router
