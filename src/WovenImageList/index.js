import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './itemData';
import './wovenImageList.scss';


export default function WovenImageList() {
  return (
    <div className="woven-image-content" id="a-la-carte">

    <h2>À la carte </h2>
    <p>Voir toute la carte </p>
    <ImageList className="wovenImageList" sx={{ width: 1000, height: 450}} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}