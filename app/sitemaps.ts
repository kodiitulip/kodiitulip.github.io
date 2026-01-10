import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://kodiitulip.github.io',
    lastModified: new Date(),
    priority: 1.0
  },
  {
    url: 'https://kodiitulip.github.io/projects',
    lastModified: new Date(),
    priority: 0.8,
    images: [
      'https://kodiitulip.github.io/images/2dbuild.gif',
      'https://kodiitulip.github.io/images/3dbuild.png',
      'https://kodiitulip.github.io/images/rtscam.png',
      'https://kodiitulip.github.io/images/site.png'
    ]
  }
];

export default sitemap;
