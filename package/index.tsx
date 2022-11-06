import { defineComponent } from 'vue';
import ComponentUtil from './utils/ComponentUtil';

export default ComponentUtil.withInstall(
  defineComponent({
    name: 'my-component',
    setup() {
      return () => <div>Vue Component Template</div>;
    }
  })
);