import { definePluginConfig, mappers } from '../shared/utils/config';
import { api } from './api';
import { handler } from './plugin';
import type { ZodPlugin } from './types';

export const defaultConfig: ZodPlugin['Config'] = {
  api,
  config: {
    case: 'camelCase',
    comments: true,
    exportFromIndex: false,
    metadata: false,
  },
  handler,
  name: 'zod',
  output: 'zod',
  resolveConfig: (plugin, context) => {
    plugin.config.dates = context.valueToObject({
      defaultValue: {
        offset: false,
      },
      value: plugin.config.dates,
    });

    plugin.config.types = context.valueToObject({
      defaultValue: {
        infer: {
          case: 'PascalCase',
          enabled: false,
        },
      },
      mappers: {
        object: (fields, defaultValue) => ({
          ...fields,
          infer: context.valueToObject({
            defaultValue: {
              ...(defaultValue.infer as Extract<
                typeof defaultValue.infer,
                Record<string, unknown>
              >),
              enabled:
                fields.infer !== undefined
                  ? Boolean(fields.infer)
                  : (
                      defaultValue.infer as Extract<
                        typeof defaultValue.infer,
                        Record<string, unknown>
                      >
                    ).enabled,
            },
            mappers,
            value: fields.infer,
          }),
        }),
      },
      value: plugin.config.types,
    });

    plugin.config.definitions = context.valueToObject({
      defaultValue: {
        case: plugin.config.case ?? 'camelCase',
        enabled: true,
        name: 'z{{name}}',
        types: {
          ...plugin.config.types,
          infer: {
            ...(plugin.config.types.infer as Extract<
              typeof plugin.config.types.infer,
              Record<string, unknown>
            >),
            name: '{{name}}ZodType',
          },
        },
      },
      mappers: {
        ...mappers,
        object: (fields, defaultValue) => ({
          ...fields,
          types: context.valueToObject({
            defaultValue: defaultValue.types!,
            mappers: {
              object: (fields, defaultValue) => ({
                ...fields,
                infer: context.valueToObject({
                  defaultValue: {
                    ...(defaultValue.infer as Extract<
                      typeof defaultValue.infer,
                      Record<string, unknown>
                    >),
                    enabled:
                      fields.infer !== undefined
                        ? Boolean(fields.infer)
                        : (
                            defaultValue.infer as Extract<
                              typeof defaultValue.infer,
                              Record<string, unknown>
                            >
                          ).enabled,
                  },
                  mappers,
                  value: fields.infer,
                }),
              }),
            },
            value: fields.types,
          }),
        }),
      },
      value: plugin.config.definitions,
    });

    plugin.config.requests = context.valueToObject({
      defaultValue: {
        case: plugin.config.case ?? 'camelCase',
        enabled: true,
        name: 'z{{name}}Data',
        types: {
          ...plugin.config.types,
          infer: {
            ...(plugin.config.types.infer as Extract<
              typeof plugin.config.types.infer,
              Record<string, unknown>
            >),
            name: '{{name}}DataZodType',
          },
        },
      },
      mappers: {
        ...mappers,
        object: (fields, defaultValue) => ({
          ...fields,
          types: context.valueToObject({
            defaultValue: defaultValue.types!,
            mappers: {
              object: (fields, defaultValue) => ({
                ...fields,
                infer: context.valueToObject({
                  defaultValue: {
                    ...(defaultValue.infer as Extract<
                      typeof defaultValue.infer,
                      Record<string, unknown>
                    >),
                    enabled:
                      fields.infer !== undefined
                        ? Boolean(fields.infer)
                        : (
                            defaultValue.infer as Extract<
                              typeof defaultValue.infer,
                              Record<string, unknown>
                            >
                          ).enabled,
                  },
                  mappers,
                  value: fields.infer,
                }),
              }),
            },
            value: fields.types,
          }),
        }),
      },
      value: plugin.config.requests,
    });

    plugin.config.responses = context.valueToObject({
      defaultValue: {
        case: plugin.config.case ?? 'camelCase',
        enabled: true,
        name: 'z{{name}}Response',
        types: {
          ...plugin.config.types,
          infer: {
            ...(plugin.config.types.infer as Extract<
              typeof plugin.config.types.infer,
              Record<string, unknown>
            >),
            name: '{{name}}ResponseZodType',
          },
        },
      },
      mappers: {
        ...mappers,
        object: (fields, defaultValue) => ({
          ...fields,
          types: context.valueToObject({
            defaultValue: defaultValue.types!,
            mappers: {
              object: (fields, defaultValue) => ({
                ...fields,
                infer: context.valueToObject({
                  defaultValue: {
                    ...(defaultValue.infer as Extract<
                      typeof defaultValue.infer,
                      Record<string, unknown>
                    >),
                    enabled:
                      fields.infer !== undefined
                        ? Boolean(fields.infer)
                        : (
                            defaultValue.infer as Extract<
                              typeof defaultValue.infer,
                              Record<string, unknown>
                            >
                          ).enabled,
                  },
                  mappers,
                  value: fields.infer,
                }),
              }),
            },
            value: fields.types,
          }),
        }),
      },
      value: plugin.config.responses,
    });
  },
  tags: ['validator'],
};

/**
 * Type helper for Zod plugin, returns {@link Plugin.Config} object
 */
export const defineConfig = definePluginConfig(defaultConfig);
