import styles from './style.module.scss';
import {FaBars, FaSearch, FaUser} from 'react-icons/fa'


export const Header: React.FC = () =>{
    
  return(
    <>
          <header>
              <FaBars className={styles.search}/>

              <a href='/' className={styles.logo}><span>T</span>ravel</a>

              <nav className={styles.navbar}>
                  <a href="#home">home</a>
                  <a href="#book">book</a>
                  <a href="#packages">packages</a>
                  <a href="#services">services</a>
                  <a href="#gallery">gallery</a>
                  <a href="#review">review</a>
                  <a href="#contact">contact</a>
              </nav>

              <div className={styles.icons}>
                <FaSearch/>
                  <FaUser />
              </div>

              <form action="" className={styles.search_bar_container}>
                  <input type="search" id={styles.search_bar} placeholder="search here..."/>
                  <FaSearch />
              </form>

          </header>
    </>
  )


};