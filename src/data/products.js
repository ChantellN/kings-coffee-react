import v60Img from '../assets/v60.png';

export const PRODUCTS = [
  {
    id: 'ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    roaster: 'Cerulean Coffee',
    category: 'Whole Bean',
    price: 24.5,
    tastingNotes: ['Jasmine', 'Lemon', 'Peach'],
    roastLevel: 2,
    stock: 15,
    featured: true,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
    description:
      'A delicate, tea-like body with floral aromas and a bright citrus finish.',
  },
  {
    id: 'hario-v60-copper',
    name: 'Copper V60 Dripper',
    roaster: 'Hario',
    category: 'Equipment',
    price: 75.0,
    tastingNotes: [],
    roastLevel: null,
    stock: 0,
    featured: true,
    image: v60Img,
    description: 'Excellent thermal conductivity for the perfect extraction.',
  },
  {
    id: 'black-velvet-espresso',
    name: 'Black Velvet Blend',
    roaster: 'Cerulean Coffee',
    category: 'Whole Bean',
    price: 19.0,
    tastingNotes: ['Dark Chocolate', 'Molasses', 'Cherry'],
    roastLevel: 4,
    stock: 42,
    featured: false,
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780',
    description:
      'Our signature espresso blend. Heavy body with a syrupy mouthfeel.',
  },
];
