import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay } from 'swiper/modules'

import 'swiper/css'

import { Box, CardMedia } from '@mui/material'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

    
const Slider = () => {
    const images: String[] = [
        "https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/6238107/pexels-photo-6238107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6238107/pexels-photo-6238107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]
    return (
        <>
            <Box mt={0}>
                <Swiper
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        900: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper: any) => console.log(swiper)}
                >
                    {images.map((im) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <Box
                                        sx={{ maxWidth: "450px", height: "300px" }}
                                    >
                                        <CardMedia
                                            width={'100%'}
                                            height={"100%"}
                                            sx={{ objectFit: "cover" }}
                                            component={'img'}
                                            src={im.toString()}
                                        />
                                    </Box>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </Box>
        </>
    )
}

export default Slider