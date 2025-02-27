import { Header } from "@/components/blocks/header";
import { Footer } from "@/components/blocks/footer";
import { RegisterForm } from "@/components/blocks/register/register";

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <RegisterForm />
      <Footer/>
    </main>
  );
}
