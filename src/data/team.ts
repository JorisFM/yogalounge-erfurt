import type { ImageMetadata } from 'astro';
import kathrin from '../assets/img/team-kathrin.jpg';
import fabian from '../assets/img/team-fabian.jpg';
import fatima from '../assets/img/team-fatima.jpg';
import sandra from '../assets/img/team-sandra.jpg';
import gyula from '../assets/img/team-gyula.jpg';

export type Person = {
  name: string;
  rolle: string;
  bild: ImageMetadata;
  bildAlt: string;
  text?: string[];
  zitat?: { text: string; quelle: string };
  ausbildung?: string[];
  angebote?: string[];
};

export const team: Person[] = [
  {
    name: 'Kathrin',
    rolle: 'Gründerin, Yogalehrerin',
    bild: kathrin,
    bildAlt: 'Kathrin Seemann lehnt in einem weißen Tuch an einem goldenen Türrahmen der YogaLounge',
    text: [
      'Kathrin hat die YogaLounge 2020 gegründet. Ausgebildet und initiiert wurde sie in Indien, sie ist eng mit der Traditionslinie von Swami Sivananda verbunden.',
      'Sie unterrichtet die alten Lehren so, dass sie in einen Erfurter Alltag passen. Leistungsdruck und Erwartungen, wie eine Haltung auszusehen hat, bleiben vor der Tür. Auf der Matte darfst du dich neu entdecken.',
    ],
    zitat: { text: 'Ein Gramm Praxis ist besser als eine Tonne Theorie.', quelle: 'Swami Sivananda' },
    ausbildung: ['Yogalehrerin, ausgebildet in Indien (Sivananda-Tradition)'],
    angebote: [
      'Yoga für Anfänger und Geübte',
      'Yoga für jedermann',
      'Yoga in der Schwangerschaft und mit Baby',
      'Yoga am Wochenende',
      'Personal Yoga und yogatherapeutische Beratung',
      'Yogamassage und Atemcoaching',
      'Yoga im Luisenpark',
      'Yoga in Unternehmen, Workshops und Vorträge',
    ],
  },
  {
    name: 'Fabian',
    rolle: 'Yogalehrer, Physiotherapeut i. A.',
    bild: fabian,
    bildAlt: 'Fabian sitzt lächelnd auf dem Boden eines hellen Yogaraums',
    text: [
      'Fabian kam eher zufällig zum Yoga und ist geblieben. Nach sieben Jahren eigener Praxis machte er eine zweijährige Ausbildung im Sivananda-Stil, die er 2019 abschloss. Seitdem unterrichtet er Klassen, Schulprojekte und Veranstaltungen.',
      '2022 begann er die Ausbildung zum Physiotherapeuten. Er verbindet den yogischen Blick auf Körper und Geist mit schulmedizinischem Wissen.',
    ],
    zitat: {
      text: 'Ich bin fest davon überzeugt, dass Yoga für jeden Menschen das Potenzial birgt, dem Leben mehr Gesundheit, Tiefe und Lebensfreude zu schenken.',
      quelle: 'Fabian',
    },
    ausbildung: ['Zweijährige Yogalehrerausbildung nach Sivananda', 'Physiotherapeut (in Ausbildung)'],
    angebote: ['Yoga für Anfänger', 'Yoga für Geübte', 'Yoga für jedermann', 'Yoga am Wochenende'],
  },
  {
    name: 'Fatima',
    rolle: 'Klangmassage, Klangreisen',
    bild: fatima,
    bildAlt: 'Fatima schlägt eine Klangschale an, die sie in der Hand hält',
    text: [
      'Fatima ist Ergotherapeutin und arbeitet ganzheitlich, mit Blick auf Körper, Geist und Seele. Sie setzt auf die Kräfte, die jeder Mensch selbst mitbringt.',
      'Als Peter Hess®-Klangmassagepraktikerin und Entspannungstherapeutin arbeitet sie mit Klangschalen, Gong und Monochord und kombiniert Klang mit ätherischen Ölen.',
    ],
    ausbildung: ['Ergotherapeutin', 'Peter Hess®-Klangmassagepraktikerin', 'Entspannungstherapeutin'],
    angebote: ['Klangmassage', 'Klangreisen', 'Rituale'],
  },
  {
    name: 'Sandra',
    rolle: 'Im Lehrteam',
    bild: sandra,
    bildAlt: 'Portrait von Sandra',
  },
  {
    name: 'Gyula',
    rolle: 'Im Lehrteam',
    bild: gyula,
    bildAlt: 'Portrait von Gyula im warmen Licht',
  },
];
