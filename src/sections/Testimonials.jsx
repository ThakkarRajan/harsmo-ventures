import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Great experience with HarsMo Ventures! Quality products, timely delivery, and excellent support. A trusted partner for all our hardware and raw material needs.",
      name: "YATIN D.",
      company: "@Anthem",
      image: "https://randomuser.me/api/portraits/men/66.jpg", // Optional: You can change the image
      rating: 5,
    },
    {
      quote:
        "HarsMo Ventures provides excellent products and reliable service. Their educational toys are high quality, and the team is very responsive. Highly recommended!",
      name: "TARUN P.",
      company: "@Calidus",
      image: "https://randomuser.me/api/portraits/men/72.jpg", // Optional: You can change the image
      rating: 5,
    },
    {
      quote:
        "My experience with Harsmo Ventures has been truly excellent. Their timely delivery and high-quality products have taken our business to new heights. The collection of educational toys, in particular, is very useful and greatly appreciated by children. If you're looking for a reliable partner, I would definitely recommend them.",
      name: "hardik S",
      company: "@Shree",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
    },
  ];

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi bi-star${i < count ? "-fill text-warning" : ""}`}
      ></i>
    ));

  return (
    <section
      id="testimonials"
      className="min-vh-100 py-5 bg-dark text-white d-flex align-items-center"
    >
      <div className="container">
        <h2 className="text-center mb-5 display-6 fw-bold text-gradient-orange">
          What They Say About Us
        </h2>

        <div className="swiper-wrapper-spacing">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500 }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="card h-100 shadow-sm testimonial-card p-4 text-dark">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{t.name}</h6>
                      <small className="text-muted">{t.company}</small>
                    </div>
                  </div>
                  <blockquote className="testimonial-quote mb-4">
                    “{t.quote}”
                  </blockquote>
                  <div className="stars">{renderStars(t.rating)}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
