import { ColorFixture } from './types';

const invalidColors: ColorFixture[] = [
  {
    hex: '#00',
    shortHex: null,
    rgb: 'rg(0,0,0)',
    rgba: 'rg(0,0,0,1)',
  },
  {
    hex: 'abc',
    shortHex: null,
    rgb: 'rgb(0,0,390)',
    rgba: 'rgba(0,0,0)',
  },
  {
    hex: '#ffff',
    shortHex: null,
    rgb: 'rgb(0,0)',
    rgba: 'rbga(0,0,0,1)',
  },
  {
    hex: '#0000000',
    shortHex: null,
    rgb: 'rgb(0,0,0,0)',
    rgba: 'rgba(0,0,0,1,1)',
  },
  {
    hex: '#000000000',
    shortHex: null,
    rgb: 'rbg(0,0,0)',
    rgba: 'rgba(0,0,0,2)',
  },
  {
    hex: '#00',
    shortHex: null,
    rgb: 'rgb(256,0,0)',
    rgba: 'rgba(259,0,0,1)',
  },
  {
    hex: '#gggggg',
    shortHex: null,
    rgb: 'rgb(a,0,0)',
    rgba: 'rgba(a,0,0,1)',
  },
  {
    hex: '#0000zz',
    shortHex: null,
    rgb: 'rgb(-1,0,0)',
    rgba: 'rgba(-1,0,0,1)',
  },
  {
    hex: '#ffaa8z',
    shortHex: null,
    rgb: '(0,0,0)',
    rgba: 'rgba(0,0,0,1.2)',
  },
  {
    hex: 'ffffff',
    shortHex: null,
    rgb: 'rgb0,0,0',
    rgba: 'rgba(00,0,1)',
  },
  {
    hex: '',
    shortHex: null,
    rgb: '',
    rgba: '',
  },
];

export { invalidColors };
