import { createApp, computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import { router } from './router/index.js';
import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';

const { template, utils } = ham;
console.warn((((new Date(Date.now()).getTime() - 1676081891020) / 1000) / 60)/60);

// const appEl = document.querySelector('#app');
// appEl.innerHTML = new Date(Date.now()).getTime()
const app = createApp({
  setup() {
    const route = useRoute();
    const currentPath = computed(() => route.path.replace(/\//g, ''));
    const cnt = ref(0);
    console.log('route', route)
    setInterval(() => {
      cnt.value++
    }, 1000);


    onMounted(() => {

    })

    return {
      cnt,
      currentPath
    }
  },
});

// app.use(router);

// app.mount('#app');

console.log('suk');