import Marquee from '../components/Marquee';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import GallerySlider from '../components/GallerySlider';
import Brands from '../components/Brands';
import MenuSection from '../components/MenuSection/MenuSection';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="body-fixed">
      <Marquee />
      <Header />
      <div id="viewport">
        <div id="js-scroll-content">
          <HeroBanner />
          <GallerySlider />
          <Brands />
          <MenuSection />
          <TeamSection />
          <BlogSection />
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;