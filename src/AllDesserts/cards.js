import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



export default function ImgMediaCard({img, title, description, price}) {


  const[product, setProduct] = useState(0);

const addProduct = () => {
  setProduct(product + 1);
}

console.log(product);


  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography 
          fontFamily="Explora" 
          fontSize="2em"  
          fontWeight="bolder"  
          gutterBottom 
          variant="h5" 
          component="div">
        {title}
        </Typography>
        <Typography fontFamily="Quicksand" variant="body2" color="text.secondary">
          {description}

        </Typography>
        <Typography 
          fontFamily="Explora" 
          marginTop="30px" 
          fontSize="2em"
          variant="body1" 
          color="text.secondary">
        {price}
        </Typography>
        <CardActions>
        <Button 
          size="small" 
          fontFamily="Quicksand"
          onClick={addProduct} >Ajouter à mon panier</Button>
      </CardActions>
      </CardContent>

    </Card>
  );
}