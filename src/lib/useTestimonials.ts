import { useCollection } from './useCollection';
import type { Testimonial } from './types';

export function useTestimonials() {
  const { 
    data: testimonials, 
    loading, 
    error, 
    saveItem: saveTestimonial, 
    deleteItem: deleteTestimonial, 
    refresh 
  } = useCollection<Testimonial>("testimonials");

  return { testimonials, loading, error, saveTestimonial, deleteTestimonial, refresh };
}