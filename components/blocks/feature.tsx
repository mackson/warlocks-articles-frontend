import { Badge } from "@/components/ui/badge";
import { mockArticles } from "@/mocks/articles";
import Link from "next/link";
import Image from "next/image";

export const Feature = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Featured</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Awesome Articles
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Curious? Check out some of our featured articles below.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <div key={article.id} className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
              <div className="bg-muted rounded-md aspect-video mb-2">
                <Link href={`/article/${article.slug}`} className="block">
                  <Image width={0} height={0} sizes="100vw" className="rounded-md w-full h-auto" src={article.cover} alt={article.title} />
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
          ))}
        </div>
      </div>
    </div>
  </div>
);
