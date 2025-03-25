import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Loading from "./Loading";
import Error from "../pages/Error";
// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Collection = ({ title, query }) => {
  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loading />;

  if (error.show) return <Error msg={error.msg} />;

  return (
    <div className="my-10 md:my-16">
      <h2 className="ml-4 lg:ml-16 mb-9">{title}</h2>
      <Swiper
        modules={[Navigation]}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.items.map((item) => {
          return (
            <SwiperSlide key={item.kinopoiskId}
            className="effect hover:scale-95">
              <Link to={`/watch/${item.kinopoiskId}`}>
                <img
                  src={item.posterUrl}
                  className="w-full h-full"
                  alt="poster"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Collection;
