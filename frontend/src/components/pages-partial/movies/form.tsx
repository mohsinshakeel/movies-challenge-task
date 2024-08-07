'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { IMovie } from '@/lib/types';

import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FileDropzone from '@/components/common/FileDropZone';

const movieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  image: z.string().min(1, 'Image is required'),
  year: z.string(),
});

interface MoviesForm {
  movie?: IMovie;
}

type FormFields = z.infer<typeof movieSchema>;

export default function MoviesForm({ movie }: MoviesForm) {
  // form
  const form = useForm<FormFields>({
    resolver: zodResolver(movieSchema),
  });

  const movies = [];

  const router = useRouter();

  const handleNewMovie = () => {
    router.push('');
  };

  // handlers
  const onSubmit = (vals: FormFields) => {
    // router.push(moviesUrl);
  };

  useEffect(() => {
    form.reset(movie);
  }, [movie]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-x-24"
      >
        <div className="col-span-6 hidden md:flex flex-col gap-y-8 h-[500px] ">
          <Controller
            name="image"
            control={form.control}
            render={({ field }) => {
              const fileUrl = field.value
                ? URL.createObjectURL(field.value as any)
                : '';
              return (
                <FileDropzone onFileUpload={(file) => field.onChange(file)} />
              );
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col ">
          <div className="grid grid-cols-12 gap-y-6">
            <div className="col-span-12">
              <FormField
                control={form.control}
                name={'title'}
                render={({ field: formField }) => (
                  <>
                    <FormControl>
                      <Input
                        {...formField}
                        type="text"
                        id={'image'}
                        aria-label={'title'}
                        label={'Title'}
                        error={!!form.formState.errors['title']}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive -mt-6 ml-4">
                      {form.formState.errors['title']?.message}
                    </FormMessage>
                  </>
                )}
              />
            </div>
            <div className="col-span-8">
              <FormField
                control={form.control}
                name={'year'}
                render={({ field: formField }) => (
                  <>
                    <FormControl>
                      <Input
                        {...formField}
                        type="text"
                        id={'image'}
                        aria-label={'year'}
                        label={'Publishing year'}
                        error={!!form.formState.errors['year']}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive -mt-6 ml-4">
                      {form.formState.errors['year']?.message}
                    </FormMessage>
                  </>
                )}
              />
            </div>
          </div>
          <div className="col-span-12 mt-10 flex gap-x-4">
            <Button variant="outline" className="w-1/2">
              Cancel
            </Button>
            <Button className="w-1/2">Submit</Button>
          </div>
        </div>
        <div className="col-span-6 flex md:hidden flex-col gap-y-8 h-[500px] ">
          <Controller
            name="image"
            control={form.control}
            render={({ field }) => {
              const fileUrl = field.value
                ? URL.createObjectURL(field.value as any)
                : '';
              return (
                <FileDropzone onFileUpload={(file) => field.onChange(file)} />
              );
            }}
          />
        </div>
      </form>
    </Form>
  );
}
