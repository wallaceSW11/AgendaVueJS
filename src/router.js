import Vue from 'vue'
import Router from 'vue-router'

import GridAgenda from '@/components/GridAgenda'
import CadastroCliente from '@/components/CadastroCliente'
import CadastroUsuario from '@/components/CadastroUsuario'
import CadastroAgenda from '@/components/CadastroAgenda'
import CadastroAgendaProduto from '@/components/CadastroAgendaProduto'
import CardProdutoAgenda from '@/components/CardProdutoAgenda'



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
            path: '/Cadastro/Cliente',
            name: 'cadastroCliente',
            component: CadastroCliente,
        },
        {
            path: '/Agenda/Cadastro/',
            name: 'cadastroAgenda',
            component: CadastroAgenda,
            props: true
        },
        {
            path: '/Cadastro/Usuario',
            name: 'cadastroUsuario',
            component: CadastroUsuario,
        },
        {
            path: '/Agenda/Cadastro/Produto',
            name: 'cadastroAgendaProduto',
            component: CadastroAgendaProduto,
        },
        {
            path: '/Agenda/Cadastro/Produto',
            name: 'cardProdutoAgenda',
            component: CardProdutoAgenda,
        }

    ]

});