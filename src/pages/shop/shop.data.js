const SHOP_DATA = [
  {
    id: 1,
    title: "کلاه",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "کلاه شاپو قهوه‌ای",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25
      },
      {
        id: 2,
        name: "منگوله آلبی",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18
      },
      {
        id: 3,
        name: "کابوی قهوه‌ای",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35
      },
      {
        id: 4,
        name: "لبه‌دار خاکستری",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25
      },
      {
        id: 5,
        name: "منگوله‌دار سبز",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18
      },
      {
        id: 6,
        name: "نخل",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14
      },
      {
        id: 7,
        name: "قرمز",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: "گرگ نشان",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14
      },
      {
        id: 9,
        name: "آبی",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: "کتونی",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "آدیداس",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220
      },
      {
        id: 11,
        name: "آدیداس",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280
      },
      {
        id: 12,
        name: "کانورس",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110
      },
      {
        id: 13,
        name: "نایکی ایرفورس",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160
      },
      {
        id: 14,
        name: "نایکی قرمز",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160
      },
      {
        id: 15,
        name: "نایکی قهوه‌ای",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160
      },
      {
        id: 16,
        name: "جوردن لیمیتد",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190
      },
      {
        id: 17,
        name: "تیمبرلند",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: "کت",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "کت جین شرلینگ",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125
      },
      {
        id: 19,
        name: "کت جین آبی",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 20,
        name: "کت جین خاکستری",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 21,
        name: "کت شرلینگ قهوه‌ای",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165
      },
      {
        id: 22,
        name: "تان ترنچ",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: "زنانه",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "تاپ آبی",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        name: "بلوز گلدار",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        name: "لباس گلدار",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        name: "خال‌خالی قرمز",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        name: "پلیور راه‌راه",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        name: "کت‌های زرد",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        name: "بلوز سفید",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: "مردانه",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "جلیقه",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        name: "تیشرت گل‌گلی",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        name: "آستین بلند سیاه و سفید",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        name: "تیشرت صورتی",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        name: "آستین بلند جین",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        name: "تیشرت برگوندی",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
