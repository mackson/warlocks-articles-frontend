"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { mockArticles } from "@/mocks/articles";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export const Feature = () => {
  const FormSchema = z.object({
    search: z.string().min(2, {
      message: "Your search must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });

  const [filteredArticles, setFilteredArticles] = useState(mockArticles);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const query = data.search.toLowerCase();

    const results = mockArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredArticles(results);

    if (results.length === 0) {
      toast.error("No articles found.");
    } else {
      toast.success(`${results.length} article(s) found.`);
    }
  }

  return (
    <div className="w-full py-20 lg:py-20">
      <Toaster richColors />
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Alert variant="default">
            <AlertTitle className="mb-6">Find Articles</AlertTitle>
            <AlertDescription>
              <div className="flex w-full">
                <Form {...form}>
                  <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="search"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormControl>
                            <Input
                              className="w-full h-12 border border-gray-400"
                              placeholder="Search for an article..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="mt-4">
                      Search
                    </Button>
                  </form>
                </Form>
              </div>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                  <div className="bg-muted rounded-md aspect-video mb-2">
                    <Link href={`/article/${article.slug}`} className="block">
                      <img className="rounded-md" src={article.cover} alt={article.title} />
                    </Link>
                  </div>
                  <h3 className="text-xl tracking-tight">
                    <Link href={`/article/${article.slug}`} className="block">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {article.content.slice(0, 100)}...
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground col-span-3">
                No articles found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
