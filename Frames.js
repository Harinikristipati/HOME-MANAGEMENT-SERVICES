import React, { useState, useEffect } from 'react';
import './Image.css';

const Frames = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "https://media.istockphoto.com/id/1343390036/vector/repair-service-workers-interior-renovation-people-with-tools-electricians-and-plumbers-fix.jpg?s=612x612&w=0&k=20&c=i5qyoi-6JqJYjEXljUnTE0TSvw87Vn2VgRiDfN8JHrk=",
      content: {
        heading: 'Home Services',
        description: 'We provide all your home service needs, including cleaning, plumbing, and more.',
      },
    },
    {
      image: "https://media.istockphoto.com/id/1205228815/photo/male-plumber-working-to-fix-leaking-sink-in-home-bathroom.jpg?s=612x612&w=0&k=20&c=VIX39T8xM5qNUTM6qqy8SDsGMs7OaaZotFNv3dCn2CU=",
      content: {
        heading: 'Plumbing Services',
        description: 'We offer top-notch plumbing solutions for your home or business.',
      },
    },
    {
      image: "https://media.istockphoto.com/id/654153664/photo/cleaning-service-sponges-chemicals-and-mop.jpg?s=612x612&w=0&k=20&c=vHQzKbz7L8oEKEp5oQzfx8rwsOMAV3pHTV_1VPZsREA=",
      content: {
        heading: 'Cleaning Services',
        description: 'Our cleaning experts ensure a sparkling clean environment.',
      },
    },
    {
      image: "https://media.istockphoto.com/id/1281640264/photo/building-contractor-painting-grey-wall-with-roller-brush-copy-space-text-construction-worker.jpg?s=612x612&w=0&k=20&c=OCT0jsW06fUbiD-94-uqalfOism4WaA0b3yTcD9cS_U=",
      content: {
        heading: 'Painting Services',
        description: 'Transforming spaces with expert painting.',
      },
    },
    {
      image: "https://img.freepik.com/premium-photo/jeans-sneakers-beautiful-blonde-haired-woman-wearing-jeans-sneakers-planting-flowers-outside-house_259150-30960.jpg",
      content: {
        heading: 'Gardening Services',
        description: 'Maintaining gardening services look the home more beautiful with greenery',
      },
    },
  ];

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeSlide, isPaused]);

  return (
    <div className="image-slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`image-slider ${activeSlide === index ? 'active' : ''}`}
          onClick={togglePause}
        >
          <img src={slide.image} alt={`Slide ${index}`} />
          <div className="slide-content">
            <h2>{slide.content.heading}</h2>
            <p>{slide.content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frames;