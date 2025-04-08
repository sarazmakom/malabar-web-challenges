import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
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
        src="/images/the-two-towers.png"
        alt="The Two Towers"
        width={140}
        height={230}
      ></Image>
    </>
  );
}
