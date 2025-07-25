---
title: Client
description: Learn about files generated with @hey-api/openapi-ts.
---

# Client

`client.gen.ts` is generated by [client plugins](/openapi-ts/clients). If you choose to generate SDKs (enabled by default), we use the Fetch client unless specified otherwise.

::: code-group

```ts [client.gen.ts]
import { createClient, createConfig } from './client';

export const client = createClient(createConfig());
```

:::

The contents of this file are consumed by SDKs, but you can also import `client` in your application to perform additional configuration or send manual requests.

## Bundle

Client plugins provide their bundles inside `client` and `core` folders. The contents of these folders don't depend on the provided input. Everything inside these folders serves as a scaffolding so the generated code can make HTTP requests.

<!--@include: ../../partials/examples.md-->
<!--@include: ../../partials/sponsors.md-->
