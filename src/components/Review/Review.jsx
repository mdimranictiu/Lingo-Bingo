import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";

const Review = () => {
  const [review, setreview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setreview(data);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <section className="py-5">
        <h2  className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-green-500 mb-6">
                    What Learner say about us
                </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((rev) => (
          <SwiperSlide key={rev._id}>
            <>
            <div className="w-4/5 flex flex-col items-center gap-10 mx-auto h-[320px] ">
             <div className="flex flex-col items-center">
               <div className="pt-20">
               <ReactStars 
    count={5}
    size={42}
    value={rev.rating}
    isHalf={true}
    edit={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#c5600e"
  />
               </div>
             </div>
             <h4 className="text-center">
                {rev.details}
             </h4>
             <h1 className="text-2xl">{rev.name}</h1>
            
            </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
