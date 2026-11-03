"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus("ok");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <Input placeholder="Nombre" {...register("name")} />
      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      <Input placeholder="Email" type="email" {...register("email")} />
      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      <Textarea placeholder="Mensaje" {...register("message")} />
      {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
      {status === "ok" && <p className="text-sm text-green-600">Recibido. Te contactamos pronto.</p>}
      {status === "error" && <p className="text-sm text-red-500">Error al enviar.</p>}
    </form>
  );
}
