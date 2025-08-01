// This file is auto-generated by @hey-api/openapi-ts

import { z } from 'zod';

export const zOrder = z.object({
  complete: z.boolean().optional(),
  id: z.coerce.bigint().optional(),
  petId: z.coerce.bigint().optional(),
  quantity: z.number().int().optional(),
  shipDate: z.string().datetime().optional(),
  status: z.enum(['placed', 'approved', 'delivered']).optional(),
});

export const zCategory = z.object({
  id: z.coerce.bigint().optional(),
  name: z.string().optional(),
});

export const zUser = z.object({
  email: z.string().optional(),
  firstName: z.string().optional(),
  id: z.coerce.bigint().optional(),
  lastName: z.string().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  userStatus: z.number().int().optional(),
  username: z.string().optional(),
});

export const zTag = z.object({
  id: z.coerce.bigint().optional(),
  name: z.string().optional(),
});

export const zPet = z.object({
  category: zCategory.optional(),
  id: z.coerce.bigint().optional(),
  name: z.string(),
  photoUrls: z.array(z.string()),
  status: z.enum(['available', 'pending', 'sold']).optional(),
  tags: z.array(zTag).optional(),
});

export const zApiResponse = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  type: z.string().optional(),
});

export const zPet2 = zPet;

/**
 * List of user object
 */
export const zUserArray = z.array(zUser);

export const zAddPetData = z.object({
  body: zPet,
  path: z.never().optional(),
  query: z.never().optional(),
});

/**
 * Successful operation
 */
export const zAddPetResponse = zPet;

export const zUpdatePetData = z.object({
  body: zPet,
  path: z.never().optional(),
  query: z.never().optional(),
});

/**
 * Successful operation
 */
export const zUpdatePetResponse = zPet;

export const zFindPetsByStatusData = z.object({
  body: z.never().optional(),
  path: z.never().optional(),
  query: z
    .object({
      status: z.enum(['available', 'pending', 'sold']).optional(),
    })
    .optional(),
});

/**
 * successful operation
 */
export const zFindPetsByStatusResponse = z.array(zPet);

export const zFindPetsByTagsData = z.object({
  body: z.never().optional(),
  path: z.never().optional(),
  query: z
    .object({
      tags: z.array(z.string()).optional(),
    })
    .optional(),
});

/**
 * successful operation
 */
export const zFindPetsByTagsResponse = z.array(zPet);

export const zDeletePetData = z.object({
  body: z.never().optional(),
  headers: z
    .object({
      api_key: z.string().optional(),
    })
    .optional(),
  path: z.object({
    petId: z.coerce.bigint(),
  }),
  query: z.never().optional(),
});

export const zGetPetByIdData = z.object({
  body: z.never().optional(),
  path: z.object({
    petId: z.coerce.bigint(),
  }),
  query: z.never().optional(),
});

/**
 * successful operation
 */
export const zGetPetByIdResponse = zPet;

export const zUpdatePetWithFormData = z.object({
  body: z.never().optional(),
  path: z.object({
    petId: z.coerce.bigint(),
  }),
  query: z
    .object({
      name: z.string().optional(),
      status: z.string().optional(),
    })
    .optional(),
});

/**
 * successful operation
 */
export const zUpdatePetWithFormResponse = zPet;

export const zUploadFileData = z.object({
  body: z.string().optional(),
  path: z.object({
    petId: z.coerce.bigint(),
  }),
  query: z
    .object({
      additionalMetadata: z.string().optional(),
    })
    .optional(),
});

/**
 * successful operation
 */
export const zUploadFileResponse = zApiResponse;

export const zGetInventoryData = z.object({
  body: z.never().optional(),
  path: z.never().optional(),
  query: z.never().optional(),
});

/**
 * successful operation
 */
export const zGetInventoryResponse = z.object({});

export const zPlaceOrderData = z.object({
  body: zOrder.optional(),
  path: z.never().optional(),
  query: z.never().optional(),
});

/**
 * successful operation
 */
export const zPlaceOrderResponse = zOrder;

export const zDeleteOrderData = z.object({
  body: z.never().optional(),
  path: z.object({
    orderId: z.coerce.bigint(),
  }),
  query: z.never().optional(),
});

export const zGetOrderByIdData = z.object({
  body: z.never().optional(),
  path: z.object({
    orderId: z.coerce.bigint(),
  }),
  query: z.never().optional(),
});

/**
 * successful operation
 */
export const zGetOrderByIdResponse = zOrder;

export const zCreateUserData = z.object({
  body: zUser.optional(),
  path: z.never().optional(),
  query: z.never().optional(),
});

/**
 * successful operation
 */
export const zCreateUserResponse = zUser;

export const zCreateUsersWithListInputData = z.object({
  body: z.array(zUser).optional(),
  path: z.never().optional(),
  query: z.never().optional(),
});

/**
 * Successful operation
 */
export const zCreateUsersWithListInputResponse = zUser;

export const zLoginUserData = z.object({
  body: z.never().optional(),
  path: z.never().optional(),
  query: z
    .object({
      password: z.string().optional(),
      username: z.string().optional(),
    })
    .optional(),
});

/**
 * successful operation
 */
export const zLoginUserResponse = z.string();

export const zLogoutUserData = z.object({
  body: z.never().optional(),
  path: z.never().optional(),
  query: z.never().optional(),
});

export const zDeleteUserData = z.object({
  body: z.never().optional(),
  path: z.object({
    username: z.string(),
  }),
  query: z.never().optional(),
});

export const zGetUserByNameData = z.object({
  body: z.never().optional(),
  path: z.object({
    username: z.string(),
  }),
  query: z.never().optional(),
});

/**
 * successful operation
 */
export const zGetUserByNameResponse = zUser;

export const zUpdateUserData = z.object({
  body: zUser.optional(),
  path: z.object({
    username: z.string(),
  }),
  query: z.never().optional(),
});
