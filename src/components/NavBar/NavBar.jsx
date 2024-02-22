import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Cherry Shop</h3>
            <div>
                <button>Cherry</button>
                <button>Berry</button>
                <button>Love</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
