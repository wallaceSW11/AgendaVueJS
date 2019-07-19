import Vue from 'vue'
import Router from 'vue-router'

import GridAgenda from '@/components/GridAgenda'
import CadastroCliente from '@/components/CadastroCliente'
import CadastroUsuario from '@/components/CadastroUsuario'
import CadastroAgenda from '@/components/CadastroAgenda'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'agenda',
            component: GridAgenda
        },
        {
            path: '/cadastro/cliente',
            name: 'cadastroCliente',
            component: CadastroCliente,
        },
        {
            path: '/agenda/cadastro',
            name: 'cadastroAgenda',
            component: CadastroAgenda,
        },
        {
            path: '/agenda/cadastro',
            name: 'cadastroUsuario',
            component: CadastroUsuario,
        }
    ]
});