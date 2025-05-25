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
      quote: "Absolutely seamless logistics experience!",
      name: "Ravi Patel",
      company: "OceanTrade Inc.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      quote: "They made global shipping simple and stress-free.",
      name: "Fatima Khan",
      company: "Global Mart",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
    {
      quote: "Handled customs perfectly. Will work with them again.",
      name: "Leon Wu",
      company: "Pacific Bridge Logistics",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      rating: 5,
    },
    {
      quote: "કસ્ટમર સર્વિસ અને ટ્રાન્સપોર્ટ એકદમ મજબૂત છે!",
      name: "Mayur Thakkar",
      company: "Surat Freight Pvt Ltd",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
      rating: 5,
    },
    {
      quote: "We expanded to 3 new countries with their help!",
      name: "Carlos Mendes",
      company: "Porto Exports",
      image: "https://randomuser.me/api/portraits/men/88.jpg",
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
