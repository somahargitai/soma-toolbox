import { Tool } from '../src/data/tools';

// Test items for screenshot generation (multiple sites with varying complexity)
export const testTools: Tool[] = [
  {
    id: '28',
    name: 'Refactoring Guru',
    description: 'Educational resource on design patterns and refactoring techniques',
    url: 'https://refactoring.guru/',
    image: '/images/tools/refactoring-guru.png',
    categories: ['development', 'education', 'resources'],
  },
  {
    id: '101',
    name: 'Google',
    description: 'Test with a simple, fast-loading site',
    url: 'https://www.google.com/',
    image: '/images/tools/google-test.png',
    categories: ['test'],
  },
  {
    id: '102',
    name: 'GitHub',
    description: 'Test with a medium-complexity site',
    url: 'https://github.com/',
    image: '/images/tools/github-test.png',
    categories: ['test'],
  },
  {
    id: '103',
    name: 'CNN',
    description: 'Test with a site that has cookie banners and popups',
    url: 'https://www.cnn.com/',
    image: '/images/tools/cnn-test.png',
    categories: ['test', 'popup'],
  }
]; 