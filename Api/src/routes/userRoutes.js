import { Router } from 'express';
import UserCtrl from '../controllers/UserCtrl.js'
import loginRequired from '../middlewares/loginRequired.js';
const router = new Router

// router.get('/', UserCtrl.index)
// router.get('/:id', UserCtrl.show)

router.post('/', UserCtrl.store)
router.put('/', loginRequired, UserCtrl.update)
router.delete('/', loginRequired, UserCtrl.delete)

export default router

/*
index => Lista todos os usuários GET
store/create => Cria um novo usuário POST
delete => Deleta um usuário DELET
update => Atualiza um usuário PUT ou PATCH
show => Mostra um usuário GET
*/
