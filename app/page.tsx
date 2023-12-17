import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center  p-8">
      <Navbar />
      <HomePage />
    </main>
  );
}
