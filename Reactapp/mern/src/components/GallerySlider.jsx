import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const GallerySlider = () => {
  const images = [
    '/assets/images/bt1.jpg',
    '/assets/images/bt2.jpg',
    '/assets/images/bt3.jpg',
    '/assets/images/bt4.jpg',
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="book-table-img-slider">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="book-table-img back-img h-64 rounded-lg shadow-md cursor-pointer"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;