import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight">404</h1>
      <p className="mt-4 text-neutral-600">This page could not be found.</p>
      <Link href="/" className="mt-6 text-sm font-medium underline underline-offset-4">
        Back to home
      </Link>
    </main>
  );
}
