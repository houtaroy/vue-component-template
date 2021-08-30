import { createApp } from 'vue';
import App from './App.vue';
import Custom from '../packages';

const app = createApp(App);
app.use(Custom);

app.mount('#app');
