---
title: Zod
description: Zod plugin for Hey API. Compatible with all our features.
---

<!-- <script setup>
import { embedProject } from '../../embed'
</script> -->

# Zod

::: warning
Zod plugin is currently in beta. The interface might change before it becomes stable. We encourage you to leave feedback on [GitHub](https://github.com/hey-api/openapi-ts/issues/876).
:::

### About

[Zod](https://zod.dev) is a TypeScript-first schema validation library with static type inference.

<!-- ### Demo

<button class="buttonLink" @click="(event) => embedProject('hey-api-client-fetch-plugin-zod-example')(event)">
Launch demo
</button> -->

## Features

- seamless integration with `@hey-api/openapi-ts` ecosystem
- Zod schemas for requests, responses, and reusable definitions

## Installation

In your [configuration](/openapi-ts/get-started), add `zod` to your plugins and you'll be ready to generate Zod artifacts. :tada:

```js
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    'zod', // [!code ++]
  ],
};
```

### SDKs

To add data validators to your SDKs, set `sdk.validator` to `true`.

```js
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    'zod',
    {
      name: '@hey-api/sdk', // [!code ++]
      validator: true, // [!code ++]
    },
  ],
};
```

Learn more about data validators in your SDKs on the [SDKs](/openapi-ts/output/sdk#validators) page.

## Output

The Zod plugin will generate the following artifacts, depending on the input specification.

## Requests

A single request schema is generated for each endpoint. It may contain a request body, parameters, and headers.

::: code-group

```js [config]
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    {
      name: 'zod',
      requests: true, // [!code ++]
    },
  ],
};
```

```ts [output]
const zData = z.object({
  body: z
    .object({
      foo: z.string().optional(),
      bar: z.union([z.number(), z.null()]).optional(),
    })
    .optional(),
  path: z.object({
    baz: z.string(),
  }),
  query: z.never().optional(),
});
```

:::

::: tip
If you need to access individual fields, you can do so using the [`.shape`](https://zod.dev/api?id=shape) API. For example, we can get the request body schema with `zData.shape.body`.
:::

You can customize the naming and casing pattern for `requests` schemas using the `.name` and `.case` options.

## Responses

A single Zod schema is generated for all endpoint's responses. If the endpoint describes multiple responses, the generated schema is a union of all possible response shapes.

::: code-group

```js [config]
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    {
      name: 'zod',
      responses: true, // [!code ++]
    },
  ],
};
```

```ts [output]
const zResponse = z.union([
  z.object({
    foo: z.string().optional(),
  }),
  z.object({
    bar: z.number().optional(),
  }),
]);
```

:::

You can customize the naming and casing pattern for `responses` schemas using the `.name` and `.case` options.

## Definitions

A Zod schema is generated for every reusable definition from your input.

::: code-group

```js [config]
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    {
      name: 'zod',
      definitions: true, // [!code ++]
    },
  ],
};
```

```ts [output]
const zFoo = z.number().int();

const zBar = z.object({
  bar: z.array(z.number().int()).optional(),
});
```

:::

You can customize the naming and casing pattern for `definitions` schemas using the `.name` and `.case` options.

## Metadata

It's often useful to associate a schema with some additional [metadata](https://zod.dev/metadata) for documentation, code generation, AI structured outputs, form validation, and other purposes. If this is your use case, you can set `metadata` to `true` to generate additional metadata about schemas.

::: code-group

```js [config]
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    {
      name: 'zod',
      metadata: true, // [!code ++]
    },
  ],
};
```

```ts [output]
export const zFoo = z.string().describe('Additional metadata');
```

:::

## Types

In addition to Zod schemas, you can generate schema-specific types. These can be generated for all schemas or for specific resources.

::: code-group

```js [config]
export default {
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    // ...other plugins
    {
      name: 'zod',
      types: {
        infer: false, // by default, no `z.infer` types [!code ++]
      },
      responses: {
        types: {
          infer: true, // `z.infer` types only for response schemas [!code ++]
        },
      },
    },
  ],
};
```

```ts [output]
export type ResponseZodType = z.infer<typeof zResponse>;
```

:::

You can customize the naming and casing pattern for schema-specific `types` using the `.name` and `.case` options.

## Config API

You can view the complete list of options in the [UserConfig](https://github.com/hey-api/openapi-ts/blob/main/packages/openapi-ts/src/plugins/zod/types.d.ts) interface.

<!--@include: ../../partials/examples.md-->
<!--@include: ../../partials/sponsors.md-->
