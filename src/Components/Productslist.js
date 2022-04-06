import React from 'react'
import { Button, Card } from 'react-bootstrap'



function Productslist({el}) {
  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>{el.description}</Card.Text>
    <Card.Text>Price : {el.price}</Card.Text>
    RATING
    <Card.Text>Rate: {el.rating.rate}, Count: {el.rating.count}</Card.Text>
    <Button variant="primary">Add</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Productslist