import { StaticImageData } from "next/image";
import img1 from "/public/assets/img/615142884f765694638137.png";
import img2 from "/public/assets/img/featured_websites2023-scaled.jpg";

export interface Lecture {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  buttonLabel: string;
  redirectTo: string;
}

export const lecturesData: Lecture[] = [
  {
    id: 1,
    title: "Конструирование Программного Обеспечения",
    image: img2,
    description:
      "В данном пособии представлено базовое описание процедур создания программного обеспечения с использованием методов верификации.",
    buttonLabel: "На главную",
    redirectTo: "/lectures/1",
  },
  {
    id: 2,
    title: "Жизненный цикл программного обеспечения. ",
    image: img1,
    description:
      "Жизненный цикл  – это модель создания и использования программной системы. Он отражает различные состояния программной системы, ",
    buttonLabel: "На главную",
    redirectTo: "/lectures/2",
  },
  // {
  //   id: 3,
  //   title: "Основные этапы разработки каскадной модели",
  //   image: img1,
  //   description:
  //     "Системный анализ задает роль каждого элемента в компьютерной системе и взаимодействие элементов друг с другом.",
  //   buttonLabel: "На главную",
  //   redirectTo: "/lectures/3",
  // },
];
