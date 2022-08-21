import styles from './style.module.scss';
import { Heading } from '../heading';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


export const Testimonial: React.FC = () => {

    return (
        <section id="review">

        <Heading heading="Testimonials"/>

            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                navigation
                effect={"slide"}
                speed={800}
                slidesPerView={3}
                autoplay={{ delay: 4000 }}
                loop
                className={styles.myswiper}
            >
                <SwiperSlide>
                        <div className={styles.box}>
                            <img src="images/pic1.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className={styles.box}>
                            <img src="images/pic2.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className={styles.box}>
                            <img src="images/pic4.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className={styles.box}>
                            <img src="images/pic3.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}