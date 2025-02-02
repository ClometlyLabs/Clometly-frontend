import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Clometly</h1>
      <Image
        src="/clometly.png"
        alt="Clometly"
        width={300}
        height={300}
        className="m-auto"
      />
    </div>
  );
}
