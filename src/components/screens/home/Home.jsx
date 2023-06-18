import styles from './home.module.css'
import Logo from "../../logo/Logo.jsx";
import Knopki from "../../logo/Knopki.jsx";
import BigDiv from "../../logo/BigDiv.jsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


function Home() {
    const {data, isLoading} = useQuery(['fillings'],
        () => axios.get("http://25.13.70.211:8080/fillings/main"),)

    if(isLoading) return <p>Loading</p>

    return (
        <div>
            <div id={styles.home}>
                <Logo>
                </Logo>
                <Knopki>
                </Knopki>
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
                    {(data.data).map(nachin => (
                        <div key={nachin.id} className={styles.blockNach}>
                            <div className={styles.nachimg1}>
                                <img src={nachin.url} id={styles.nachimg1}/>
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
            </div>
      <BigDiv>
      </BigDiv>
      </div>
    )
}

export default Home
