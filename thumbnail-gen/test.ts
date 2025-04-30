import { Tool } from '../src/data/tools';
import { generateImagePath } from './utils';

// Test items for screenshot generation (multiple sites with varying complexity)
export const testTools: Tool[] = [
  {
    id: '1001',
    name: 'Refactoring Guru',
    description: 'Educational resource on design patterns and refactoring techniques',
    url: 'https://refactoring.guru/',
    image: generateImagePath('Refactoring Guru', '1001'),
    categories: ['development', 'education', 'resources'],
  },
  {
    id: '1002',
    name: 'Google',
    description: 'Test with a simple, fast-loading site',
    url: 'https://www.google.com/',
    image: generateImagePath('Google', '1002'),
    categories: ['test'],
  },
  {
    id: '1003',
    name: 'GitHub',
    description: 'Test with a medium-complexity site',
    url: 'https://github.com/',
    image: generateImagePath('GitHub', '1003'),
    categories: ['test'],
  },
  {
    id: '1004',
    name: 'CNN',
    description: 'Test with a site that has cookie banners and popups',
    url: 'https://www.cnn.com/',
    image: generateImagePath('CNN', '1004'),
    categories: ['test', 'popup'],
  }
]; 