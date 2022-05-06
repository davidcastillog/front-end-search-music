const AlbumCard = ({ albums }) => {
  return (
    <>
      {albums.map((album, i) => (
        <div key={i}>
          <img src={album.artworkUrl100} alt={album.trackName} />
          <p>Album: </p>
          <h3>{album.collectionName}</h3>
          <p>Artista: </p>
          <h4>{album.artistName}</h4>
        </div>
      ))}
    </>
  );
};

export default AlbumCard;
