import { useContext } from 'react'
import logoImage from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {

    const cartCtx=useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext);

    const totalCartItems=cartCtx.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImage}/>
            <h1>DeliverMe</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart} >
                Cart ({totalCartItems})
            </Button>
        </nav>
    </header>
  )
}
