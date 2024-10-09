import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ProfileCard from "../component/ProfileCard";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles

function Profile() {
  return (
    <>
      <Header />
      <div className="flex flex-col text-center bg-slate-50 p-[40px]">
        <h1 className="capitalize text-2xl sm:text-4xl font-bold">
          what our lovely clients are saying about us
        </h1>
        
        {/* For large screens, display the profile cards normally */}
        <div className="hidden sm:flex flex-wrap items-center justify-center">
          <ProfileCard
            name="Yuni Metronom "
            designation="CEO of KripikGedang "
          />
          <ProfileCard
            name="Masud Copi "
            designation="CEO of SistaMania "
          />
          <ProfileCard
            name="Anas Binasrul "
            designation="CEO of AnasStory "
          />
        </div>

        {/* For small screens, use the Swiper slider */}
        <div className="block sm:hidden justify-center items-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
          >
            <SwiperSlide>
              <ProfileCard
                name="Yuni Metronom "
                designation="CEO of KripikGedang "
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProfileCard
                name="Masud Copi "
                designation="CEO of SistaMania "
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProfileCard
                name="Anas Binasrul "
                designation="CEO of AnasStory "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
