import { z } from "zod";

import {
  applicationSchema,
  linksSchema,
  shopSchema,
  userSchema,
} from "@/apis/schema";
import { Address } from "@/types/user";

export const requiredUserSchema = userSchema.pick({
  id: true,
  email: true,
  type: true,
});
export type RequiredUser = z.infer<typeof requiredUserSchema>;

export const requiredApplyUserSchema = userSchema.pick({
  name: true,
  phone: true,
});

export const requiredApplyStatusSchema = applicationSchema.pick({
  status: true,
});

export const applyPutResponseSchema = z
  .object({
    item: requiredApplyStatusSchema,
  })
  .merge(linksSchema);

export const applyPostResponseSchema = z
  .object({
    item: requiredApplyUserSchema,
  })
  .merge(linksSchema);

export const usersPostResponseSchema = z
  .object({
    item: requiredUserSchema,
  })
  .merge(linksSchema);

export type UsersPostResponse = z.infer<typeof usersPostResponseSchema>;

export type UsersPostRequestBody = {
  email: string;
  password: string;
  type: "employee" | "employer";
};

export const userGetResponseSchema = z
  .object({
    item: userSchema.merge(
      z.object({
        shop: z
          .object({
            item: shopSchema,
          })
          .nullable(),
      }),
    ),
  })
  .merge(linksSchema);
export type UserGetResponse = z.infer<typeof userGetResponseSchema>;

export type userPutRequestBody = {
  name: string;
  phone: string;
  address: Address;
  bio?: string;
};
