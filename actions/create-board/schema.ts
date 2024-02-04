import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Title required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "title is too short",
    }),
  image: z.string({
    required_error: "Image required",
    invalid_type_error: "Image is required",
  }),
});
