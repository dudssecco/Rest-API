import { Router } from 'express';
import AlunoCtrl from '../controllers/AlunoCtrl'
import loginRequired from '../middlewares/loginRequired';
const router = new Router

router.get('/', AlunoCtrl.index)
router.get('/:id', AlunoCtrl.show)

router.post('/', loginRequired, AlunoCtrl.store)
router.put('/:id', loginRequired, AlunoCtrl.update)
router.delete('/:id', loginRequired, AlunoCtrl.delete)

export default router
