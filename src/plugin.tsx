import { LifecyclePlugin } from '@berish/mvc-core';
import { PluginParams, getDefaultParams } from './params';

export interface StatefulPlugin {
  (params: PluginParams): LifecyclePlugin;
}

export const plugin: StatefulPlugin = (params) => {
  const { stores } = getDefaultParams(params);

  return {
    upgradeRenderConfig: (renderConfig) => {
      const prevConnectModel = renderConfig.connectModel;

      renderConfig.connectModel = (component) => [...prevConnectModel(component), ...stores];
    },
  };
};
