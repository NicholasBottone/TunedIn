import { api } from "~/trpc/server";
import AlbumCard from "./AlbumCard";

const PersonalTopsComponents = async () => {
  const self = await api.user.getSelf.query();
  const albumCards = self.listenedTo.slice(0, 10).map((album) => ({
    id: album.id,
    image: album.image!,
    albumName: album.name,
    artistName: album.artist,
  }));

  console.log(albumCards);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        maxWidth: "1100px",
      }}
    >
      {albumCards.map((album, index) => (
        <AlbumCard key={index} {...album} />
      ))}
    </div>
  );
};

export default PersonalTopsComponents;
