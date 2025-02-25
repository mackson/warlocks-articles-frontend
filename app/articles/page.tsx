import { Header } from "@/components/blocks/header";
import { Hero } from "@/components/blocks/hero";
import { Feature } from "@/components/blocks/feature";
import { Footer } from "@/components/blocks/footer";

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <Feature />
      <Footer/>
    </main>
  );
}
