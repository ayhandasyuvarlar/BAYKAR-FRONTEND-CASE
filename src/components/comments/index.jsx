import { icon } from "../../constants";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

const Comments = () => {
  const swiperRef = useRef(null);
  const [step, setStep] = useState(false);
  const comments = [
    {
      userName: "David Oshodi",
      comment:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      department: "Manager",
      companyLogo: icon.logoThree,
      userPhoto: icon.userThree,
    },
    {
      userName: "Hellena John",
      comment:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      department: "Co-founder",
      companyLogo: icon.logoOne,
      userPhoto: icon.userTwo,
    },
    {
      userName: "Hellen Jummy",
      comment:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      department: "Team Lead",
      companyLogo: icon.logoTwo,
      userPhoto: icon.userOne,
    },
    {
      userName: "Hellena John",
      comment:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      department: "Co-founder",
      companyLogo: icon.logoOne,
      userPhoto: icon.userFour,
    },
    {
      userName: "Charolette Hanlin",
      comment:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      department: "Manager",
      companyLogo: icon.logoThree,
      userPhoto: icon.userThree,
    },
    {
      userName: "Ralph Edwards",
      comment:
        "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      department: "Product Designer",
      companyLogo: icon.logoFour,
      userPhoto: icon.userTwo,
    },
  ];
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    window.innerWidth <= 760 ? setStep(true) : setStep(false);
    if (!step) {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(3, 0);
      }
    } else {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(5, 0);
      }
    }
  }, []);
  return (
    <section className=" h-auto relative lg:h-[732px] w-full p-0  flex flex-col gap-10 mt-14 mb-20 lg:mt-0 ">
      <div className="flex flex-row justify-center">
        <h1 className="text-[32px] leading-[35.2px] font-bold lg:text-[56px] w-full text-center lg:text-start lg:w-9/12 lg:font-extrabold lg:leading-[61.6px]">
          Because they love us
        </h1>
        <div className="hidden lg:flex flex-row gap-4">
          <button onClick={goPrev}>
            <img src={icon.back} alt="" />
          </button>
          <button onClick={goNext}>
            <img src={icon.next} alt="" />
          </button>
        </div>
      </div>
      <div className="mx-auto  relative z-0 w-full lg:w-[93%] overflow-visible">
        <div className="slider-bg absolute z-10 w-full "></div>
        <Swiper
          slidesPerView={4}
          rewind={true}
          spaceBetween={40}
          ref={swiperRef}
          className="mySwiper overflow-hidden flex flex-row z-10 mt-10  lg:-left-8  w-[2000px] lg:w-[1460px]"
        >
          {comments &&
            comments.map((comment, key) => (
              <SwiperSlide
                key={key}
                className="comments-box flex flex-col justify-around rounded-2xl p-5  bg-white"
              >
                <div>
                  <img src={comment.companyLogo} alt="" />
                </div>
                <p className="text-base  leading-[22px] lg:text-2xl lg:leading-[38.4px] font-normal">
                  {comment.comment}
                </p>
                <div className="flex flex-row w-full justify-start items-center gap-2">
                  <img src={comment.userPhoto} alt={"userPhoto"} />
                  <div className="flex flex-col">
                    <p className=" text-lg leading-7 font-normal">
                      {comment.userName}
                    </p>
                    <p className=" text-base leading-6 font-normal text-gray-600">
                      {comment.department}{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;
