import Carrito from "../cartwidget/cartwidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Fatima Shop</h3>
            <div>
                <button>Productos</button>
                <button>Servicios</button>
                <button>Contacto</button>
            </div>
            <Carrito />           
        </nav>
    );
}

export default NavBar