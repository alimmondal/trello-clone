"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";
import FormButton from "./form-button";
import { FormInput } from "./form-input";

export const Form = () => {
  const { execute, FieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (error) => {
      console.log(error, "Error");
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col py-2">
        <FormInput errors={FieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
