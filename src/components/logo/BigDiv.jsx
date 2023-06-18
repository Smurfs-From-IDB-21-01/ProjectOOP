import styles from "../screens/home/home.module.css";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

function BigDiv(){
return <div id={styles.footer}>
    <div id = {styles.line}>

    </div>
    <div id = {styles.kontakt}>
        Контакты
    </div>
    <YMaps>
        <Map width={1366} height={450}
             id={styles.maps}
             defaultState={{center: [55.790023, 37.595546], zoom: 15}}>
            <Placemark defaultGeometry={[55.790023, 37.595546]}/>
        </Map>
    </YMaps>
    <div id={styles.end}>
        <div id={styles.mail}>
            <a id={styles.mail1} href="mailto:baldanova_sarana@mail.ru">baldanova_sarana@mail.ru</a>
        </div>
        <img src='/logo.svg' alt='' id={styles.logoEnd}/>
        <div id={styles.nomer}>
          <a id={styles.nomer1} href="tel:+79503826874">+7(950)382-68-74</a>
        </div>

    </div>
    </div>
}

export default BigDiv