import { Box, Button, Typography } from "@mui/material";
import { Footer, Header, Page } from "components";
import { useEffect, useState } from "react";

interface IPhoto {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: "image" | "video";
  service_version: string;
  title: string;
  url: string;
}

export const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (photos.length === 0) {
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=cM03QxE9d1SIuJPZdRZMbjCOjvGs3A13EtDToDfw&count=10"
      )
        .then((response) => response.json())
        .then((response) => setPhotos(response));
    }
  }, [photos]);

  if (photos.length === 0) {
    return <>Loading</>;
  }

  const firstVideo = !!photos.find((photo, index) => {
    if (photo.media_type === "video") {
      console.log(index);
      return true;
    }

    return false;
  });

  console.log(firstVideo);

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <Box>
      <Header />
      <Page backgroundColor="#aaaaaa">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Button
              variant="contained"
              sx={{ mr: 5 }}
              disabled={currentPhotoIndex === 0}
              onClick={() => setCurrentPhotoIndex(currentPhotoIndex - 1)}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              disabled={currentPhotoIndex === photos.length - 1}
              onClick={() => setCurrentPhotoIndex(currentPhotoIndex + 1)}
            >
              Next
            </Button>
          </Box>
          {currentPhoto.media_type === "image" ? (
            <Box
              sx={{ maxHeight: 500, maxWidth: 800 }}
              component="img"
              src={currentPhoto.url}
              alt={currentPhoto.title}
            />
          ) : (
            <Box
              sx={{ height: 800, width: 1400 }}
              component="iframe"
              src={currentPhoto.url}
            />
          )}
          <Typography sx={{ my: 3 }} variant="h4">
            {currentPhoto.title}
          </Typography>
          <Typography variant="subtitle1">
            {currentPhoto.explanation}
          </Typography>
        </Box>
      </Page>
      <Footer />
    </Box>
  );
};

export default App;
