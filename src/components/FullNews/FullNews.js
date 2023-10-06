import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './full-news.css'

export default function FullNews({ selectedNews }) {
  return (
    <Col md={12} className='d-flex justify-content-center align-items-center fullNewsCard mt-5'>
      <Card className='mt-5 mb-5 newsCard'>
        <Card.Img variant='top' src={selectedNews.image} />
        <Card.Body>
          <Card.Title>{selectedNews.title}</Card.Title>
          <Card.Text>
            {selectedNews.fullText}
            <span className='mt-3 mb-2 newDate'>{selectedNews.pubDate}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
