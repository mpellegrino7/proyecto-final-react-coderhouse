import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

export const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${product.id}`}>
          <Button size="small" color="primary">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
