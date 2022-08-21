import styles from './style.module.scss';
import { Heading } from '../heading';


export const Contact: React.FC = () => {

    return (

        <section id="contact">

            <Heading heading="Contact" />

            <div className={styles.row}>

                <div className={styles.image}>
                    <img src="images/contact-img.svg" alt="" />
                </div>

                <form>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="name"/>
                            <input type="email" placeholder="email"/>
                            </div>
                            <div className={styles.inputBox}>
                                <input type="number" placeholder="number"/>
                                    <input type="text" placeholder="subject"/>
                                    </div>
                                    <textarea placeholder="message" cols={30} rows={10}></textarea>
                                    <input type="submit" className="btn" value="send message"/>
                                    </form>

                            </div>

                        </section>
                )}
