import Logo from "../../logo/Logo.jsx";
import Knopki from "../../logo/Knopki.jsx";
import BigDiv from "../../logo/BigDiv.jsx";
import styles from '/src/components/screens/Nachinki/nachinki.module.css';
import {nachinki} from '/src/components/screens/Nachinki/nachinki.data.js'

const Nachinki = () => {
    return <div>
        <Logo></Logo>
        <Knopki></Knopki>
                <div id={styles.divNach}>
                    {nachinki.map(nach =>(
                    <div key = {nach.id} className={styles.divNach1}>
                        <div id={styles.divNach2}>
                        </div>
                        <div id={styles.divNach3}>
                        </div>
                    </div>
                    ))}
                </div>
    {/*<BigDiv>*/}
    {/*</BigDiv>*/}
    </div>
}

export default Nachinki