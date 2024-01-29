"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormSubmitProps {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "primary"
    | "secondary"
    | "link"
    | "ghost";
}

const FormSubmit = ({
  children,
  disabled,
  className,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};

export default FormSubmit;
