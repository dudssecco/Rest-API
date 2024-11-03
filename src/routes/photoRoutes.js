import { Router } from 'express';
import PhotoCtrl from '../controllers/PhotoCtrl'
import loginRequired from '../middlewares/loginRequired';
const router = new Router

router.post('/', loginRequired, PhotoCtrl.store)

export default router
