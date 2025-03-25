import { Link } from 'react-router-dom';
import { collections } from '../data/data';
import useFetch from '../utils/useFetch';
import Error from './Error';
import Loading from '../components/Loading';
import Collection from '../components/Collection';
// swiper library 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';
import { EffectFlip } from 'swiper/modules';
import 'swiper/css/effect-flip';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  const { data, isLoading, error } = useFetch('/premieres?year=2025&month=JANUARY');

  if (isLoading) return <Loading />

  if (error.show) return <Error msg={error.msg} />
  
  return (
    <div className='mt-4'>
      {/* ПРЕМЬЕРЫ */}
      <Swiper
        modules={[Navigation, EffectFlip,Autoplay]}
        autoplay={{
          delay: 3500, 
          disableOnInteraction: false,
        }}
        navigation
        effect='flip'
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {data.items.map((item)=> {
          return <SwiperSlide key={item.kinopoiskId} className='bg-zinc-950
          w-4/5'>
           <div className='w-full flex flex-col justify-center items-center gap-2 lg:gap-10 md:flex-row
           group cursor-pointer'>
          
            <Link to={`/watch/${item.kinopoiskId}`}>
            <img src={item.posterUrl}  className='h-[50vh] md:h-[40vh] xl:h-[60vh]
            transition-all duration-500 group-hover:scale-90' alt="poster" />
           </Link>
          
            <div className='md:w-2/3 font-semibold flex flex-col text-center xl:text-start items-center lg:gap-4'>
            <h1 className='bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text 
            text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold'>
              {item.nameRu}
              </h1>
            <p className='text-yellow-200 text-base lg:text-xl'>год: {item.year}</p>
            <Link to={`/watch/${item.kinopoiskId}`}
             className='hidden md:block rounded-md bg-yellow-500 py-2 px-5 hover:opacity-80 
             hover:translate-y-3 transition-all duration-500'>
              Смотреть
              </Link>
           </div>
          
           </div>
            </SwiperSlide>
        })}      
      </Swiper>
         {/* ПОДБОРКИ */}
         <h1 className='text-center my-16 text-slate-300'>Подборки для вас</h1>
         {collections.all.map((collection)=> {
          return <Collection key={collection.title} {...collection} />
         })}
    </div>
  );
}

export default Home;
