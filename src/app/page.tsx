import React from "react";
import { Heart } from "@/assets/svg";
import { Navigation } from "@/stories/components/Navigation/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Heart height="30" width="30"></Heart> */}
      <Image src={Heart} height="20" width="20" alt="icon" />
      <Navigation
        links={[
          {
            href: '/',
            icon: 'Dashboard',
            id: 'dashboard',
            label: 'Dashboard'
          },
          {
            href: '/menu',
            icon: 'Coffee',
            id: 'coffee',
            label: 'Menu'
          },
          {
            href: '/report',
            icon: 'ClipboardText',
            id: 'clipboard',
            label: 'Report'
          }
        ]}
        orientation="vertical"
      />
    </>
  );
}
