// catalog.js — каталог моделей студии шаров
// Сгенерировано на основе визуального просмотра всех фото в photos/.
// code — служебный id (В/Д/П + номер), на витрине НЕ показывается.
// icon — значок повода на карточке: 🍼 выписка, 🎂 день рождения, ✨ праздник.
// name — витринное название формата «Повод — краткая деталь».
// available: у нас нет данных о реальных остатках/наличии по каждой модели —
//   значение 'под заказ' проставлено как безопасный дефолт (все композиции
//   собираются на заказ). Замените вручную на 'в наличии' там, где это верно.
// Исключено 10 фото (кластер IMG_0965/IMG_0985+соседние):
//   исключено: обнаружен водяной знак стороннего бренда (Vozduh_kzn), не подтверждено, что это работа Насти

const catalog = [
  {
    "code": "В-01",
    "name": "Выписка · именной шар с данными малыша",
    "photo": "IMG_2056.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-02",
    "name": "Выписка · шар «Младший брат»",
    "photo": "IMG_2935.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-03",
    "name": "Выписка · именной шар «Юрий»",
    "photo": "IMG_2944.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-04",
    "name": "Выписка · набор с мишкой, шар «Максим»",
    "photo": "IMG_6040.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-05",
    "name": "Выписка · набор «Алина» с луной и облаками",
    "photo": "IMG_6155.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": true,
    "available": "под заказ"
  },
  {
    "code": "В-06",
    "name": "Выписка · нежный набор с луной и облаками",
    "photo": "IMG_6182.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-07",
    "name": "Выписка · сердце «Добро пожаловать домой!»",
    "photo": "IMG_6193.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-08",
    "name": "Выписка · прозрачный шар «Добро пожаловать в семью»",
    "photo": "IMG_7086.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-09",
    "name": "Выписка · сердце «Спасибо за сына»",
    "photo": "IMG_7675.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "В-10",
    "name": "Выписка · серебристый набор с зайчиком, шар «Кирилл»",
    "photo": "IMG_0891.jpg",
    "category": "выписка",
    "icon": "🍼",
    "top": true,
    "available": "под заказ"
  },
  {
    "code": "Д-01",
    "name": "День рождения · большой шар «10 лет, сынок»",
    "photo": "IMG_0046.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-02",
    "name": "День рождения · прозрачный шар «Единичке уже 9!»",
    "photo": "IMG_2279.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-03",
    "name": "День рождения · сердце «Вере 7!», розовый набор",
    "photo": "IMG_2494.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": true,
    "available": "под заказ"
  },
  {
    "code": "Д-04",
    "name": "День рождения · чёрная цифра «2»",
    "photo": "IMG_2635.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-05",
    "name": "День рождения · чёрные цифры «34»",
    "photo": "IMG_2679.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-06",
    "name": "День рождения · Эльза, голубой набор",
    "photo": "IMG_2695.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-07",
    "name": "День рождения · серебряный шар с надписью",
    "photo": "IMG_3309.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-08",
    "name": "День рождения · шар «Happy birthday, boss»",
    "photo": "IMG_3358.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-09",
    "name": "День рождения · золотой шар «Сашенька»",
    "photo": "IMG_3425.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-10",
    "name": "День рождения · пудровая цифра «2»",
    "photo": "IMG_3542.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-11",
    "name": "День рождения · шар «Happy Birthday, Алиса!»",
    "photo": "IMG_3837.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-12",
    "name": "День рождения · розовые цифры «63»",
    "photo": "IMG_3902.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-13",
    "name": "День рождения · большой шар «Happy Birthday, my love»",
    "photo": "IMG_4261.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-14",
    "name": "День рождения · сердце «I love you» и чёрные шары",
    "photo": "IMG_4610.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-15",
    "name": "День рождения · Три кота, шар «Никуше 5!»",
    "photo": "IMG_4767.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-16",
    "name": "День рождения · шар «Happy birthday» и розовый бант",
    "photo": "IMG_5588.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-17",
    "name": "День рождения · золотые цифры «10»",
    "photo": "IMG_5705.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-18",
    "name": "День рождения · Синий трактор и цифра «2»",
    "photo": "IMG_6258.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": true,
    "available": "под заказ"
  },
  {
    "code": "Д-19",
    "name": "День рождения · белые сердца «Happy Birthday»",
    "photo": "IMG_7315.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-20",
    "name": "День рождения · серебряные сердца «Happy Birthday»",
    "photo": "IMG_7322.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-21",
    "name": "День рождения · сердце с тёплой шуточной надписью",
    "photo": "IMG_7567.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-22",
    "name": "День рождения · Тачки, Молния Маккуин",
    "photo": "IMG_7643.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-23",
    "name": "День рождения · сиреневая цифра «7» с бантами",
    "photo": "IMG_7656.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "Д-24",
    "name": "День рождения · звезда «6 лет» с фотоколлажем",
    "photo": "IMG_7820.jpg",
    "category": "день рождения",
    "icon": "🎂",
    "top": true,
    "available": "под заказ"
  },
  {
    "code": "П-01",
    "name": "Праздник · бежево-красная композиция у входа",
    "photo": "IMG_0321.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-02",
    "name": "Праздник · сердце «Мир начинается с тебя, мама»",
    "photo": "IMG_0499.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-03",
    "name": "Новый год · витрина с «Три кота»",
    "photo": "IMG_1457.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-04",
    "name": "Праздник · домашнее оформление с сердцами",
    "photo": "IMG_2303.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-05",
    "name": "Праздник · пудрово-розовые сердца под потолком",
    "photo": "IMG_2462.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-06",
    "name": "Праздник · чёрно-белое оформление звёздами",
    "photo": "IMG_2874.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-07",
    "name": "14 февраля · красные сердца в интерьере",
    "photo": "IMG_3196.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-08",
    "name": "Праздник · бело-голубая гелиевая связка",
    "photo": "IMG_3365.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-09",
    "name": "14 февраля · сердца «Happy Valentine's Day»",
    "photo": "IMG_3397.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-10",
    "name": "14 февраля · красные сердца на окне",
    "photo": "IMG_3404.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-11",
    "name": "14 февраля · красные сердца-гелий",
    "photo": "IMG_3410.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-12",
    "name": "Праздник · большой чёрный бант",
    "photo": "IMG_3470.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-13",
    "name": "Праздник · красный бант и сердце",
    "photo": "IMG_3488.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-14",
    "name": "Встреча · сердце «С приездом домой»",
    "photo": "IMG_3602.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-15",
    "name": "Вечеринка · розовая звезда с наклейками",
    "photo": "IMG_4690.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-16",
    "name": "Праздник · бежевые фольгированные сердца",
    "photo": "IMG_5673.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-17",
    "name": "Праздник · связка розовых бантов",
    "photo": "IMG_5680.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-18",
    "name": "Праздник · розовые банты и сердца",
    "photo": "IMG_5685.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-19",
    "name": "Праздник · серебряная луна и сердце",
    "photo": "IMG_5941.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-20",
    "name": "Праздник · розово-белая гелиевая связка",
    "photo": "IMG_5974.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-21",
    "name": "Праздник · фольгированное облачко",
    "photo": "IMG_6137.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-22",
    "name": "Праздник · сине-серебряная связка",
    "photo": "IMG_6300.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-23",
    "name": "Праздник · нежная розово-белая связка",
    "photo": "IMG_6766.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-24",
    "name": "1 сентября · набор с тетрадью",
    "photo": "IMG_7254.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-25",
    "name": "1 сентября · шар «Я иду в школу!»",
    "photo": "IMG_7266.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-26",
    "name": "1 сентября · карандаш и тетрадь",
    "photo": "IMG_7336.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-27",
    "name": "Выпускной · фотозона «До свидания, детский сад»",
    "photo": "IMG_7345.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-28",
    "name": "Праздник · розово-кремовая связка",
    "photo": "IMG_7369.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-29",
    "name": "Праздник · пастельные фольгированные сердца",
    "photo": "IMG_7424.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-30",
    "name": "Праздник · набор «Всё только начинается!»",
    "photo": "IMG_7580.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-31",
    "name": "Праздник · голубой набор с мишкой",
    "photo": "IMG_7668.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-32",
    "name": "Праздник · большой красный бант",
    "photo": "IMG_7845.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-33",
    "name": "Праздник · набор «Сынок, ты наш космос!»",
    "photo": "IMG_7921.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": false,
    "available": "под заказ"
  },
  {
    "code": "П-34",
    "name": "1 сентября · бордово-золотой набор «С Днём знаний»",
    "photo": "IMG_0931.jpg",
    "category": "прочее",
    "icon": "✨",
    "top": true,
    "available": "под заказ"
  }
];

if (typeof module !== 'undefined') { module.exports = catalog; }
