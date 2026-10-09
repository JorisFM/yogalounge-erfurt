// Zentrale Stammdaten. Änderungen hier wirken auf der ganzen Seite.

const bsportBase = 'https://backoffice.bsport.io/m/YogaLounge%20Erfurt/5637';

export const site = {
  name: 'YogaLounge Erfurt',
  owner: 'Kathrin Seemann',
  street: 'Neuwerkstraße 31',
  zip: '99084',
  city: 'Erfurt',
  phone: '0176 58 86 33 12',
  phoneHref: 'tel:+4917658863312',
  email: 'kathrin@seemannsyoga.de',
  vatId: 'DE319262578',
  instagram: 'https://www.instagram.com/yogalounge_erfurt/',
  facebook: 'https://www.facebook.com/YogaLoungeErfurt/',
  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=YogaLounge+Erfurt+Neuwerkstra%C3%9Fe+31+99084+Erfurt',
  osmEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=11.0201%2C50.9698%2C11.0311%2C50.9748&layer=mapnik&marker=50.97236%2C11.02563',
  osmLink: 'https://www.openstreetmap.org/?mlat=50.97236&mlon=11.02563#map=17/50.97236/11.02563',
};

export const bsport = {
  kalender: `${bsportBase}/calendar/`,
  karten: `${bsportBase}/pass/`,
  abos: `${bsportBase}/subscription/`,
  gutschein: `${bsportBase}/giftcard/`,
  workshops: `${bsportBase}/workshop/`,
  einzeltermine: `${bsportBase}/private-service/`,
  retreat: 'https://backoffice.bsport.io/customer/payment/offer/42779411?membership=5637',
  morgenyoga: 'https://backoffice.bsport.io/customer/payment/offer/42817598?membership=5637',
  neinJa: 'https://backoffice.bsport.io/customer/payment/offer/43009231?membership=5637',
  singkreis: `${bsportBase}/workshop/?isPreview=true&activity__in=240413`,
  klangreise: `${bsportBase}/workshop/?isPreview=true&activity__in=269522`,
};

export const nav = [
  { href: '/kurse/', label: 'Kurse' },
  { href: '/preise/', label: 'Preise' },
  { href: '/studio/', label: 'Studio' },
  { href: '/team/', label: 'Team' },
  { href: '/retreat/', label: 'Retreat' },
  { href: '/kontakt/', label: 'Kontakt' },
];
