import React from 'react'
import '../App.css'
import {Carousel} from 'react-bootstrap'

export default function Home() {
  return (
    <div>
        <Carousel className="w-100 h-100">
            <Carousel.Item className="carousel-item">
                <img 
                    className="d-block w-100"
                    src="./FinalDraft.jpg" 
                />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
