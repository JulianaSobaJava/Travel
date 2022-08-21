import styles from './style.module.scss';


export const Footer: React.FC = () => {
    return (
        <footer>

            <div className={styles.box_container}>

                <div className={styles.box}>
                    <h3>about us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
                </div>
                <div className={styles.box}>
                    <h3>branch locations</h3>
                    <a href="/">india</a>
                    <a href="/">USA</a>
                    <a href="/">japan</a>
                    <a href="/">france</a>
                </div>
                <div className={styles.box}>
                    <h3>quick links</h3>
                    <a href="#home">home</a>
                    <a href="#book">book</a>
                    <a href="#packages">packages</a>
                    <a href="#services">services</a>
                    <a href="#gallery">gallery</a>
                </div>

            </div>

            <h1 className={styles.credit}> created by <span> mr. web designer </span> | all rights reserved! </h1>

        </footer>
    )
}