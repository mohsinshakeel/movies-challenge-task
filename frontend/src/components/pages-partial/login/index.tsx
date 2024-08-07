'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from '@/components/ui/form';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { moviesUrl } from '@/configs/constants';
import AppLayout from '@/components/layouts/AppLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLoginMutation } from '@/store/features/auth/authApi';
import { SpinnerIcon } from '@/assets/svgs';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type FormFields = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  // form
  const form = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });

  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const router = useRouter();

  // states
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // handlers
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    try {
      login(values);
    } catch (error) {
      console.error('Login Error:', error);
      // router.push('/');
    }
  };

  const handleRememberMe = () => setRememberMe(!rememberMe);

  const formFields: Array<{
    name: keyof FormFields;
    label: string;
    type: string;
  }> = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'password',
      label: 'Enter your password',
      type: 'password',
    },
  ];

  // if api call success then redirect to dashboard
  useEffect(() => {
    if (isSuccess) {
      router.push(moviesUrl);
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col h-full  w-full md:w-1/3">
      <p className="mt-20 mb-2 text-6xl tracking-normal leading-8 text-center text-headingColor font-bold">
        Sign In
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full mt-11 gap-y-8"
        >
          <div className="w-full flex flex-col gap-y-8">
            {formFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formField }) => (
                  <>
                    <FormControl>
                      <Input
                        {...formField}
                        type={field.type}
                        id={field.label.replace(/\s+/g, '-').toLowerCase()}
                        aria-label={field.label}
                        label={field.label}
                        error={!!form.formState.errors[field.name]}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive -mt-6 ml-4">
                      {form.formState.errors[field.name]?.message}
                    </FormMessage>
                  </>
                )}
              />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-row gap-2.5 ">
              <Checkbox
                checked={rememberMe}
                onCheckedChange={handleRememberMe}
              />
              <Label className="text-sm font-normal text-headingColor">
                Remember me
              </Label>
            </div>
          </div>
          <Button
            variant="default"
            type="submit"
            className="w-full mt-5"
            disabled={isLoading}
          >
            {isLoading ? (
              <SpinnerIcon className="text-headingColor" />
            ) : (
              'LogIn'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default function PartialLogin() {
  return (
    <AppLayout>
      <div className="z-50 flex flex-col items-center justify-center min-h-screen w-full p-4 h-full ">
        <LoginForm />
      </div>
    </AppLayout>
  );
}
