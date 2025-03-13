import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  /**
   * Configure les meta tags pour le SEO et les partages sociaux
   */
  updateMetaTags(config: {
    title?: string,
    description?: string,
    keywords?: string,
    image?: string,
    url?: string
  }) {
    // Mettre à jour le titre du document
    if (config.title) {
      this.title.setTitle(config.title);
    }

    // Mettre à jour les meta tags standard
    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
    }
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Meta tags pour Open Graph (Facebook, LinkedIn, etc.)
    if (config.title) {
      this.meta.updateTag({ property: 'og:title', content: config.title });
    }
    
    if (config.description) {
      this.meta.updateTag({ property: 'og:description', content: config.description });
    }
    
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }
    
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Meta tags pour Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    
    if (config.title) {
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
    }
    
    if (config.description) {
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
    }
    
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
  }
}