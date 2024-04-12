import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  

function App() {
    return <div className="container">
        {/*<h1>Hello React!</h1>*/}
        <Header />
        <Menu />
        <Footer />
        </div>;
}

function Header(){
    return(
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    ) 
    
}

function Menu(){
    return (<main className="menu">
        <h2> this is our menu</h2>
        <Pizza id={1} />
        <Pizza id={2} />
        <Pizza id={3} />
        <Pizza2 name='pizza spinaci' ingredients='tomato' photoName='pizzas/spinaci.jpg' price={1000000000000} />
        <Pizza2 name='pizza spinaci' ingredients='tomato' photoName='pizzas/spinaci.jpg' price={1000} />
    </main>
    );
}

function Pizza2(props){
    return(
        <div className="pizza">
            <img src={props.photoName} alt=""/>
            <div>
            <h3> This pizza is priced at {props.price + 1}</h3>
            </div>
        </div>
    )

}

function Footer(){
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >=openHour && hour <= closeHour;
    console.log(isOpen);

    //if(hour >= openHour && hour <= closeHour) alert("we are open");
    //else alert("sorry we are close");

    return <footer>{new Date().toLocaleDateString()}. we are open now</footer>;
    //return React.createElement('footer', null, "we are open now");
}

function Pizza({id}){
    return(
        <div>
            <img src={pizzaData[id].photoName} alt=""/>
            <h3> This pizza is {pizzaData[id].name}</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//root.render(<React.StrictMode><App /></React.StrictMode>); //strict mode