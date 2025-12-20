import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProductSection } from '../components/ProductSection';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductSection />
      <Testimonials />
    </>
  );
}
