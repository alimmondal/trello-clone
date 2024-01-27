"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();

  return (
    <div className="">
      <Input
        id="title"
        name="title"
        placeholder="Enter a board name"
        required
        disabled={pending}
      />
      {errors?.title ? (
        <div className="">
          {errors.title.map((error: string) => (
            <p className="text-rose-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
