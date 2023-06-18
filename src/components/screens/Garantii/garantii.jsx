import Logo from "../../logo/Logo.jsx";
import Knopki from "../../logo/Knopki.jsx";
import BigDiv from "../../logo/BigDiv.jsx";
import styles from '/src/components/screens/Garantii/garantii.module.css';

const Garantii = () => {
    return <div>
        <Logo>
        </Logo>
        <Knopki>
        </Knopki>
        <div id={styles.garantii}>
            <span id={styles.text1}>
                Гарантии
            </span>
            <span id={styles.text2}>
               Друзья, мы дорожим вниманием клиентов и всегда стараемся сделать незабываемый шедевр для вашего праздника! Огромный опыт работы
позволяет делать продукцию эксклюзивного качества с неповторимым дизайном:
            </span>
            <span id={styles.text3}>
             - Создаем торты для любых праздников и торжеств более 6 лет
            </span>
            <span id={styles.text4}>
             - Исполнили более 4500 заказов
            </span>
            <span id={styles.text5}>
            - Дорожим каждым заказом и делаем как для себя!
        </span>
            <span id={styles.text6}>
            - Используем натуральную и свежайшую продукцию
                 </span>
            <span id={styles.text7}>
           Вы можете быть уверены:
                 </span>
            <span id={styles.text8}>
     - Заказ приедет точно в срок - у нас свой автопарк
            </span>
            <span id={styles.text9}>
            - Торт и пирожные будут аккуратно, красиво и надежно упакованы
                     </span>
            <span id={styles.text10}>
            - В состав тортов входят дорогие ингредиенты
                </span>
            <span id={styles.text11}>
            - Этот вкус Вы не забудете никогда!
                </span>
            <span id={styles.text12}>
            Наша кондитерская соответствует всем современным нормам и требованиям.
                </span>
        </div>
        <BigDiv></BigDiv>
    </div>
}

export default Garantii