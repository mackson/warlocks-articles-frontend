"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => (
  <div className="w-full py-10 lg:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Dont make war, make articles!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Warticles is a place to create, write, share, and discuss articles, knowledge, and ideas.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button
              className="gap-4"
              onClick={() => {
                window.open("/register", "_blank");
              }}
            >
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square">
            <Image width={0} height={0} sizes="100vw" className="rounded-md w-full h-auto" src="2150165958.jpg" alt="war1" />
          </div>
         
          <div className="bg-muted rounded-md aspect-square">
            <Image width={0} height={0} sizes="100vw" className="rounded-md w-full h-auto" src="2150165963.jpg" alt="war1" />
          </div>
        </div>
      </div>
    </div>
  </div>
);