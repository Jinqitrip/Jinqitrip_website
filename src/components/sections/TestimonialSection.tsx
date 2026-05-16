'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { StarFilled } from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Translations } from '@/i18n/translations';
import styles from './TestimonialSection.module.css';

export default function TestimonialSection({ t }: { t: Translations['testimonial'] }) {
  return (
    <section className={`${styles.section} section-padding section-bg`}>
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center' }}>
          <span className="reveal">{t.tagline}</span>
          <h2 className="reveal">{t.title}</h2>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          className={styles.swiper}
        >
          {t.items.map((item, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.stars}>
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <StarFilled key={j} className={styles.star} />
                  ))}
                </div>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.author}>
                  <div>
                    <h5 className={styles.name}>**{item.name.slice(-1)}</h5>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                  <span className={styles.date}>{item.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
