import "styles/global.style";

import {
  Awards,
  Caption,
  IntroAboutTextBlock,
  RunningLine,
  Slider,
} from "components";

import { PreTitleSlider } from "../components/ui/pre-title-slider";

const DEMO_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const slides = [
  {
    title: 'El corte ingles',
    poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "Archangel Studios",
    colourist: "Archangel Studios",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'Lil pump',
    poster: "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "JACK MCGINITY",
    colourist: "JACK MCGINITY",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'Balkan line',
    poster: "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "ANDRIC WATSON",
    colourist: "ANDRIC WATSON",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'Paranormal drive',
    poster: "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Find out more",
    colourist: "Find out more",
    video: {
      mp4: DEMO_VIDEO
    }
  },

  {
    title: 'Zolla',
    poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "vimeocdn",
    colourist: "vimeocdn",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'In the hood',
    poster: "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "El corte ingles",
    colourist: "El corte ingles",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'projects',
    poster: "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "Studios",
    colourist: "Studios",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'All categories',
    poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "Archangel",
    colourist: "Archangel",
    video: {
      mp4: DEMO_VIDEO
    }
  },
  {
    title: 'All genres',
    poster: "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Balkan line",
    colourist: "Balkan line",
    video: {
      mp4: DEMO_VIDEO
    }
  },

  {
    title: 'Select corourist',
    poster: "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "JACK MCGINITY",
    colourist: "JACK MCGINITY",
    video: {
      mp4: DEMO_VIDEO
    }
  },
]

const About = () => {
  const SeniorColourists = [
    {
      modalId: "/",
      startLabel: "Сraig Saunders",
      endLabel: "Senior colourist",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins00.jpg",
    },
    {
      modalId: "/",
      startLabel: "Ellen Kennedy",
      endLabel: "VFX-designer",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins1.jpg",
    },
    {
      modalId: "/",
      startLabel: "Miranda Bell",
      endLabel: "Creative director",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins2.jpg",
    },
  ];

  const Colourists = [
    {
      modalId: "/",
      startLabel: "Herman Payne",
      endLabel: "CEO-founder",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins3.jpg",
    },
    {
      modalId: "/",
      startLabel: "Jeff Washington",
      endLabel: "Sales manager",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins4.jpg",
    },
  ];

  const Assistants = [
    {
      modalId: "/",
      startLabel: "Milton Hogan",
      endLabel: "Account",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins8-800x422.jpg",
    },
    {
      modalId: "/",
      startLabel: "Dexter Swanson",
      endLabel: "Account",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins7.jpg",
    },
    {
      modalId: "/",
      startLabel: "Carla Garcia",
      endLabel: "Manager",
      img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins70-800x600.jpg",
    },
  ];

  return (
    <>
      {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С СЕТКОЙ И ИЗОБРАЖЕНИЯМИ (Андрей) */}
      <IntroAboutTextBlock mt="xlg" />
      <Awards
        options={SeniorColourists}
        subtitle="Senior colourists"
        title="We are bold"
        mt="xlg"
        mb="lg"
      />
      <Awards options={Colourists} subtitle="Colourists" mt="lg" />
      <Awards options={Assistants} subtitle="Assistants" mt="lg" />
      <PreTitleSlider mt="xlg" mb="md">
        Look at our selected works <br />
        to evaluate our capabilities and skills
      </PreTitleSlider>
      <Slider slides={slides} />
      <RunningLine mt="md" outline="true" />
    </>
  );
};

export default About;
