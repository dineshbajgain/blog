import { defineNuxtConfig } from 'nuxt3';
import meta from './utils/seo-meta'

export default defineNuxtConfig({
  head: {
    meta: meta.tags
  },
buildModules: ['nuxt-windicss'],
css: ['virtual:windi.css']
});