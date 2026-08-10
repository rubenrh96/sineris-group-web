import type { ImageMetadata } from 'astro';
import azucarLiquidoImg from '../assets/products/azucar-liquido.png';
import azucarInvertidoImg from '../assets/products/azucar-invertido.png';
import glucosaFructosaImg from '../assets/products/glucosa-fructosa.png';
import azucarEnGranoImg from '../assets/products/azucar-en-grano.png';
import edulcorantesSolidosImg from '../assets/products/edulcorantes-solidos.png';
import azucarLiquidoOsmotizadoImg from '../assets/products/azucar-liquido-osmotizado.png';
import maltodextrinasImg from '../assets/products/maltodextrinas.png';
import formulacionesAMedidaImg from '../assets/products/formulaciones-a-medida.png';

export interface Product {
  n: string;
  slug: string;
  title: string;
  spec: string;
  description: string;
  image?: ImageMetadata;
}

export const PRODUCTS: Product[] = [
  {
    n: '01',
    slug: 'azucar-liquido',
    title: 'Azúcar líquido',
    spec: '67% m.s.',
    description: 'Jarabe concentrado de sacarosa. Versión estándar y decolorada, lista para dosificar.',
    image: azucarLiquidoImg,
  },
  {
    n: '02',
    slug: 'azucar-liquido-osmotizado',
    title: 'Azúcar líquido osmotizado',
    spec: 'ICUMSA máx. 7',
    description: 'Azúcar líquido osmotizado y decolorado para bebidas espirituosas y aplicaciones de alta exigencia visual.',
    image: azucarLiquidoOsmotizadoImg,
  },
  {
    n: '03',
    slug: 'azucar-invertido',
    title: 'Azúcar invertido',
    spec: 'hasta 81% m.s.',
    description: 'Jarabes ORO, DECO e invertido parcial — proceso enzimático o ácido, según aplicación.',
    image: azucarInvertidoImg,
  },
  {
    n: '04',
    slug: 'glucosa-fructosa',
    title: 'Glucosa y fructosa',
    spec: 'hasta 82% m.s.',
    description: 'Jarabes de glucosa y mezclas glucosa-fructosa derivados de maíz, para bollería, bebidas y conservas.',
    image: glucosaFructosaImg,
  },
  {
    n: '05',
    slug: 'maltodextrinas',
    title: 'Maltodextrinas y jarabes de maíz',
    spec: 'DE variable',
    description: 'Distintos grados de dextrosa equivalente para aportar cuerpo, textura y estabilidad.',
    image: maltodextrinasImg,
  },
  {
    n: '06',
    slug: 'formulaciones-a-medida',
    title: 'Formulaciones a medida',
    spec: 'A especificación',
    description: 'Mezclas y jarabes desarrollados junto a su equipo técnico según la aplicación y el volumen.',
    image: formulacionesAMedidaImg,
  },
  {
    n: '07',
    slug: 'azucar-en-grano',
    title: 'Azúcar en grano',
    spec: 'Varias granulometrías',
    description: 'Azúcar cristal en diferentes granulometrías, en formato sólido, para múltiples aplicaciones.',
    image: azucarEnGranoImg,
  },
  {
    n: '08',
    slug: 'edulcorantes-solidos',
    title: 'Edulcorantes sólidos',
    spec: 'Alta intensidad',
    description: 'Variedad de edulcorantes de alta intensidad en formato sólido: sucralosa, aspartamo, stevia y otros.',
    image: edulcorantesSolidosImg,
  },
];
