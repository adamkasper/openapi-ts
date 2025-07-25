import type { HeyApiClientAxiosPlugin } from '../client-axios';
import type { HeyApiClientFetchPlugin } from '../client-fetch';
import type { HeyApiClientNextPlugin } from '../client-next';
import type { HeyApiClientNuxtPlugin } from '../client-nuxt';

export type PluginHandler =
  | HeyApiClientAxiosPlugin['Handler']
  | HeyApiClientFetchPlugin['Handler']
  | HeyApiClientNextPlugin['Handler']
  | HeyApiClientNuxtPlugin['Handler'];

/**
 * Public Client API.
 */
export namespace Client {
  export type Config = {
    /**
     * Set a default base URL when creating the client? You can set `baseUrl`
     * to a string which will be used as the base URL. If your input defines
     * server(s), you can set `baseUrl` to a number to pick a specific server
     * to use as the base URL. You can disable setting the base URL by setting
     * `baseUrl` to `false`. By default, `baseUrl` is `true` and it will try to
     * use the first defined server value. If there's none, we won't set a
     * base URL.
     *
     * If the matched URL contains template literals, it will be ignored.
     *
     * @default true
     */
    baseUrl?: string | number | boolean;
    /**
     * Bundle the client module? When `true`, the client module will be copied
     * from the client plugin and bundled with the generated output.
     *
     * @default true
     */
    bundle?: boolean;
    /**
     * Should the exports from the generated files be re-exported in the index
     * barrel file?
     *
     * @default false
     */
    exportFromIndex?: boolean;
    /**
     * Name of the generated file.
     *
     * @default 'client'
     */
    output?: string;
    /**
     * Relative path to the runtime configuration file. This file must export
     * a `createClientConfig()` function. The `createClientConfig()` function
     * will be called on client initialization and the returned object will
     * become the client's initial configuration.
     *
     * You may want to initialize your client this way instead of calling
     * `setConfig()`. This is useful for example if you're using Next.js
     * to ensure your client always has the correct values.
     */
    runtimeConfigPath?: string;
    /**
     * Should the type helper for base URL allow only values matching the
     * server(s) defined in the input? By default, `strictBaseUrl` is `false`
     * which will provide type hints and allow you to pass any string.
     *
     * Note that setting `strictBaseUrl` to `true` can produce an invalid
     * build if you specify `baseUrl` which doesn't conform to the type helper.
     *
     * @default false
     */
    strictBaseUrl?: boolean;
  };
}
