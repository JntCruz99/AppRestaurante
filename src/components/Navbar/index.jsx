import { Link } from "react-router-dom"
import './navbar.css';
import LoginButton from "../LoginButton";

const Navbar = () => {
    return (
        <nav >
            <div >
                <h1><Link to={`/`}>NavBar</Link></h1>
                <div >
                    <ul>
                        <li>
                            <Link to={`/`}  aria-current="page" >Home</Link> 
                        </li>
                        <li>
                            <Link to={`/carrinho`} >Carrinho</Link>
                        </li>
                        <li>
                            <Link to={`/pedido`} >Pedido</Link>
                        </li>
                        <li>
                            <Link to={`/pedidos`} >Pedidos</Link>
                        </li>
                        <li>
                            <LoginButton/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar