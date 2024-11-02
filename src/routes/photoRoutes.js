import { Router } from 'express';
import PhotoCtrl from '../controllers/PhotoCtrl'
const router = new Router

router.post('/', PhotoCtrl.store)

export default router
