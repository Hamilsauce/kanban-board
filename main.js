import { createApp, computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import { router } from './router/index.js';

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

app.mount('#app');

console.log('suk');