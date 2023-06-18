import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./screens/home/Home.jsx";
import Garantii from "./screens/Garantii/garantii.jsx";
import Dostavka from "./screens/Dostavka/dostavka.jsx";
import Nachinki from "./screens/Nachinki/nachinki.jsx"
const Router = () => {
    return <BrowserRouter>
<Routes>
    <Route element={<Home />} path='/'/>
    <Route element={<Garantii />} path='/garantii' />
    <Route element={<Dostavka />} path='/dostavka' />
    <Route element={<Nachinki />} path='/nachinki' />

    <Route path='*' element={<div> Not found</div>}  />
</Routes>
    </BrowserRouter>
}
export default Router