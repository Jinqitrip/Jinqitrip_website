'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import {
  CalendarOutlined, BarChartOutlined, GlobalOutlined, ApiOutlined,
} from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Translations } from '@/i18n/translations';
import styles from './ServiceCarousel.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  CalendarOutlined: <CalendarOutlined />,
  BarChartOutlined: <BarChartOutlined />,
  GlobalOutlined:   <GlobalOutlined />,
  ApiOutlined:      <ApiOutlined />,
};

interface Props {
  t: Translations['serviceCarousel'];
}

export default function ServiceCarousel({ t }: Props) {
  return (
    <section className={`${styles.section} section-padding section-bg`}>
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center' }}>
          <span className="reveal">{t.tagline}</span>
          <h2 className="reveal">{t.title}</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className={styles.swiper}
        >
          {t.items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  {ICON_MAP[item.icon] ?? null}
                </div>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
