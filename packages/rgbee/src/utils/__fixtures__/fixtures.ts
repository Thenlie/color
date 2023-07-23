type ColorFixture = {
  hex: string;
  shortHex: string | null;
  rgb: string;
  rgba: string;
};

const normalColors: ColorFixture[] = [
  {
    // black
    hex: '#000000',
    shortHex: '#000',
    rgb: 'rgb(0,0,0)',
    rgba: 'rgba(0,0,0,1)',
  },
  {
    // white
    hex: '#ffffff',
    shortHex: '#fff',
    rgb: 'rgb(255,255,255)',
    rgba: 'rgba(255,255,255,1)',
  },
  {
    // red
    hex: '#ff0000',
    shortHex: '#f00',
    rgb: 'rgb(255,0,0)',
    rgba: 'rgba(255,0,0,1)',
  },
  {
    // green
    hex: '#00ff00',
    shortHex: '#0f0',
    rgb: 'rgb(0,255,0)',
    rgba: 'rgba(0,255,0,1)',
  },
  {
    // blue
    hex: '#0000ff',
    shortHex: '#00f',
    rgb: 'rgb(0,0,255)',
    rgba: 'rgba(0,0,255,1)',
  },
  {
    // yellow
    hex: '#ffff00',
    shortHex: '#ff0',
    rgb: 'rgb(255,255,0)',
    rgba: 'rgba(255,255,0,1)',
  },
  {
    // cyan
    hex: '#00ffff',
    shortHex: '#0ff',
    rgb: 'rgb(0,255,255)',
    rgba: 'rgba(0,255,255,1)',
  },
  {
    // magenta
    hex: '#ff00ff',
    shortHex: '#f0f',
    rgb: 'rgb(255,0,255)',
    rgba: 'rgba(255,0,255,1)',
  },
  {
    // orchid
    hex: '#da70d6',
    shortHex: null,
    rgb: 'rgb(218,112,214)',
    rgba: 'rgba(218,112,214,1)',
  },
  {
    // yellow green
    hex: '#9acd32',
    shortHex: null,
    rgb: 'rgb(154,205,50)',
    rgba: 'rgba(154,205,50,1)',
  },
  {
    // light blue
    hex: '#add8e6',
    shortHex: null,
    rgb: 'rgb(173,216,230)',
    rgba: 'rgba(173,216,230,1)',
  },
  {
    // tan
    hex: '#d2b48c',
    shortHex: null,
    rgb: 'rgb(210,180,140)',
    rgba: 'rgba(210,180,140,1)',
  },
];

const upperCaseHex = normalColors.map((c) => ({
  ...c,
  hex: c.hex.toUpperCase(),
}));

const spacedRgb = normalColors.map((c) => ({
  ...c,
  rgb: c.rgb.split(',').join(', '),
}));

const spacedRgba = normalColors.map((c) => ({
  ...c,
  rgba: c.rgba.split(',').join(', '),
}));

export { normalColors, upperCaseHex, spacedRgb, spacedRgba };
