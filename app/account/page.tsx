import { Header } from "@/components/blocks/header";
import { Feature } from "@/components/blocks/articles/feature";
import { Footer } from "@/components/blocks/footer";

export default function Account() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Feature />
      <Footer/>
    </main>
  );
}
