
import styles from './style.module.scss';
import { Heading } from '../heading';


export const Gallery: React.FC = () => {

return(
    <section id="gallery">

        <Heading heading='Gallery' />

  

        <div className={styles.box_container}>

            <div className={styles.box}>
                <img src="images/g-1.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-2.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-3.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-4.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-5.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-6.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-7.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-8.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>
            <div className={styles.box}>
                <img src="images/g-9.jpg" alt="" />
                    <div className={styles.content}>
                        <h3>amazing places</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <button className={`${styles.btn} btn`}>see more</button>
                    </div>
            </div>

        </div>

    </section>
)
}