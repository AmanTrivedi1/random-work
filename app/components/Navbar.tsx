"use client";
import { FaLocationArrow } from "react-icons/fa6";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-[100vh] flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Platform">
          <div className="flex  gap-x-10 w-[100vh] space-y-4 text-sm">
            <img src="/dhoni.jpeg"  className="w-1/3 h-1/3 rounded-lg "    />
            <div className="flex gap-x-10">
            <div className="flex flex-col gap-4">
              <HoveredLink href="/hobby">
                 <FaLocationArrow className="text-[#DE1B76]" />
                 <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
                 <p>Following text <br/> that says its working</p>
             </HoveredLink>
             <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
                <p>Following text <br/> that says its working</p>
             </HoveredLink>
             <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
                <p>Following text <br/> that says its working</p>
            </HoveredLink>
            </div>
           <div className="flex flex-col gap-4">
           <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
           </div>
           </div>
          
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Data">
          <div className="flex  gap-x-10  space-y-4 text-sm">
            <img src="/dhoni.jpeg"  className="w-1/3 h-1/3 rounded-lg "    />
            <div className="flex gap-x-10">
            <div className="flex flex-col gap-4">
              <p className="text-base text-gray-500">Get Started</p>
              <HoveredLink href="/hobby">
                 <FaLocationArrow className="text-[#DE1B76]" />
                 <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
                 <p>Following text <br/> that says its working</p>
             </HoveredLink>
             <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
                <p>Following text <br/> that says its working</p>
             </HoveredLink>
             <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
                <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
                <p>Following text <br/> that says its working</p>
            </HoveredLink>
            </div>
           <div className="flex flex-col gap-4">
           <p className="text-base text-gray-500">Dig Deeper</p>
           <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
           </div>


           <div className="flex flex-col gap-4">
           <p className="text-base text-gray-500">Dig Deeper</p>
           <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
           </div>
           </div>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="flex  gap-x-10 w-[100vh] space-y-4 text-sm">
            <img src="/dhoni.jpeg"  className="w-1/3 h-1/3 rounded-lg "    />
            <div className="flex gap-x-10">
            <div className="flex flex-col gap-4">
              <HoveredLink href="/hobby">
                 <FaLocationArrow className="text-[#DE1B76]" />
                 <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
                 <p>Following text <br/> that says its working</p>
             </HoveredLink>
             <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
                <p>Following text <br/> that says its working</p>
             </HoveredLink>
             <HoveredLink href="/hobby">
                <FaLocationArrow className="text-[#DE1B76]" />
                <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
                <p>Following text <br/> that says its working</p>
            </HoveredLink>
            </div>
           <div className="flex flex-col gap-4">
           <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold ">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
            <HoveredLink href="/hobby">
               <FaLocationArrow className="text-[#DE1B76]" />
               <h1 className="hover:text-[#DE1B76] font-semibold">Main text</h1>
               <p>Following text <br/> that says its working</p>
            </HoveredLink>
           </div>
           </div>
          
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
