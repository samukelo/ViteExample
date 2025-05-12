import React from 'react'
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSlider() {
    const slides = [
        {
          image: 'https://images.unsplash.com/photo-1696583545294-a0158d7afa63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Sustainable Logistics Solutions',
          subtitle: 'Reducing carbon footprints with blockchain technology',
          cta: 'Explore Our Services'
        },
        {
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: 'Real-Time Emission Tracking',
          subtitle: 'Monitor your supply chain carbon output 24/7',
          cta: 'View Dashboard'
        },
        {
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: 'Green Energy Logistics',
          subtitle: 'Transition to eco-friendly transportation networks',
          cta: 'Learn How'
        }
      ];
    
      return (
        <Carousel fade controls={false} indicators={true} interval={5000}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div 
                className="d-flex align-items-center justify-content-center" 
                style={{
                  height: '80vh',
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="text-center text-white px-3">
                  <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                  <p className="lead mb-4 fs-3">{slide.subtitle}</p>
                  <Button variant="success" size="lg" className="px-4 py-2 fs-5">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )
}

export default HeroSlider