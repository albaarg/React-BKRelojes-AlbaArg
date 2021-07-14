import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

// Muestra todo el detalle de los productos
const Item = (prop) => {
  const {id, img, tittle, description, category, price}= prop.element

     return (
      <>
      <div className='d-flex justify-content-center row' style={{marginBottom: '10rem'}}>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                 <Card.Text>{description}</Card.Text>
                 <Link to={`/item/${id}`}> <Button className="btn btn-light">Ver detalle</Button> </Link>
                 <Card.Text>{category}</Card.Text>
                 <Card.Text>{price} </Card.Text>
           </Card.Body>
          </Card>
         <ItemCount initial={1} stock={20} onAdd={prop.onAddCart}/>
      </div>

    
       </>


      )

}



export default Item;