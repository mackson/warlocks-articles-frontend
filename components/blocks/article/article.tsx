"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { mockArticles } from "@/mocks/articles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EditIcon, MessageCircle, HeartIcon } from "lucide-react";
import { CommentSection } from "@/components/blocks/articles/comments";

export const Article = () => {
  const params = useParams(); 
  const slug = params?.id; 
  const [article, setArticle] = useState<ArticleProps | null>(null);

  useEffect(() => {
    if (slug) {
      const foundArticle = mockArticles.find((item) => item.slug === slug);
      setArticle(foundArticle || null);
    }
  }, [slug]);

  const ArticleContent = ({ content }: { content: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  if (!article) {
    return (
      <div className="w-full py-40 flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-500">Article Not Found</h2>
          <p className="text-muted-foreground">
            The article you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-20 flex justify-center">
      <div className="w-full max-w-[900px] px-4">
        {/* Informações do Autor */}
        <div className="flex flex-row gap-4 items-center mb-6">
          <p className="flex flex-row gap-2 text-sm items-center">
            <span className="text-muted-foreground">By</span>{" "}
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
              <AvatarFallback>{article.author_id[0]}</AvatarFallback>
            </Avatar>
            <span>
              {article.author_id} |{" "}
              {article.createdAt
                ? new Date(article.createdAt).toLocaleDateString()
                : "Unknown date"}
            </span>
          </p>

          <div className="flex gap-2">
            <Button className="gap-2 sm:flex" variant="outline" size="sm">
              <HeartIcon className="w-4 h-4" /> {article.likes.length}
            </Button>
            <Button className="gap-2 sm:flex" variant="outline" size="sm">
              <MessageCircle className="w-4 h-4" /> 12
            </Button>
            <Button className="gap-2 sm:flex" variant="outline" size="sm">
              Edit Article <EditIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
          {article.title}
        </h2>

        <section className="w-full flex justify-center">
          <img
            className="rounded-md mb-4 max-w-full"
            src={article.cover}
            alt={article.title}
          />
        </section>

        <article className="text-muted-foreground text-base leading-relaxed">
          <ArticleContent content={article.content} />
        </article>

        <hr className="my-6 border-muted" />

        <section className="flex flex-wrap gap-2 text-sm">
          {article.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </section>

        <hr className="my-6 border-muted" />

        <CommentSection />
      </div>
    </div>
  );
};

