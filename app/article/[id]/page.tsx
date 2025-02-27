import { Header } from "@/components/blocks/header";
import { Footer } from "@/components/blocks/footer";
import { Article } from "@/components/blocks/article/article";

export default function ArticlePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header />
      <Article />
      <Footer/>
    </main>
  );
}
