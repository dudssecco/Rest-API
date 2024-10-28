import { Router } from 'express';
import UserCtrl from '../controllers/UserCtrl.js'
const router = new Router

router.post('/', UserCtrl.store)

export default router

/*
index => Lista todos os usuários GET
store/create => Cria um novo usuário POST
delete => Deleta um usuário DELET
update => Atualiza um usuário PUT ou PATCH
show => Mostra um usuário GET
*/
