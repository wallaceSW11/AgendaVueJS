import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#424242',
        secondary: '#6E6E6E',
        accent: '#8c9eff',
        error: '#b71c1c',
        background: '#E6E6E6'
    }
})