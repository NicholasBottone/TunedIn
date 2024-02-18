import React from "react";
import Link from "next/link";

// Props interface
export interface AlbumCardProps {
  id: string;
  image: string;
  albumName: string;
  artistName: string;
}

// Styled components can also be used here for styling if needed
const AlbumCardStyles = {
  link: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "150px",
    textAlign: "center" as const,
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  albumName: {
    marginTop: "10px",
    fontWeight: "bold" as const,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "150px",
  },
  artistName: {
    marginTop: "1px",
  },
};

// AlbumCard component
const AlbumCard: React.FC<AlbumCardProps> = ({
  id,
  image,
  albumName,
  artistName,
}) => {
  return (
    <Link style={AlbumCardStyles.link} href={`/album/${id}`}>
      <img
        src={image}
        alt={`${albumName} cover`}
        style={AlbumCardStyles.image}
      />
      <h3 style={AlbumCardStyles.albumName}>{albumName}</h3>
      <p style={AlbumCardStyles.artistName}>{artistName}</p>
    </Link>
  );
};

export default AlbumCard;
