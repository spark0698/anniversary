import React from 'react';
import ImageGallery from 'react-image-gallery';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "#C9E6F5"
  }
};

const contentStyle = {
  width: "70%"
};
 
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function MyGallery({ classes }) {
  return (
    <Popup
      contentStyle={contentStyle}
      trigger={<Button 
        className={classes.root}
        variant="contained"> 
          Today in history...
        </Button>}
      modal
      closeOnDocumentClick
    >
      <ImageGallery 
        items={images} 
        // showFullscreenButton={false} 
        />
    </Popup>
  )
};

export default withStyles(styles)(MyGallery);