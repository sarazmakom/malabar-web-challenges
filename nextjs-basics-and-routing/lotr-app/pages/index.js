import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to home page</h1>
      <h2>
        <Link href="/volumes">Volume Overview</Link>
      </h2>
    </>
  );
}
