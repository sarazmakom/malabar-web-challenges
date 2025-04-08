import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/volumes">
        <h2>All Volumes</h2>
      </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt="The Fellowship Of The Ring"
        width={140}
        height={230}
      ></Image>
    </>
  );
}
