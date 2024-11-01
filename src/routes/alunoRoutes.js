import { Router } from 'express';
import AlunoCtrl from '../controllers/AlunoCtrl'
const router = new Router

router.get('/', AlunoCtrl.index)

export default router
