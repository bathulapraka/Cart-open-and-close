  // App component
  import "./App.css";
  import { useState } from "react";
  import Header from "./Components/Layout/Header";
  import CartItems from "./Components/Cart/Cart";

  function App() {
    const [Click, Setclick] = useState(false);

    const shown = () => {
      Setclick(true);
    };
    const Notshow = () => {
      Setclick(false);
    };
    return (
      <div>
        {Click && <CartItems Onclose={Notshow}/>}
        <Header Showing={shown}  /> 
      </div>
    );
  }

  export default App;
