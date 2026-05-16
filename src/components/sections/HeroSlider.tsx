'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import type { Slide } from '@/i18n/translations';
import styles from './HeroSlider.module.css';

interface Props {
  slides: Slide[];
  contactText: string;
  contactHref: string;
}

export default function HeroSlider({ slides, contactText, contactHref }: Props) {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className={styles.swiper}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className={`${styles.slide} bg-cover`}
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              <div className={styles.overlay} />
              <div className="container">
                <div className={styles.content}>
                  <span className={styles.tagline}>{slide.tagline}</span>
                  {/* 首张大品牌名用超大字，其余张用标准标题 */}
                  {slide.titleLine2 ? (
                    <>
                      <h1 className={styles.titleBrand}>{slide.titleLine1}</h1>
                      <div className={styles.divider} />
                      <p className={styles.titleSub}>{slide.titleLine2}</p>
                    </>
                  ) : (
                    <h1 className={styles.titleSub} style={{ fontSize: 'clamp(22px, 3vw, 38px)', color: '#fff', fontWeight: 600 }}>
                      {slide.titleLine1}
                    </h1>
                  )}
                  <Link href={contactHref} className="theme-btn">
                    <span>{contactText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
