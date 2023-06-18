import styles from "../screens/home/home.module.css";
import {Link} from 'react-router-dom'

function Knopki() {
   return <div className={styles.main}>
        <p className={styles.textMain} id={styles.torts}>Торты</p>
        <Link className={styles.textMain} id={styles.nachinki} to ='/nachinki'>Начинки</Link>
        <Link alt='' className={styles.logo} to={"/"}/>
        <Link className={styles.textMain} id={styles.dostavka} to ='/dostavka'>Доставка</Link>
        <Link className={styles.textMain} id={styles.garantii} to ='/garantii'>Гарантии</Link>

    </div>
}

export default Knopki