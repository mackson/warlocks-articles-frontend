import { Header } from "@/components/blocks/header";

import { Footer } from "@/components/blocks/footer";

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <Footer/>
    </main>
  );
}
