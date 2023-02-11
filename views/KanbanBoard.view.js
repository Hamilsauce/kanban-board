import { defineComponent, computed, ref } from 'vue'
import { router } from '../router/index.js';
import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';

const { template, utils } = ham;

export default {
  template: '#kanban-board-template',
  props: {
    cards: Array,
  },
  setup(props) {
    const order = ref(props.order)

    const handleClick = (e) => {
      console.log('handleClick');
      router.push('/orders/' + order.value.id)
    };

    return {
      order,
      handleClick,
    }
  }
};