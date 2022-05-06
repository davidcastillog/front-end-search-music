const AlbumImage = ({ album }) => {
  return <img src={album.artworkUrl100} alt={album.collectionName} />;
};

export default AlbumImage;
