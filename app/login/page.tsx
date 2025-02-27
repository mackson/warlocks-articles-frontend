import { Header } from "@/components/blocks/header";
import { Footer } from "@/components/blocks/footer";
import { LoginForm } from "@/components/blocks/login/login";

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <LoginForm />
      <Footer/>
    </main>
  );
}
