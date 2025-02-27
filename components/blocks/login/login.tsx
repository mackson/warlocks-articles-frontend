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
import { authService } from "@/lib/auth"; 

const loginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await authService.login(data.email, data.password);
      
      if (response?.token) {
        toast.success("Login successful!");
        router.push("/account");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed. Please try again.");
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
            <div className="flex flex-col gap-4">
              <img src="/48690.png" alt="login" />
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <h2 className="text-xl">Account Login</h2>
              <hr className="border-1 border-gray-400 mb-4" />

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid w-full max-w-sm items-center gap-1">
                  <Label htmlFor="email">*Email</Label>
                  <Input className="border border-gray-400" id="email" {...register("email")} type="email" />
                  {errors.email && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.email.message}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1">
                  <Label htmlFor="password">*Password</Label>
                  <Input className="border border-gray-400" id="password" {...register("password")} type="password" />
                  {errors.password && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.password.message}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <Button type="submit" className="gap-4 w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"} <MoveRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
