import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "./OffersRow.css";

const offers = [
  { id: 1, title: "Paint Protection Film (PPF)", subtitle: "Invisible shield", desc: "Self-healing, ultra-clear film preserves your paint from chips, scratches, and road debris. Protects resale value while staying nearly invisible." },
  { id: 2, title: "Performance ECU Tuning", subtitle: "Unleash horsepower", desc: "Dyno-proven remapping for maximum gains. Boost power, throttle response, and even fuel economy—customized to your driving style." },
  { id: 3, title: "Custom Wheels & Suspension", subtitle: "Stand out", desc: "Premium alloy wheels and adjustable suspension packages. Perfect fitment, aggressive looks, and improved ride—all tailored for your vehicle." },
  { id: 4, title: "Blindspot Monitor", subtitle: "Modern safety", desc: "Add factory-style blindspot monitoring with integrated warning indicators for safer lane changes." },
  { id: 5, title: "Starry Headliner", subtitle: "Rolls Royce vibes", desc: "Custom fiber optic headliner gives your ride a starlit ceiling effect—fully dimmable and color changing." }
];

export default function OffersRow() {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const handleExpand = (id) => setExpandedId(expandedId === id ? null : id);
  const handleBook = (title) => {
    navigate("/contact", { state: { service: title } });
  };

  return (
    <section className="offers-row-restorem">
      <h2 className="offers-section-heading">Our Featured Upgrades & Offers</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}  // Enables infinite looping
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          1200: { slidesPerView: 3 },
          800:  { slidesPerView: 2 },
          0:    { slidesPerView: 1 }
        }}
        className="offers-swiper-restorem"
        style={{ paddingBottom: 24 }}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div
              className={`offer-card-restorem${expandedId === offer.id ? " expanded" : ""}`}
              onClick={() => handleExpand(offer.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="offer-ad-space-restorem" />
              <div className="offer-title-restorem">{offer.title}</div>
              <div className="offer-subtitle-restorem">{offer.subtitle}</div>
              {expandedId === offer.id && (
                <div className="offer-details-restorem" onClick={e => e.stopPropagation()}>
                  <div className="offer-desc-restorem">{offer.desc}</div>
                  <button
                    className="offer-book-btn-restorem"
                    onClick={e => { e.stopPropagation(); handleBook(offer.title); }}
                  >
                    Book Now
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
