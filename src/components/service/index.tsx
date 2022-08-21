import styles from './style.module.scss';
import { Heading } from '../heading';
import { FaBullhorn, FaGlobeAsia, FaHiking, FaHotel, FaPlane, FaUtensils } from 'react-icons/fa';


export const Services: React.FC = () => {

    return ( 
        <section id="services">
            <Heading heading='Services' />

            <div className={styles.box_container}>

                <div className={styles.box}>
                    <FaHotel/>
                    <h3>affordable hotels</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className={styles.box}>
                    <FaUtensils/>
                    <h3>food and drinks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className={styles.box}>
                    <FaBullhorn/>
                    <i className="fas fa-bullhorn"></i>
                    <h3>safty guide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className={styles.box}>
                    <FaGlobeAsia/>
                    <h3>around the world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className={styles.box}>
                    <FaPlane/>
                    <h3>fastest travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className={styles.box}>
                    <FaHiking/>
                    <h3>adventures</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>

            </div>

        </section>
    )
}