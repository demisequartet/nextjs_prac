import Link from "next/link";
import Image from "next/image";

function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src="/a.jpg" alt="me" fill style={{ objectFit: "contain" }} />
    </>
  );
}

export default FirstPost;
