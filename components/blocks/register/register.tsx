"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { apiService } from "@/lib/api"; // Certifique-se de importar o service correto

const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: { name: string; email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await apiService.createProfile(data.name, data.email, data.password);

      if (response) {
        toast.success("Account created successfully!");
        router.push("/account");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error: any) {
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <Toaster richColors />
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <img className="rounded-lg" src="/2150165967.jpg" alt="war1" />
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <h2 className="text-xl">Register an Account</h2>
              <hr className="border-1 border-gray-400 mb-4" />

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid w-full max-w-sm items-center gap-1">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" {...register("name")} type="text" />
                  {errors.name && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.name.message}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" {...register("email")} type="email" />
                  {errors.email && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.email.message}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" {...register("password")} type="password" />
                  {errors.password && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.password.message}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <Button type="submit" className="gap-4 w-full" disabled={loading}>
                  {loading ? "Registering..." : "Register"} <MoveRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
