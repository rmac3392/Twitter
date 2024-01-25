import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import './style.css'
import App from './App.vue'

const app  = createApp(App);

app.use(mdiVue,{
    icons:mdijs
})
app.mount('#app');

