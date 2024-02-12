import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Player({joueur,key}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"joueur.ImageUrl"} />
    <Card.Body>
      <Card.Title style={{color:`red`,fontweight:`bold`,textAlign:`center`}}>{joueur.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      
    <ListGroup.Item style={{fontweight:`bold`}}>Age : {joueur.age}</ListGroup.Item>
    <ListGroup.Item style={{fontweight:`bold`}}>Nationality : {joueur.age}</ListGroup.Item>
    <ListGroup.Item style={{fontweight:`bold`}}>Team : {joueur.age}</ListGroup.Item>
    <ListGroup.Item style={{fontweight:`bold`}}>JerseyNumber : {joueur.age}</ListGroup.Item>
      
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default player;
