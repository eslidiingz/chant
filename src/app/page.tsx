import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="btn-primary" href="/chant/maHaJakKaPhat">Let&apos;s go</Link>
    </main>
  );
}
