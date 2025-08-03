'use client';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useState } from "react";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (isRegisterForm && !name.trim()) return toast.error("Please enter your name.", { toastId: "name" });
    if (!email.trim()) return toast.error("Please enter your email.", { toastId: "email" });
    if (!emailRegex.test(email)) return toast.error("Enter a valid email address.", { toastId: "invalid-email" });
    if (!password.trim()) return toast.error("Please enter your password.", { toastId: "password" });

    try {
      const endpoint = isRegisterForm ? "/api/register" : "/api/login";
      const body = isRegisterForm ? { name, email, password } : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok && data.status !== false) {
        toast.success(data.message);

        // Save user data and set cookie
        if (!isRegisterForm) {
          localStorage.setItem("userName", data.userDetails?.name || "");
          localStorage.setItem("userEmail", data.userDetails?.email || "");
          localStorage.setItem("userId", data.userDetails?.id || "");

          // Set cookie
          document.cookie = `loggedIn=true; path=/; max-age=86400;`;

          // Redirect
          window.location.href = "/dashboard";
        } else {
          // Optional: Auto-switch to login form after register
          setIsRegisterForm(false);
        }
      } else {
        toast.error(data.error || "Something went wrong.", { toastId: "error" });
      }
    } catch (error) {
      toast.error("Unexpected error occurred.", { toastId: "catch-error" });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {isRegisterForm ? "Create your account" : "Welcome back"}
          </CardTitle>
          <CardDescription className="hidden">
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              {isRegisterForm && (
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-border focus-visible:ring-transparent"
                  />
                </div>
              )}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-border focus-visible:ring-transparent"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Please enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-border focus-visible:ring-transparent"
                />
              </div>
              <Button type="submit" className="w-full">
                {isRegisterForm ? "Register" : "Login"}
              </Button>
              <div className="text-center text-sm">
                {isRegisterForm ? (
                  <>
                    Already have an account?{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setIsRegisterForm(false)}
                    >
                      Sign In
                    </span>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setIsRegisterForm(true)}
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
