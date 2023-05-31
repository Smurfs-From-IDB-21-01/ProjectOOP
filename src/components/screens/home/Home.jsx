import styles from './home.module.css'
import {nach} from "./nach.data.js";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';


function Home() {
    return (
        <div>
            <div className={styles.up}>
                <h1 className={styles.name}>
                    UCAKE
                </h1>
            </div>
            <div className={styles.main}>
                <p className={styles.textMain} id={styles.torts}>Торты</p>
                <p className={styles.textMain} id={styles.nachinki}>Начинки</p>
                <img src='/logo.svg' alt='' className={styles.logo}/>
                <p className={styles.textMain} id={styles.dostavka}>Доставка</p>
                <p className={styles.textMain} id={styles.garantii}>Гарантии</p>
            </div>
            <div id={styles.allCard}>
                <div id={styles.firstCard}>
                <span id={styles.text1}>
                    Свадебные торты
                </span>
                    <span id={styles.button1}>
                    <span id={styles.buttonText1}>
                        Перейти
                    </span>
                </span>
                    <img src='/1.png' id={styles.img1}/>
                </div>
                <div id={styles.secondCard}>
                <span id={styles.text2}>
                    Авторские торты
                </span>
                    <span id={styles.button2}>
                    <span id={styles.buttonText2}>
                        Перейти
                    </span>
                </span>
                    <img src='/2.png' id={styles.img2}/>
                </div>
                <div id={styles.thirdCard}>
                <span id={styles.text3}>
                    На день рождения
                </span>
                    <span id={styles.button3}>
                    <span id={styles.buttonText3}>
                        Перейти
                    </span>
                </span>
                    <img src='/3.png' id={styles.img3}/>
                </div>
                <div id={styles.fourthCard}>
                <span id={styles.text4}>
                    Мини торты
                </span>
                    <span id={styles.button4}>
                    <span id={styles.buttonText4}>
                        Перейти
                    </span>
                </span>
                    <img src='/4.png' id={styles.img4}/>
                </div>
            </div>
            <span id={styles.nameNach}>
                    Наши начинки
                </span>
            <div id={styles.mainNach}>
                {nach.map(nachin => (
                    <div key={nachin.id} className={styles.blockNach}>
                        <div className={styles.nachimg1}>
                            <img src={nachin.img} id={styles.nachimg1}/>
                        </div>
                        <div className={styles.nachTxt1}>
                            <span className={styles.nachTxt}>
                                {nachin.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div id={styles.buttonKatalog}>
            <span id={styles.buttonKatalogTxt}>
                Посмотреть каталог
            </span>
            </div>
            <div id={styles.line}>
            </div>
            <div id={styles.kontakt}>
                Контакты
            </div>
            <YMaps>
                <Map width={1366} height={450}
                     id={styles.maps} defaultState={{center: [55.790023, 37.595546], zoom: 15}}>
                    <Placemark defaultGeometry={[55.790023, 37.595546]}/>
                </Map>
            </YMaps>
            <div id={styles.end}>
                <div id={styles.mail}>
                    baldanova_sarana@mail.ru
                </div>
                <div id={styles.nomer}>
                    +7(950)382-68-74
                </div>
                <img src='/logo.svg' alt='' className={styles.logoEnd}/>
            </div>
        </div>
    )
}

export default Home
