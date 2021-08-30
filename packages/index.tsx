import { defineComponent, DefineComponent, Plugin } from 'vue';
import ComponentUtil from './utils/ComponentUtil';

export default ComponentUtil.withInstall(
  defineComponent({
    name: 'custom',
    setup() {
      return () => <div>Vue 3 Custom Component Template</div>;
    }
  })
);
