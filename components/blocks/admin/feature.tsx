import { Badge } from "@/components/ui/badge";

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
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Curious? Check out some of our featured articles below.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md" src="https://fakeimg.pl/600x400?text=Warticles" alt="article1" />
            </div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md" src="https://fakeimg.pl/600x400?text=Warticles" alt="article2" />
            </div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md" src="https://fakeimg.pl/600x400?text=Warticles" alt="article2" />
            </div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md" src="https://fakeimg.pl/600x400?text=Warticles" alt="article2" />
            </div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md" src="https://fakeimg.pl/600x400?text=Warticles" alt="article2" />
            </div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md" src="https://fakeimg.pl/600x400?text=Warticles" alt="article2" />
            </div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);