import {popularPrice} from "../slider-popular/popular-slider";
import giLaserStudio1 from "../more-neon/работы по неону/Gi лазер студио размер гладкость 1000х1500мм 20,000тр/20230601_211853.jpg"
import giLaserStudio2 from "../more-neon/работы по неону/Gi лазер студио размер гладкость 1000х1500мм 20,000тр/IMG-20230611-WA0011.jpg"
import coffee1 from "../more-neon/работы по неону/Кофе 1480х420   14500р/IMG-20240311-WA0003.jpg"
import coffee2 from "../more-neon/работы по неону/Кофе 1480х420   14500р/IMG-20240311-WA0005.jpg"
import planet1 from "../more-neon/работы по неону/Планета 400х200 2000р/20240221_195227.jpg"
import planet2 from "../more-neon/работы по неону/Планета 400х200 2000р/20240221_195258.jpg"
import remCoffee1 from "../more-neon/работы по неону/Ремонт кофе, с установкой диммера  500х500мм  5000р/после/20240310_020723.jpg"
import remCoffee2 from "../more-neon/работы по неону/Ремонт кофе, с установкой диммера  500х500мм  5000р/после/20240310_003012.jpg"
import colovorot1 from "../more-neon/работы по неону/коловорот 400х400мм   5800тр/коловорот 400х400мм   5800тр.jpg"
import colovorot2 from "../more-neon/работы по неону/коловорот 400х400мм   5800тр/20231106_224430.jpg"
import sneakers1 from "../more-neon/работы по неону/магазин кроссовок 570х480мм  7300тр/20230918_012016.jpg"
import sneakers2 from "../more-neon/работы по неону/магазин кроссовок 570х480мм  7300тр/20230918_012021.jpg"
import kikimora1 from "../more-neon/работы по неону/мастерская кикимора 1300х900 23800р/20240206_000846.jpg"
import kikimora2 from "../more-neon/работы по неону/мастерская кикимора 1300х900 23800р/20240206_001046.jpg"
import beer1 from "../more-neon/работы по неону/пиво 200х400мм  4300тр/20231106_224847.jpg"
import beer2 from "../more-neon/работы по неону/пиво 200х400мм  4300тр/20231106_224125.jpg"
import shawerma1 from "../more-neon/работы по неону/шаверма на углях 700х300, пекарня 700х150 общая цена 15000/20231230_135242.jpg"
import shawerma2 from "../more-neon/работы по неону/шаверма на углях 700х300, пекарня 700х150 общая цена 15000/20231230_185422.jpg"
import pekarnya1 from "../more-neon/работы по неону/шаверма на углях 700х300, пекарня 700х150 общая цена 15000/20231230_135246.jpg"
import pekarnya2 from "../more-neon/работы по неону/шаверма на углях 700х300, пекарня 700х150 общая цена 15000/20231230_185426.jpg"

console.log(popularPrice);

export let more_price_neon = [
    {
        id : 12350,
        image: giLaserStudio1,
        image2: giLaserStudio2,
        title: "Gi лазер студио",
        discription: "прозрачное оргстекло 5 мм",
        size: "1000х1500",
        price: "20000р",
      },
    {
        id : 12351,
        image: coffee1,
        image2: coffee2,
        title: "Кофе",
        discription: "прозрачное оргстекло 5 мм",
        size: "1480х420",
        price: "14500р",
      },
      {
        id : 12352,
        image: planet1,
        image2: planet2,
        title: "Планета",
        discription: "прозрачное оргстекло 5 мм",
        size: "400х200",
        price: "2000р",
      },
      {
        id : 12353,
        image: remCoffee1,
        image2: remCoffee2,
        title: "Coffee",
        discription: "прозрачное оргстекло 5 мм",
        size: "500х500",
        price: "5000р",
      },
      {
        id : 12354,
        image: colovorot1,
        image2: colovorot2,
        title: "Коловорот",
        discription: "прозрачное оргстекло 5 мм",
        size: "400х400",
        price: "5800р",
      },
      {
        id : 12355,
        image: kikimora1,
        image2: kikimora2,
        title: "Кикимора",
        discription: "прозрачное оргстекло 5 мм",
        size: "1300х900",
        price: "23800р",
      },
      {
        id : 12356,
        image: sneakers1,
        image2: sneakers2,
        title: "Кроссовки",
        discription: "прозрачное оргстекло 5 мм",
        size: "570х480",
        price: "7300р",
      },
      {
        id : 12357,
        image: beer1,
        image2: beer2,
        title: "Пиво",
        discription: "прозрачное оргстекло 5 мм",
        size: "200х400",
        price: "4300р",
      },
      {
        id : 12358,
        image: shawerma1,
        image2: shawerma2,
        title: "Шаверма",
        discription: "прозрачное оргстекло 5 мм",
        size: "700х300",
        price: "8500р",
      },
      {
        id : 12359,
        image: pekarnya1,
        image2: pekarnya2,
        title: "Пекарня",
        discription: "прозрачное оргстекло 5 мм",
        size: "700х150",
        price: "6500р",
      },
]

// Объединение массивов
export let combinedArray = more_price_neon.concat(popularPrice);

// Вывод объединенного массива в консоль
