"use client";

import CardWrapper from "./cardWrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import GithubIcon from "@/assets/authentication/github-mark.svg";
import GoogleIcon from "@/assets/authentication/google.svg";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    setLoading(false);
  };

  const onOAuthSignIn = (provider: string) => {
    signIn(provider, { redirect: false });
  };

  const { pending } = useFormStatus();

  return (
    <CardWrapper
      label="Login to your account"
      title="Sign In"
      backButtonHref="/authentication/signup"
      backButtonLabel="Don't have an account? Register here."
    >
      <div className="flex flex-row justify-center items-center gap-2 w-full mb-2">
        <Button onClick={() => onOAuthSignIn("github")}  className="flex flex-row gap-2 justify-center items-center w-1/2">
          <GithubIcon width={30} height={30} />

          <div>GitHub</div>
        </Button>

        <Button onClick={() => onOAuthSignIn("google")} className="flex flex-row gap-2 justify-center items-center w-1/2">
          <GoogleIcon width={30} height={30} />

          <div>Google</div>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 m-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
