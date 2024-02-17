import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const topTracks = await api.user.getTopTracks.query();

  return (
    <>
      <h1>Hello, {session?.user?.name ?? "World"}!</h1>
      <p>
        {session?.user.email}
        <br />
        {session?.user.id}
        <br />
        <img src={session?.user.image} alt="Profile picture" />
        <br />
        {topTracks.map((track) => (
          <div key={track.id}>
            <img src={track.album.images[0].url} alt={track.album.name} />
            <p>{track.name}</p>
            <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ))}
      </p>
    </>
  );
}
