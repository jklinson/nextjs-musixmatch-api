import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Image src="/musixmatch_logo.png" className="m-auto py-20" width={100} height={100} alt="star logo" />
      <h1 className="text-5xl max-[500px]:text-2xl m-auto py-20 text-white">Welcome to NextJS MusixMatch</h1>
    </main>
  );
}
