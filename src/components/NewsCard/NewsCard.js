import React from 'react'
import { Card } from 'react-bootstrap'

function NewsCard({ data, handleClick }) {

  const { title, text, image } = data;

  return (
    <Card className='mb-4' style={{ minHeight: '320px' }} onClick={() => handleClick(data) }>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NewsCard