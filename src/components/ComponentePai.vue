<template>
    <div>
            <h2 v-if="mostrar">Apareci</h2>
        <H1>Passando props - Componente Pai</H1>
        <!-- <componente-filho :dados="mensagem"></componente-filho>
        <br>
        <componente-filho2 :dados="pessoa"/> -->
        <br>
        <componente-filho3 @evento-do-filho="colocarNaLista" :prop-do-pai="texto" />
        <ul v-if="mensagens.length > 0">
            <li v-for="msg in mensagens" :key="msg"> {{msg}}</li>
        </ul>

        <br>
        

    </div>
</template>

<script>
//import ComponenteFilho from '@/components/ComponenteFilho'
//import ComponenteFilho2 from '@/components/ComponenteFilho2'
import ComponenteFilho3 from '@/components/ComponenteFilho3'


export default {
    data: () => ( {        
        mostrar: false,
        mensagem: 'Oi Filho', // Filho
        pessoa: {             // Filho2
            nome: 'wallzin',
            idade: '29',
            mostrar: true
        },
        texto: 'Informe um texto:', // filho3
        mensagens: []                      //filho3
    }),
    components: {
      //  'componente-filho': ComponenteFilho,
       // 'componente-filho2': ComponenteFilho2,
        'componente-filho3': ComponenteFilho3
    },
    methods: {
        mostrarMensagem() {
            alert('ai sim')
        },
        colocarNaLista(payload) {   //filho3
            this.mensagens.push(payload.minhaMsg + ' - ' + payload.meuHorario),            
            this.mostrar = payload.visualizar
        }   
    }  
}
</script>
