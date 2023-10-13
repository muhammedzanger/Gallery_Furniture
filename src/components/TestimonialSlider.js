/** @format */

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation, Autoplay } from "swiper"
import { testimonial } from "../data"
const TestimonialSlider = () => {
  return (
    <Swiper
      className='testimonialSlider'
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}>
      {testimonial.persons.map((person, index) => {
        const { avatar, message, name, occupation } = person
        return (
          <SwiperSlide key={index}>
            <div key={index} className='flex flex-col min-h-[250px]'>
              <div className='flex gap-x-5 mb-9 items-center'>
                <img src={avatar.type} alt='' />
                <div>
                  <div className='text-xl font-semibold'>{name}</div>
                  <div className='text-gray-500'>{occupation}</div>
                </div>
              </div>
              <div className='text-xl max-w-[570px]'>{message}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
