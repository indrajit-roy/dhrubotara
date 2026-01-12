import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProductSection } from '../components/ProductSection';
import { CustomHamper } from '../components/CustomHamper';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductSection />
      <CustomHamper />
      <Testimonials />
    </>
  );
}
