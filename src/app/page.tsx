import Spotify from "../components/spotify";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className=" text-3xl">Beat Bridge</h1>
        <Spotify />
      </div>
    </main>
  );
}
