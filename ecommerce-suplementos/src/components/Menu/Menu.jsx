import CartWidget from "../Navbar/CartWidget"
import './Menu.css'


const Menu = () => {
    return (
        <nav className='barra'>
            <ul>Proteína</ul>
            <ul>Creatina</ul>
            <ul>Pre entreno</ul>
            <CartWidget />
        </nav>
    )
}

export default Menu