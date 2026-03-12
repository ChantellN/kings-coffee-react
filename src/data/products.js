import v60Img from '../assets/v60.png';
import castilloImg from '../assets/colombian-coffee.jpeg';
import honeyImg from '../assets/light-roast.jpg';
import grinderImg from '../assets/coffee-grinder.jpg';

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
  {
    id: 'columbian-castillo',
    name: 'Columbia Castillo Cuaca',
    roaster: 'Cerulean Coffee',
    category: 'Whole Bean',
    price: 25.6,
    tastingNotes: ['Intense Fruit', 'Chocolate', 'Lime'],
    roastLevel: 3,
    stock: 25,
    featured: false,
    image: castilloImg,
    description:
      'Our special blend with much intensity. Medium body with a sweetness.',
  },
  {
    id: 'honey-sunrise',
    name: 'Honeysuckle Sunrise',
    roaster: 'Cerulean Coffee',
    category: 'Whole Bean',
    price: 23.5,
    tastingNotes: ['Honeysuckle', 'Bright Citrus', 'Peach Nectar'],
    roastLevel: 1,
    stock: 0,
    featured: false,
    image: honeyImg,
    description:
      'Our most delicate roast. Light, floral, and perfect as a morning pour-over.',
  },
  {
    id: 'coffee-grinder-v2',
    name: 'Rise and Grind',
    roaster: 'Sutchen',
    category: 'Equipment',
    price: 42.0,
    tastingNotes: [],
    roastLevel: null,
    stock: 10,
    featured: false,
    image: grinderImg,
    description:
      'A reliable hand grinder for fresh grounds on demand. Compatible with all brew methods.',
  },
];
