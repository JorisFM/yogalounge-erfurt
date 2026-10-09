// Kurse und Wochenplan der YogaLounge.
// Der verbindliche, tagesaktuelle Plan liegt bei bsport. Hier steht der reguläre Wochenrhythmus.
// Tage: 0 = Montag … 6 = Sonntag.

import type { ImageMetadata } from 'astro';
import anfaenger from '../assets/img/raum-matten.jpg';
import hatha from '../assets/img/hatha.jpg';
import jedermann from '../assets/img/raum-erker.jpg';
import kasse from '../assets/img/raum-matten-2.jpg';
import vinyasa from '../assets/img/stillleben.jpg';
import morgen from '../assets/img/morgenyoga.jpg';
import wochenende from '../assets/img/eingang.jpg';
import schwanger from '../assets/img/schwangerschaft.jpg';
import baby from '../assets/img/baby.jpg';
import kinder from '../assets/img/kinder.jpg';
import luisenpark from '../assets/img/luisenpark.jpg';
import klang from '../assets/img/klangmassage.jpg';

export type Termin = {
  tag: number;
  von: string;
  bis: string;
  zusatz?: string;
};

export type Gruppe = 'einstieg' | 'fluss' | 'familie' | 'mehr';

export type Kurs = {
  slug: string;
  name: string;
  /** Ein Satz für Karten und Wochenplan. */
  kurz: string;
  gruppe: Gruppe;
  dauer: string;
  fuer: string;
  bild: ImageMetadata;
  bildAlt: string;
  text: string[];
  termine: Termin[];
  /** Hinweis, wenn es keine festen Wochentermine gibt. */
  termineHinweis?: string;
  buchung?: { label: string; href: string };
  mitPreisen?: boolean;
};

export const gruppen: Record<Gruppe, { titel: string; text: string }> = {
  einstieg: {
    titel: 'Zum Einstieg',
    text: 'Ruhige Hatha-Klassen, in denen du die Grundhaltungen in deinem Tempo lernst.',
  },
  fluss: {
    titel: 'Kraft und Fluss',
    text: 'Für alle, die sich mehr bewegen möchten: Vinyasa, Ashtanga am Morgen, Yoga am Wochenende.',
  },
  familie: {
    titel: 'Schwangerschaft, Baby, Kinder',
    text: 'Angepasste Praxis für Schwangere, für Eltern mit Baby und für Grundschulkinder bis zur 6. Klasse.',
  },
  mehr: {
    titel: 'Draußen und Entspannung',
    text: 'Yoga unter Bäumen im Luisenpark und Klangmassage im Einzeltermin.',
  },
};

export const kurse: Kurs[] = [
  {
    slug: 'yoga-fuer-anfaenger',
    name: 'Yoga für Anfänger',
    kurz: 'Offene Klasse für alle, die neu anfangen oder neu einsteigen.',
    gruppe: 'einstieg',
    dauer: '90 Minuten',
    fuer: 'Einsteiger und Wiedereinsteiger',
    bild: anfaenger,
    bildAlt: 'Yogaraum der YogaLounge mit ausgelegten Matten, Kissen und Blöcken auf Fischgrätparkett',
    text: [
      'Du möchtest die Grundhaltungen des Yoga kennenlernen und dich in deinem eigenen Tempo damit vertraut machen? Dann fängst du hier an.',
      'In 90 Minuten führen wir dich durch eine Stunde, die aktiviert und zugleich entspannt. Du lernst die wichtigsten Haltungen und Atemübungen des Hatha Yoga und bekommst Übungen mit, die du auch zu Hause und im Büro machen kannst.',
      'Die Klasse ist offen: Du kannst jederzeit einsteigen und buchst einzelne Termine, wie es in deine Woche passt.',
    ],
    termine: [
      { tag: 0, von: '16:30', bis: '18:00' },
      { tag: 1, von: '09:30', bis: '11:00' },
      { tag: 1, von: '19:30', bis: '21:00' },
      { tag: 2, von: '17:00', bis: '18:30' },
      { tag: 4, von: '09:30', bis: '11:00' },
    ],
    mitPreisen: true,
  },
  {
    slug: 'yoga-fuer-jedermann',
    name: 'Yoga für jedermann',
    kurz: 'Klassisches Hatha für Anfänger und Geübte in derselben Stunde.',
    gruppe: 'einstieg',
    dauer: '90 Minuten',
    fuer: 'Anfänger und Geübte',
    bild: jedermann,
    bildAlt: 'Heller Yogaraum mit Erker, Kronleuchter und Holzboden',
    text: [
      'Yoga für alle, die Lust darauf haben, egal ob du zum ersten Mal kommst oder seit Jahren übst.',
      'Du praktizierst so, wie es sich für dich gut anfühlt. Wir führen dich durch eine klassische Hatha-Stunde mit Haltungen, Atemübungen und einer langen Endentspannung.',
    ],
    termine: [
      { tag: 0, von: '18:30', bis: '20:00' },
      { tag: 2, von: '19:00', bis: '20:30' },
      { tag: 4, von: '16:30', bis: '18:00' },
    ],
    mitPreisen: true,
  },
  {
    slug: 'hatha-yoga',
    name: 'Hatha Yoga',
    kurz: 'Die Grundlage der meisten unserer Klassen: Haltungen, Atem, Entspannung.',
    gruppe: 'einstieg',
    dauer: '60 bis 90 Minuten',
    fuer: 'alle Level',
    bild: hatha,
    bildAlt: 'Frau in sitzender Vorwärtsbeuge',
    text: [
      'Hatha Yoga verbindet Körperhaltungen (Asanas), Atemübungen (Pranayama) und Achtsamkeit. Viele andere Yogastile bauen darauf auf.',
      'Wenn du die Grundhaltungen sicher lernen willst, ist Hatha der beste Einstieg. Bei uns ist es die Basis für Yoga für Anfänger, Yoga für jedermann, Atem & Balance und die Abendroutine am Montag.',
    ],
    termine: [],
    termineHinweis:
      'Hatha unterrichten wir in den Klassen Yoga für Anfänger und Yoga für jedermann. Die Termine findest du dort und im Wochenplan.',
  },
  {
    slug: 'krankenkassen-basiskurs',
    name: 'Krankenkassen-Basiskurs',
    kurz: 'Zertifizierter Kurs, den deine Krankenkasse ganz oder teilweise bezahlt.',
    gruppe: 'einstieg',
    dauer: 'mehrere Wochen',
    fuer: 'Einsteiger',
    bild: kasse,
    bildAlt: 'Vorbereiteter Yogaraum mit Matten und Sitzkissen',
    text: [
      'Die meisten gesetzlichen Krankenkassen bezuschussen Präventionskurse. Unsere Basiskurse sind dafür zertifiziert und gelistet.',
      'Der Kurs ist geschlossen: Du lernst mit einer festen Gruppe über mehrere Wochen die Grundlagen des Yoga.',
      'Wir sind AOK-Partner. Für AOK-Mitglieder ist der Basiskurs komplett über den Gesundheitsgutschein finanzierbar. Den Gutschein kannst du zweimal im Jahr anfordern und für Yoga einlösen.',
      'Bei anderen Kassen erklären wir dir gern, wie die Erstattung läuft. Ruf an oder schreib uns.',
    ],
    termine: [],
    termineHinweis: 'Die nächsten Kursstarts stehen im Kursplan bei bsport.',
    mitPreisen: true,
  },
  {
    slug: 'vinyasa-flow',
    name: 'Vinyasa Flow',
    kurz: 'Sanfte, fließende Sequenzen mit längerem Halten.',
    gruppe: 'fluss',
    dauer: '90 Minuten',
    fuer: 'alle mit etwas Yogaerfahrung',
    bild: vinyasa,
    bildAlt: 'Gerollte Decken in einem Korb, Sitzkissen und eine kleine Buddhafigur',
    text: [
      'Eine ruhige Stunde, in der Atem und Bewegung zu einem gleichmäßigen Fluss werden.',
      'Du bleibst länger in den Haltungen, damit sich Spannungen lösen können. Gut zum Runterkommen nach einer vollen Woche oder in der Mittagspause am Freitag.',
    ],
    termine: [
      { tag: 3, von: '17:00', bis: '18:30' },
      { tag: 4, von: '11:30', bis: '13:00' },
    ],
    mitPreisen: true,
  },
  {
    slug: 'morgenyoga',
    name: 'Morgenyoga',
    kurz: 'Eine Stunde Ashtanga vor der Arbeit. Neu im Programm.',
    gruppe: 'fluss',
    dauer: '60 Minuten',
    fuer: 'Frühaufsteher, alle Level',
    bild: morgen,
    bildAlt: 'Person in Tänzerhaltung vor Sonnenaufgang auf einer Wiese',
    text: [
      'Starte mit einer Stunde Ashtanga Yoga in den Tag. Der achtsame Flow macht wach, hebt die Stimmung und gibt dir Fokus für alles, was danach kommt.',
      'Danach hast du noch den ganzen Tag vor dir.',
    ],
    termine: [],
    termineHinweis: 'Die aktuellen Morgentermine findest du direkt bei bsport.',
    buchung: { label: 'Morgenyoga buchen', href: 'morgenyoga' },
    mitPreisen: true,
  },
  {
    slug: 'wochenend-yoga',
    name: 'Yoga am Wochenende',
    kurz: 'Freitagnachmittag, Samstag- und Sonntagvormittag.',
    gruppe: 'fluss',
    dauer: '90 Minuten',
    fuer: 'alle Level',
    bild: wochenende,
    bildAlt: 'Schaufenster und Eingang der YogaLounge an der Neuwerkstraße',
    text: [
      'Unter der Woche ist keine Zeit? Am Wochenende gibt es drei Gelegenheiten: Freitag und Samstag mit Kathrin, Sonntag mit Mia.',
      'Such dir deine Lieblingsklasse aus und nimm dir die 90 Minuten für dich.',
    ],
    termine: [
      { tag: 4, von: '16:30', bis: '18:00', zusatz: 'mit Kathrin' },
      { tag: 5, von: '11:00', bis: '12:30', zusatz: 'mit Kathrin' },
      { tag: 6, von: '10:00', bis: '11:30', zusatz: 'mit Mia' },
    ],
    mitPreisen: true,
  },
  {
    slug: 'schwangerschaftsyoga',
    name: 'Schwangerschaftsyoga',
    kurz: 'Angepasste Praxis für jede Phase der Schwangerschaft.',
    gruppe: 'familie',
    dauer: '70 bis 90 Minuten',
    fuer: 'Schwangere',
    bild: schwanger,
    bildAlt: 'Schwangere Frau in der Baumhaltung',
    text: [
      'Die Schwangerschaft verändert deinen Körper, deinen Alltag und deinen Blick auf vieles. Yoga hilft dir, mit diesen Veränderungen in Kontakt zu bleiben.',
      'Du übst in angepasster Form und in Ruhe, genau so viel, wie es sich gut anfühlt. Du schulst dein Körperbewusstsein, beruhigst dein Nervensystem und bereitest dich mit Atem und Haltungen auf die Geburt vor.',
      'Sprich bitte vorher mit deiner Hebamme oder deiner Ärztin, ob Yoga für dich gerade passt.',
    ],
    termine: [
      { tag: 1, von: '09:30', bis: '11:00' },
      { tag: 3, von: '13:30', bis: '14:40' },
    ],
    mitPreisen: true,
  },
  {
    slug: 'yoga-mit-baby',
    name: 'Yoga mit Baby',
    kurz: 'Nach der Rückbildung: 60 Minuten gemeinsam mit deinem Kind.',
    gruppe: 'familie',
    dauer: '60 Minuten',
    fuer: 'Eltern mit Baby, nach der Rückbildung',
    bild: baby,
    bildAlt: 'Mutter übt Yoga, ihr Baby liegt lachend vor ihr',
    text: [
      'Nach der Rückbildung darf es langsam wieder aktiver werden. Gemeinsam mit deinem Kind übst du Haltungen, die dich kräftigen. Am Ende gibt es eine kurze Entspannung für euch beide.',
      'Es gibt zwei Gruppen: die Minis bis zum Krabbeln und die Midis ab dem Krabbelalter.',
    ],
    termine: [
      { tag: 3, von: '10:00', bis: '11:00', zusatz: 'Minis, bis zum Krabbeln' },
      { tag: 3, von: '11:30', bis: '12:30', zusatz: 'Midis, ab dem Krabbelalter' },
    ],
    mitPreisen: true,
  },
  {
    slug: 'yoga-fuer-kinder',
    name: 'Yoga für Kinder',
    kurz: 'Spielerisch üben, bewegen und kurz still werden. 1. bis 6. Klasse.',
    gruppe: 'familie',
    dauer: '60 Minuten',
    fuer: 'Kinder der 1. bis 6. Klasse',
    bild: kinder,
    bildAlt: 'Mädchen sitzt im Schneidersitz mit vor der Brust gefalteten Händen',
    text: [
      'Hier lernen Kinder Yoga mit viel Spiel und Herz. Sie haben Spaß an der Bewegung und üben, für kurze Momente innezuhalten.',
      'Es gibt zwei Gruppen am Montagnachmittag: „Mutig & Gelassen“ für die 1. bis 3. Klasse und eine Gruppe für Teens und Pre-Teens der 4. bis 6. Klasse.',
    ],
    termine: [
      { tag: 0, von: '15:30', bis: '16:30', zusatz: 'Teens & Pre-Teens, 4.–6. Klasse' },
      { tag: 0, von: '16:45', bis: '17:45', zusatz: 'Mutig & Gelassen, 1.–3. Klasse' },
    ],
  },
  {
    slug: 'yoga-im-luisenpark',
    name: 'Yoga im Luisenpark',
    kurz: 'Donnerstagabend unter Bäumen, auf Spendenbasis. Solange das Wetter mitspielt.',
    gruppe: 'mehr',
    dauer: '60 Minuten',
    fuer: 'Anfänger und Geübte',
    bild: luisenpark,
    bildAlt: 'Yogagruppe auf Matten auf einer Wiese im Luisenpark, umgeben von Bäumen',
    text: [
      'Solange das Wetter es zulässt, übt Kathrin donnerstags um 18:30 Uhr mit euch im Luisenpark. Treffpunkt ist der Dendrologische Garten, Winzerstraße 21, 99094 Erfurt.',
      'So findest du den Platz: vom Dreibrunnenbad über die große Brücke, dann über die kleine Brücke mit den Liebesschlössern, an der Mauer entlang nach links. Rechts liegt dann die Wiese.',
      'Die Stunde ist sanft und für Anfänger wie Geübte geeignet. Bring deine Matte und etwas zu trinken mit. Bezahlt wird mit einer Spende vor Ort.',
      'Kathrin ist da, solange es mindestens 15 Grad warm ist, es nicht in Strömen regnet und der Boden nicht aufgeweicht ist. Melde dich bitte trotzdem im Kursplan an, damit sie weiß, wer kommt. Bei Fragen: 0176 58 86 33 12.',
    ],
    termine: [{ tag: 3, von: '18:30', bis: '19:30', zusatz: 'Sommer, bei gutem Wetter' }],
  },
  {
    slug: 'klangmassage',
    name: 'Klangmassage',
    kurz: 'Eine Stunde Klangschalen und ätherische Öle im Einzeltermin.',
    gruppe: 'mehr',
    dauer: '60 Minuten',
    fuer: 'Einzeltermin',
    bild: klang,
    bildAlt: 'Klangschalen werden auf dem Bauch einer liegenden Person angeschlagen',
    text: [
      'Abgestimmte Klangschalen werden auf und neben deinen bekleideten Körper gestellt und sanft angeschlagen. Die feinen Schwingungen gehen durch den ganzen Körper.',
      'Die 60 Minuten umfassen ein Vorgespräch, die Klangmassage und Zeit zum Nachspüren. Dazu beduftet Fatima den Raum mit passenden ätherischen Ölen.',
    ],
    termine: [],
    termineHinweis: 'Termine buchst du bei bsport unter „Wellness + Coaching“.',
    buchung: { label: 'Klangmassage buchen', href: 'einzeltermine' },
  },
];

export const tage = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
export const tageKurz = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

export type Eintrag = Termin & { kurs: Kurs; name: string };

/** Alle Termine einer Woche, nach Tag und Uhrzeit sortiert. */
export function wochenplan(): Eintrag[][] {
  const woche: Eintrag[][] = tage.map(() => []);
  for (const kurs of kurse) {
    for (const t of kurs.termine) {
      // Freitag 16:30 ist dieselbe Klasse wie „Yoga für jedermann“: nicht doppelt zeigen.
      if (kurs.slug === 'wochenend-yoga' && t.tag === 4) continue;
      woche[t.tag].push({ ...t, kurs, name: kurs.name });
    }
  }
  for (const tag of woche) tag.sort((a, b) => a.von.localeCompare(b.von));
  return woche;
}
