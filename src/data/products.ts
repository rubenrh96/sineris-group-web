import type { ImageMetadata } from 'astro';
import azucarLiquidoImg from '../assets/products/azucar-liquido.png';
import azucarInvertidoImg from '../assets/products/azucar-invertido.png';
import glucosaFructosaImg from '../assets/products/glucosa-fructosa.png';
import azucarEnGranoImg from '../assets/products/azucar-en-grano.png';
import edulcorantesSolidosImg from '../assets/products/edulcorantes-solidos.png';
import azucarLiquidoOsmotizadoImg from '../assets/products/azucar-liquido-osmotizado.png';
import maltodextrinasImg from '../assets/products/maltodextrinas.png';
import formulacionesAMedidaImg from '../assets/products/formulaciones-a-medida.png';
import aceiteOlivaImg from '../assets/products/aceite-oliva.png';
import aceiteGirasolImg from '../assets/products/aceite-girasol.png';
import aceiteSojaImg from '../assets/products/aceite-soja.png';
import aceiteColzaImg from '../assets/products/aceite-colza.png';
import aceiteCocoImg from '../assets/products/aceite-coco.png';
import aceiteAguacateImg from '../assets/products/aceite-aguacate.png';
import aceitePepitaUvaImg from '../assets/products/aceite-pepita-uva.png';
import almidonImg from '../assets/products/almidon.png';
import acidoCitricoImg from '../assets/products/acido-citrico.png';

export type CategoryId = 'azucares' | 'aceites' | 'otros';

export interface Product {
  n: string;
  slug: string;
  title: string;
  spec: string;
  description: string;
  category: CategoryId;
  image?: ImageMetadata;
  /** True when the image already has the product title baked into it (like the sugar family banners) — the card hides its own <h3> to avoid a duplicate. */
  titleInImage?: boolean;
  /** CSS object-position for the card photo, for images whose subject isn't centered (e.g. a tall bottle) and gets clipped by the default centered 3:2 crop. */
  imagePosition?: string;
  /** Override the default 3:2 card ratio for photos that lose too much of the subject at that ratio. */
  imageRatio?: string;
}

export interface ProductCategory {
  id: CategoryId;
  eyebrow: string;
  title: string;
  lede: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'azucares',
    eyebrow: 'Azúcares y jarabes',
    title: 'Azúcares y jarabes de glucosa-fructosa.',
    lede: 'De los jarabes concentrados de sacarosa al azúcar en grano y los edulcorantes sólidos: cada familia se fabrica bajo el mismo control analítico y la misma documentación técnica.',
  },
  {
    id: 'aceites',
    eyebrow: 'Aceites',
    title: 'Aceites vegetales de uso alimentario.',
    lede: 'Una gama de aceites vegetales para fabricantes de alimentos y bebidas, con la misma exigencia de calidad que el resto de nuestro catálogo.',
  },
  {
    id: 'otros',
    eyebrow: 'Otros ingredientes',
    title: 'Almidones y ácidos.',
    lede: 'Ingredientes complementarios para texturizar, estabilizar y regular la acidez de sus formulaciones.',
  },
];

export const PRODUCTS: Product[] = [
  // Azúcares y jarabes de glucosa-fructosa
  {
    n: '01',
    slug: 'azucar-liquido',
    title: 'Azúcar líquido',
    spec: '67% m.s.',
    description: 'Jarabe concentrado de sacarosa. Versión estándar y decolorada, lista para dosificar.',
    category: 'azucares',
    image: azucarLiquidoImg,
    titleInImage: true,
  },
  {
    n: '02',
    slug: 'azucar-liquido-osmotizado',
    title: 'Azúcar líquido osmotizado',
    spec: 'ICUMSA máx. 7',
    description: 'Azúcar líquido osmotizado y decolorado para bebidas espirituosas y aplicaciones de alta exigencia visual.',
    category: 'azucares',
    image: azucarLiquidoOsmotizadoImg,
    titleInImage: true,
  },
  {
    n: '03',
    slug: 'azucar-invertido',
    title: 'Azúcar invertido',
    spec: 'hasta 81% m.s.',
    description: 'Jarabes ORO, DECO e invertido parcial — proceso enzimático o ácido, según aplicación.',
    category: 'azucares',
    image: azucarInvertidoImg,
    titleInImage: true,
  },
  {
    n: '04',
    slug: 'glucosa-fructosa',
    title: 'Glucosa y fructosa',
    spec: 'hasta 82% m.s.',
    description: 'Jarabes de glucosa y mezclas glucosa-fructosa derivados de maíz, para bollería, bebidas y conservas.',
    category: 'azucares',
    image: glucosaFructosaImg,
    titleInImage: true,
  },
  {
    n: '05',
    slug: 'maltodextrinas',
    title: 'Maltodextrinas y jarabes de maíz',
    spec: 'DE variable',
    description: 'Distintos grados de dextrosa equivalente para aportar cuerpo, textura y estabilidad.',
    category: 'azucares',
    image: maltodextrinasImg,
    titleInImage: true,
  },
  {
    n: '06',
    slug: 'formulaciones-a-medida',
    title: 'Formulaciones a medida',
    spec: 'A especificación',
    description: 'Mezclas y jarabes desarrollados junto a su equipo técnico según la aplicación y el volumen.',
    category: 'azucares',
    image: formulacionesAMedidaImg,
    titleInImage: true,
  },
  {
    n: '07',
    slug: 'azucar-en-grano',
    title: 'Azúcar en grano',
    spec: 'Varias granulometrías',
    description: 'Azúcar cristal en diferentes granulometrías, en formato sólido, para múltiples aplicaciones.',
    category: 'azucares',
    image: azucarEnGranoImg,
    titleInImage: true,
  },
  {
    n: '08',
    slug: 'edulcorantes-solidos',
    title: 'Edulcorantes sólidos',
    spec: 'Alta intensidad',
    description: 'Variedad de edulcorantes de alta intensidad en formato sólido: sucralosa, aspartamo, stevia y otros.',
    category: 'azucares',
    image: edulcorantesSolidosImg,
    titleInImage: true,
  },

  // Aceites vegetales
  {
    n: '01',
    slug: 'aceite-oliva',
    title: 'Aceite de oliva',
    spec: 'Grado alimentario',
    description: 'Aceite de oliva de uso alimentario, disponible en distintas calidades según aplicación.',
    category: 'aceites',
    image: aceiteOlivaImg,
  },
  {
    n: '02',
    slug: 'aceite-girasol',
    title: 'Aceite de girasol',
    spec: 'Grado alimentario',
    description: 'Aceite de girasol refinado, apto para fritura y procesado industrial.',
    category: 'aceites',
    image: aceiteGirasolImg,
  },
  {
    n: '03',
    slug: 'aceite-soja',
    title: 'Aceite de soja',
    spec: 'Grado alimentario',
    description: 'Aceite de soja de uso alimentario, con buena estabilidad térmica.',
    category: 'aceites',
    image: aceiteSojaImg,
    imagePosition: 'top',
  },
  {
    n: '04',
    slug: 'aceite-colza',
    title: 'Aceite de colza',
    spec: 'Grado alimentario',
    description: 'Aceite de colza refinado, de perfil nutricional equilibrado.',
    category: 'aceites',
    image: aceiteColzaImg,
  },
  {
    n: '05',
    slug: 'aceite-coco',
    title: 'Aceite de coco',
    spec: 'Grado alimentario',
    description: 'Aceite de coco, sólido a temperatura ambiente, para repostería y snacks.',
    category: 'aceites',
    image: aceiteCocoImg,
  },
  {
    n: '06',
    slug: 'aceite-aguacate',
    title: 'Aceite de aguacate',
    spec: 'Grado alimentario',
    description: 'Aceite de aguacate de alta calidad, para aplicaciones gourmet.',
    category: 'aceites',
    image: aceiteAguacateImg,
  },
  {
    n: '07',
    slug: 'aceite-pepita-uva',
    title: 'Aceite de pepita de uva',
    spec: 'Grado alimentario',
    description: 'Aceite de pepita de uva, ligero y de sabor neutro.',
    category: 'aceites',
    image: aceitePepitaUvaImg,
    imageRatio: '6 / 5',
    imagePosition: 'top',
  },

  // Otros ingredientes
  {
    n: '01',
    slug: 'almidon',
    title: 'Almidón',
    spec: 'Nativo y modificado',
    description: 'Almidones nativos y modificados para texturizar y estabilizar sus formulaciones.',
    category: 'otros',
    image: almidonImg,
  },
  {
    n: '02',
    slug: 'acido-citrico',
    title: 'Ácido cítrico',
    spec: 'Grado alimentario',
    description: 'Regulador de acidez y conservante natural de uso alimentario, en formato sólido.',
    category: 'otros',
    image: acidoCitricoImg,
  },
];
