import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Heading } from '../heading';
import styles from './style.module.scss';


export const Packages: React.FC = () => {

    return (
        <section id="packages">
        <Heading heading='Packages'/>

            <div className={styles.box_container}>

                <div className={styles.box}>
                    <img src="images/p-1.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> mumbai </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src="images/p-4.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> paris </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>



                <div className={styles.box}>
                    <img src="images/p-6.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> eypt </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src="images/p-2.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> hawaii </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src="images/p-3.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> sydney </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src="images/p-4.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> paris </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar/>
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src="images/p-5.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> tokyo </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src="images/p-6.jpg" alt="" />
                    <div className={styles.content}>
                        <h3> <FaMapMarkerAlt /> eypt </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className={styles.price}> $90.00 <span>$120.00</span> </div>
                        <button className={`${styles.btn} btn`}>book now</button>
                    </div>
                </div>

            </div>

        </section>
    )
}