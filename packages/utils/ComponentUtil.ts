import { App, Plugin } from 'vue';

const withInstall = <T>(comp: T): T & Plugin => {
  const c = comp as any;
  c.install = function(app: App) {
    app.component(c.name, comp);
  };

  return comp as T & Plugin;
};

export default {
  withInstall
};
