import Image from "next/image";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import AuthComponent from "./_components/auth-component";
import { useEffect } from "react";

export default async function Home() {
  const session = await getServerAuthSession();
  const user = await api.user.getSelf.query();
  const album = await api.album.getAlbumBySearch.query({query:""});


  return (
    <>
      <h1>Hello, {session?.user?.name ?? "World"}!</h1>
      <p>
        {session?.user.email}
        <br />
        {session?.user.id}
        <br />

        {session && (
          <>
            <Image
              src={session.user.image!}
              alt={session.user.name!}
              width={200}
              height={200}
            />
            <br />
            {user?.listenedTo.map((album) => (
              <div key={album.id}>
                <Image
                  src={album.image!}
                  alt={album.name}
                  width={200}
                  height={200}
                />
                {album.name}
              </div>
            ))}
            <AuthComponent />
          </>
        )}
      </p>
    </>
  );
}
