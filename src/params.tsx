import LINQ from "@berish/linq";
import { StatefulObject } from "@berish/stateful";

export interface PluginParams {
  stores?: StatefulObject<any>[];
}

const defaultParams: PluginParams = {
  stores: [],
};

export function getDefaultParams(params?: PluginParams) {
  params = params || defaultParams;
  if (params !== defaultParams) {
    LINQ.from(Object.keys(defaultParams))
      .except(Object.keys(params))
      .forEach((key: string) => {
        (params as any)[key] = (defaultParams as any)[key];
      });
  }
  return params;
}
