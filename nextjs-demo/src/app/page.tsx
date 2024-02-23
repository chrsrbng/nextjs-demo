import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="grid grid-rows-[1fr_1fr]">
      <h1>This a Landing page</h1>
      <div className="py-3">
        <Link href="/home" className="p-3">
          Home
        </Link>
        <Link href="/about" className="p-3">
          About
        </Link>
      </div>
    </main>
  );
}
