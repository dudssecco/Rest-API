import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer'

import PhotoCtrl from '../controllers/PhotoCtrl'
const router = new Router

const upload = multer(multerConfig)

router.post('/', upload.single('file'), PhotoCtrl.store)

export default router
