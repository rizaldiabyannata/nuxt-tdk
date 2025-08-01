<template>
  <div>
    <HomeHeroSection
      :title="hero.title"
      :subtitle="hero.subtitle"
      :button-text="hero.buttonText"
      :button-link="hero.buttonLink"
    />
    <HomeVisionSection
      :title="vision.title"
      :text="vision.text"
      :button-text="vision.buttonText"
      :button-link="vision.buttonLink"
    />
    <HomePortfolioSection
      :title="portfolio.title"
      :subtitle="portfolio.subtitle"
      :more-link="portfolio.moreLink"
      :main-card="portfolio.mainCard"
      :small-cards="portfolio.smallCards"
    />
    <HomeNewsSection
      :title="news.title"
      :subtitle="news.subtitle"
      :articles="news.articles"
    />
    <HomeClientLogos :logos="logos" />
    <HomeContactSection
      :title="contact.title"
      :subtitle="contact.subtitle"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hero = ref({
  title: 'Building the Future, Restoring the Past',
  subtitle: 'Your trusted partner in construction and project management. We deliver excellence and innovation in every project, ensuring quality and sustainability.',
  buttonText: 'More Of Our Team',
  buttonLink: '/about-us'
});

const vision = ref({
  title: 'Our Vision',
  text: 'To be a trusted leader in project planning and supervision, creating sustainable and innovative solutions that contribute to infrastructure development and community advancement.',
  buttonText: 'About Us',
  buttonLink: '/about-us'
});

const portfolio = ref({
  title: 'Our Portfolio',
  subtitle: 'Featured Projects',
  moreLink: '/portfolio',
  mainCard: {
    title: 'Major Infrastructure Project',
    description: 'A landmark project showcasing our expertise in large-scale construction and management.',
    buttonText: 'View Project',
    imageUrl: '/img/sample/sample-2.jpeg'
  },
  smallCards: [
    {
      title: 'Residential Complex',
      description: 'Modern and sustainable housing.',
      imageUrl: '/img/sample/sample-3.jpeg',
      navigateTo: '/portfolio/residential'
    },
    {
      title: 'Commercial Tower',
      description: 'A new icon in the city skyline.',
      imageUrl: '/img/sample/sample-4.jpeg',
      navigateTo: '/portfolio/commercial'
    },
    {
      title: 'Bridge Construction',
      description: 'Connecting communities.',
      imageUrl: '/img/sample/sample-5.jpeg',
      navigateTo: '/portfolio/bridge'
    },
    {
      title: 'Renovation Works',
      description: 'Breathing new life into old structures.',
      imageUrl: '/img/card-placeholder.png',
      navigateTo: '/portfolio/renovation'
    }
  ]
});

const news = ref({
  title: 'News & Reports',
  subtitle: 'Popular News',
  articles: [
    {
      title: 'New Partnership with BuildRight Inc.',
      author: 'By Jane Doe',
      readMoreLink: '/articles/1'
    },
    {
      title: 'Sustainable Building Practices on the Rise',
      author: 'By John Smith',
      readMoreLink: '/articles/2'
    },
    {
      title: 'Community Project Completion',
      author: 'By Alice Johnson',
      readMoreLink: '/articles/3'
    },
    {
      title: 'Architectural Design Awards 2025',
      author: 'By Editorial Team',
      readMoreLink: '/articles/4'
    },
    {
      title: 'Future of Urban Development',
      author: 'By Mike Lee',
      readMoreLink: '/articles/5'
    }
  ]
});

const logos = ref([
  { src: '/img/tesla.png', alt: 'Tesla' },
  { src: '/img/porsche.png', alt: 'Porsche' },
  { src: '/img/aston-martin.png', alt: 'Aston Martin' },
  { src: '/img/nike.png', alt: 'Nike' },
  { src: '/img/jordan.png', alt: 'Jordan' },
  { src: '/img/adidas.png', alt: 'Adidas' },
  { src: '/img/bmw.png', alt: 'BMW' }
]);

const contact = ref({
  title: 'Contact Us',
  subtitle: 'Have a project in mind? We\'d love to hear from you. Reach out to us using the form below.'
});
</script>