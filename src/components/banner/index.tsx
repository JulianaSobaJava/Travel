import styles from './style.module.scss';



export const Banner: React.FC = () => {

    return (

        <section className={styles.home} id='home'>

            <div className={styles.content}>
                <h3>adventure is worthwhile</h3>
                <p>dicover new places with us, adventure awaits</p>
                <a href="/" className="btn">discover more</a>
            </div>

            <div className={styles.controls}>
                <span className={`${styles.vid_btn} ${styles.active}`} data-src="/images/vid-1.mp4"></span>
                <span className={styles.vid_btn} data-src="/images/vid-2.mp4"></span>
                <span className={styles.vid_btn} data-src="/images/vid-3.mp4"></span>
                <span className={styles.vid_btn} data-src="/images/vid-4.mp4"></span>
                <span className={styles.vid_btn} data-src="/images/vid-5.mp4"></span>
            </div>

            <div className={styles.video_container_background}>
                <video src="images/vid-1.mp4" className={styles.video_slider} loop autoPlay muted></video>
            </div>

        </section>
    )
}