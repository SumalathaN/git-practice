// src/pages/about/About.jsx
import React from 'react';

import useEmblaCarousel from 'embla-carousel-react'
import './products.css' // Optional: for custom styling

export default function Products() {  // <-- Make sure "export default" is right here!
 const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="https://picsum.photos/id/10/800/400" alt="Slide 1" />
        </div>
        <div className="embla__slide">
          <img src="https://picsum.photos/id/20/800/400" alt="Slide 2" />
        </div>
        <div className="embla__slide">
          <img src="https://picsum.photos/id/30/800/400" alt="Slide 3" />
        </div>
      </div>
    </div>
  )
}