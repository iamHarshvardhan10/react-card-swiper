import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Pagination,Autoplay , Navigation , Scrollbar } from 'swiper/modules'
import { useEffect, useState } from 'react'

const SwiperCard = () => {
    const [data , setData] = useState(null)
console.log(data)
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
            const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
            const data = await res.json()
            if(res.ok){
                setData(data.photos)
            }
                
            } catch (error) {
                console.log(error)
            }
        }

        fetchPhoto()
    },[])
    return (
        <Swiper
        modules={[Pagination,Autoplay, Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
        autoplay={{delay : 1000 , disableOnInteraction: false}}
        onSlideChange={() => console.log("slides")}
        onSwiper={(swiper) => console.log(swiper)}
        >
           {
            data && data.map((photo) => (
                <SwiperSlide key={photo.id}>
                    <img src={photo.url} alt={photo.title}/>
                </SwiperSlide>
            ))
           }
        </Swiper>
    )
}

export default SwiperCard;