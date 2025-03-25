// значки
import { SlSocialInstagram } from "react-icons/sl"; // инстаграм
import { FaFacebookF } from "react-icons/fa"; // фэйсбук
import { FaTelegramPlane } from "react-icons/fa"; // телеграмм

export const menus = [
  {
    title: "Фильмы",
    path: "/movies",
    submenus: [
      {
        title: "Триллеры",
        value: "genres=01",
      },
      {
        title: "Драмы",
        value: "genres=02",
      },
      {
        title: "Мелодрамы",
        value: "genres=04",
      },
      {
        title: "Криминал",
        value: "genres=03",
      },
      {
        title: "Детективы",
        value: "genres=05",
      },
      {
        title: "Фантастика",
        value: "genres=06",
      },
      {
        title: "Приключения",
        value: "genres=07",
      },
      {
        title: "Фэнтези",
        value: "genres=12",
      },
      {
        title: "Боевики",
        value: "genres=11",
      },
      {
        title: "Комедии",
        value: "genres=13",
      },
      {
        title: "Ужасы",
        value: "genres=17",
      },
      {
        title: "Семейные",
        value: "genres=19",
      },
      {
        title: "Американские",
        value: "countries=01",
      },
      {
        title: "Российские",
        value: "countries=34",
      },
      {
        title: "Советские",
        value: "countries=33",
      },
    ],
  },
  {
    title: "Сериалы",
    path: "/series",
    submenus: [
      {
        title: "Триллеры",
        value: "genres=01",
      },
      {
        title: "Драмы",
        value: "genres=02",
      },
      {
        title: "Мелодрамы",
        value: "genres=04",
      },
      {
        title: "Криминал",
        value: "genres=03",
      },
      {
        title: "Детективы",
        value: "genres=05",
      },
      {
        title: "Фантастика",
        value: "genres=06",
      },
      {
        title: "Приключения",
        value: "genres=07",
      },
      {
        title: "Фэнтези",
        value: "genres=12",
      },
      {
        title: "Комедии",
        value: "genres=13",
      },
      {
        title: "Ужасы",
        value: "genres=17",
      },
      {
        title: "Американские",
        value: "countries=01",
      },
      {
        title: "Российские",
        value: "countries=34",
      },
      {
        title: "Турецкие",
        value: "countries=44",
      },
      {
        title: "Корейские",
        value: "countries=49",
      },
    ],
  },
];

export const collections = {
  all: [
    {
      title: "Популярное",
      query: "/collections?type=TOP_POPULAR_ALL&page=1",
    },
    {
      title: "Для всей семьи",
      query: "/collections?type=FAMILY&page=1",
    },
    {
      title: "Победители Оскар",
      query: "/collections?type=OSKAR_WINNERS_2021&page=1",
    },
    {
      title: "Про зомби",
      query: "/collections?type=ZOMBIE_THEME&page=1",
    },
    {
      title: "Про катастрофы",
      query: "/collections?type=CATASTROPHE_THEME&page=1",
    },
  ],
  series: [
    {
      title: "Популярные",
      query: "/collections?type=POPULAR_SERIES&page=1",
    },
    {
      title: "Корейские",
      query:
        "?countries=49&order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2020&yearTo=3000&page=1",
    },
    {
      title: "Турецкие",
      query:
        "?countries=44&order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2020&yearTo=3000&page=1",
    },
    {
      title: "Русские",
      query:
        "?countries=34&order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2020&yearTo=3000&page=1",
    },
    {
      title: "2024",
      query:
        "?order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2024&yearTo=3000&page=1",
    },
  ],
  movies: [
    {
      title: "Популярные",
      query: "/collections?type=TOP_POPULAR_MOVIES&page=1",
    },
    {
      title: "2024",
      query:
        "?order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2024&yearTo=3000&page=1",
    },
    {
      title: "Для всей семьи",
      query:
        "?genres=19&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2020&yearTo=3000&page=1",
    },
    {
      title: "Ужасы",
      query:
        "?genres=17&order=RATING&type=FILM&ratingTo=10&yearFrom=2020&yearTo=3000&page=1",
    },
    {
      title: "Фантастика",
      query:
        "?genres=06&order=RATING&type=FILM&ratingTo=10&yearFrom=2020&yearTo=3000&page=1",
    },
  ],
};

export const socials = [
  <SlSocialInstagram />,
  <FaFacebookF />,
  <FaTelegramPlane />,
];
