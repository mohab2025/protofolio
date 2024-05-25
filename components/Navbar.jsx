"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSessions, getProviders } from "next-auth/react";

function Navbar() {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="d-flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Mostafa Wahid</p>
      </Link>
      <ul className="nav_ul">
        <li><Link href="#">contact creator</Link></li>
        <li><Link href="#">motivation</Link></li>
        <li><Link href="#">About me </Link></li>
        <li><Link href="#">contact me </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
