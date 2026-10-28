export interface Letter {
  char: string
  romaji: string
  alt?: string[]
}

export interface HiraganaGroup {
  id: string
  label: string
  chars: Letter[]
}

export const HIRAGANA_GROUPS: HiraganaGroup[] = [
  {
    id: "V",
    label: "Vogais",
    chars: [
      { char: "あ", romaji: "a" },
      { char: "い", romaji: "i" },
      { char: "う", romaji: "u" },
      { char: "え", romaji: "e" },
      { char: "お", romaji: "o" },
    ],
  },
  {
    id: "K",
    label: "K",
    chars: [
      { char: "か", romaji: "ka" },
      { char: "き", romaji: "ki" },
      { char: "く", romaji: "ku" },
      { char: "け", romaji: "ke" },
      { char: "こ", romaji: "ko" },
    ],
  },
  {
    id: "G",
    label: "G",
    chars: [
      { char: "が", romaji: "ga" },
      { char: "ぎ", romaji: "gi" },
      { char: "ぐ", romaji: "gu" },
      { char: "げ", romaji: "ge" },
      { char: "ご", romaji: "go" },
    ],
  },
  {
    id: "S",
    label: "S",
    chars: [
      { char: "さ", romaji: "sa" },
      { char: "し", romaji: "shi" },
      { char: "す", romaji: "su" },
      { char: "せ", romaji: "se" },
      { char: "そ", romaji: "so" },
    ],
  },
  {
    id: "Z",
    label: "Z",
    chars: [
      { char: "ざ", romaji: "za" },
      { char: "じ", romaji: "ji", alt: ["zi"] },
      { char: "ず", romaji: "zu" },
      { char: "ぜ", romaji: "ze" },
      { char: "ぞ", romaji: "zo" },
    ],
  },
  {
    id: "T",
    label: "T",
    chars: [
      { char: "た", romaji: "ta" },
      { char: "ち", romaji: "chi" },
      { char: "つ", romaji: "tsu" },
      { char: "て", romaji: "te" },
      { char: "と", romaji: "to" },
    ],
  },
  {
    id: "D",
    label: "D",
    chars: [
      { char: "だ", romaji: "da" },
      { char: "ぢ", romaji: "ji", alt: ["di"] },
      { char: "づ", romaji: "zu", alt: ["du"] },
      { char: "で", romaji: "de" },
      { char: "ど", romaji: "do" },
    ],
  },
  {
    id: "N",
    label: "N",
    chars: [
      { char: "な", romaji: "na" },
      { char: "に", romaji: "ni" },
      { char: "ぬ", romaji: "nu" },
      { char: "ね", romaji: "ne" },
      { char: "の", romaji: "no" },
    ],
  },
  {
    id: "H",
    label: "H",
    chars: [
      { char: "は", romaji: "ha" },
      { char: "ひ", romaji: "hi" },
      { char: "ふ", romaji: "fu" },
      { char: "へ", romaji: "he" },
      { char: "ほ", romaji: "ho" },
    ],
  },
  {
    id: "B",
    label: "B",
    chars: [
      { char: "ば", romaji: "ba" },
      { char: "び", romaji: "bi" },
      { char: "ぶ", romaji: "bu" },
      { char: "べ", romaji: "be" },
      { char: "ぼ", romaji: "bo" },
    ],
  },
  {
    id: "P",
    label: "P",
    chars: [
      { char: "ぱ", romaji: "pa" },
      { char: "ぴ", romaji: "pi" },
      { char: "ぷ", romaji: "pu" },
      { char: "ぺ", romaji: "pe" },
      { char: "ぽ", romaji: "po" },
    ],
  },
  {
    id: "M",
    label: "M",
    chars: [
      { char: "ま", romaji: "ma" },
      { char: "み", romaji: "mi" },
      { char: "む", romaji: "mu" },
      { char: "め", romaji: "me" },
      { char: "も", romaji: "mo" },
    ],
  },
  {
    id: "Y",
    label: "Y",
    chars: [
      { char: "や", romaji: "ya" },
      { char: "ゆ", romaji: "yu" },
      { char: "よ", romaji: "yo" },
    ],
  },
  {
    id: "R",
    label: "R",
    chars: [
      { char: "ら", romaji: "ra" },
      { char: "り", romaji: "ri" },
      { char: "る", romaji: "ru" },
      { char: "れ", romaji: "re" },
      { char: "ろ", romaji: "ro" },
    ],
  },
  {
    id: "W",
    label: "W",
    chars: [
      { char: "わ", romaji: "wa" },
      { char: "を", romaji: "wo" },
    ],
  },
  {
    id: "NF",
    label: "N final",
    chars: [{ char: "ん", romaji: "n" }],
  },
]

export const MIN_CARDS = 5
export const MAX_CARDS = 150
