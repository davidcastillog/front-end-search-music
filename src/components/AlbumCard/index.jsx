import { AlbumImage } from "../index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AlbumCard = ({ currentAlbums }) => {
  // If the Album name is longer than 50 characters, truncate it
  const shortCollectionName = (collectionName) => {
    return collectionName.length > 50
      ? collectionName.substring(0, 50) + "..."
      : collectionName;
  };

  return (
    <>
      {currentAlbums.map((album, i) => (
        <Card
          sx={{ width: 225, height: 210, mt: 2, ml: 1, mr: 1, p: 2 }}
          key={i}
        >
          <AlbumImage album={album} />
          <CardContent sx={{ p: 0 }}>
            <Typography gutterBottom variant="subtitle2">
              {shortCollectionName(album.collectionName)}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Artist:&nbsp;
              <Typography
                style={{ display: "inline-block" }}
                variant="body2"
                gutterBottom
              >
                {album.artistName}
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default AlbumCard;
