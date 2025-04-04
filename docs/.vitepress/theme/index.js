// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './style.css'; // Import your custom styles
import JNotFound from './NotFound.vue'


// Import all custom components
import HeroSlider from './components/HeroSlider.vue';
import FeatureHighlights from './components/FeatureHighlights.vue';
import ServiceCarousel from './components/ServiceCarousel.vue';
import TrustedClientSection from './components/TrustedClientSection.vue';
import BrandCarousel from './components/BrandCarousel.vue';
import CaseStudies from './components/CaseStudies.vue';
import CounterSection from './components/CounterSection.vue';
import TestimonialSection from './components/TestimonialSection.vue';
import ManageItSection from './components/ManageItSection.vue';
import ServiceCounterSection from './components/ServiceCounterSection.vue';
import ContactForm from './components/ContactForm.vue';
import AboutSection from './components/AboutSection.vue';
import Breadcrumb from './components/Breadcrumb.vue';

export default {
  ...DefaultTheme,
  NotFound : JNotFound,
  enhanceApp({ app, router, siteData }) {
    // Register components globally
    app.component('HeroSlider', HeroSlider);
    app.component('FeatureHighlights', FeatureHighlights);
    app.component('ServiceCarousel', ServiceCarousel);
    app.component('TrustedClientSection', TrustedClientSection);
    app.component('BrandCarousel', BrandCarousel);
    app.component('CaseStudies', CaseStudies);
    app.component('CounterSection', CounterSection);
    app.component('TestimonialSection', TestimonialSection);
    app.component('ManageItSection', ManageItSection);
    app.component('ServiceCounterSection', ServiceCounterSection);
    app.component('ContactForm', ContactForm);
    app.component('AboutSection', AboutSection); 
    app.component('Breadcrumb', Breadcrumb);
  }
}