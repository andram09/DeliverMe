import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import MealCards from "./components/MealCards";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealCards />
        <Cart />
        <Checkout />
      </CartContextProvider>      
    </UserProgressContextProvider>
  )
}

export default App;
