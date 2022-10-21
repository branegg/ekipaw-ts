import { Box, Typography } from "@mui/material";
import { Footer, Header, Page } from "components";
import { useEffect, useState } from "react";

interface IPhoto {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      ).then((response) => response.json());

      return photos;
    };

    fetchPhotos().then((response) => setPhotos(response));
  }, []);

  return (
    <Box>
      <Header />
      <Page backgroundColor="#aaaaaa">
        <Box>
          {photos.map((photo) => (
            <>
              <Box component="img" src={photo.url} />
              <Typography>{photo.title}</Typography>
            </>
          ))}
        </Box>
      </Page>
      <Footer />
    </Box>
  );
};

export default App;
