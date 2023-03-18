import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react'
import React from "react";
import TagImage from "../assets/images/tagImg.png"
import CardImage1 from "../assets/images/img5.jpg"
import CardImage2 from "../assets/images/img2.jpg"
import CardImage3 from "../assets/images/img3.jpg"
import CardImage4 from "../assets/images/img4.jpg"
import { useColors } from "../App";
import { useActiveNav } from '../util/useActiveNav'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import {  Navigation, Autoplay } from "swiper";
import './Swiper.css'
const Education = () => {
  const educationRef = useActiveNav('Education')

  return (
    <Box ref={educationRef} id='educationContainer' w='100%' h='100%' mt='30px'>
      <Flex justifyContent="center" alignItems="center" pt="30px" w='100%'>
        <Heading fontSize={{ base: '35px', md: '60px', lg: '80px' }} color='#111210'>Did <span style={{ color: useColors.appYellow }}>you </span> know</Heading>
        <Image borderRadius='md' src={TagImage} alt='TagImage' fontSize={{ base: '5%', md: '50%', lg: '100%' }} />
      </Flex>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide className='Card-Swiper'>
          <Box>
            <Text fontSize={{ base: '15px', md: '18px' }} textAlign='initial'>Waste reduction, recycling and reuse are important waste management strategies that eases the burden on landfills,
              conserves natural resources and saves energy. This helps utilize resources more efficiently and sustainably.
              Waste reduction, recycling and reuse are important waste management strategies more efficiently and sustainably.
            </Text>
            <Image borderRadius='md' src={CardImage1} alt='CardImage' w='100%' h='400px' mt='20px' objectFit='cover' />
          </Box>
        </SwiperSlide>
        <SwiperSlide className='Card-Swiper'>
          <Box>
            <Text fontSize={{ base: '15px', md: '18px' }} textAlign='initial'>Waste reduction, recycling and reuse are important waste management strategies that eases the burden on landfills,
              conserves natural resources and saves energy. This helps utilize resources more efficiently and sustainably.
              Waste reduction, recycling and reuse are important waste management strategies more efficiently and sustainably.
            </Text>
            <Image borderRadius='md' src={CardImage2} alt='CardImage' w='100%' h='400px' objectFit='cover' mt='20px' />
          </Box>
        </SwiperSlide>
        <SwiperSlide className='Card-Swiper'>
          <Box>
            <Text fontSize={{ base: '15px', md: '18px' }} textAlign='initial'>Waste reduction, recycling and reuse are important waste management strategies that eases the burden on landfills,
              conserves natural resources and saves energy. This helps utilize resources more efficiently and sustainably.
              Waste reduction, recycling and reuse are important waste management strategies more efficiently and sustainably.
            </Text>
            <Image borderRadius='md' src={CardImage3} alt='CardImage' w='100%' h='400px' objectFit='cover' mt='20px' />
          </Box>
        </SwiperSlide>
        <SwiperSlide className='Card-Swiper'>
          <Box>
            <Text fontSize={{ base: '15px', md: '18px' }} textAlign='initial'>Waste reduction, recycling and reuse are important waste management strategies that eases the burden on landfills,
              conserves natural resources and saves energy. This helps utilize resources more efficiently and sustainably.
              Waste reduction, recycling and reuse are important waste management strategies more efficiently and sustainably.
            </Text>
            <Image borderRadius='md' src={CardImage4} alt='CardImage' w='100%' h='400px' objectFit='cover' mt='20px' />
          </Box>
        </SwiperSlide>


      </Swiper>
    </Box>
  )
}

export default Education
