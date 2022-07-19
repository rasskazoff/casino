import './App.css';
import React, {useState, useEffect} from 'react'
import Ring from './components/Ring';


const App = ({id, owned, close, expires}) => {

    const [spin, setSpin] = useState(false)
    const [price, setPrice] = useState(0)
    const [input, setInput] = useState(100)
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(1000)

    const [ring1, setRing1] = useState(1)
    const [ring2, setRing2] = useState(1)
    const [ring3, setRing3] = useState(1)

    let items = [
        { id : 0, img : '🍓', win : 10, win_text : 'win 15x' },
        { id : 1, img : '🍇', win : 15, win_text : 'win 15x' },
        { id : 2, img : '🍊', win : 20, win_text : 'win 25x' },
        { id : 3, img : '🥭', win : 25, win_text : 'win 25x' },
    ]


    useEffect(() => {
        win()
    }, [ring3])


     function win() {
        alert('win')
      if (ring1 == 1 && ring2 == 1 && ring3 == 1 && ring1 !== undefined) {
          setPrice(1)
      } else if (ring1 == 2 && ring2 == 2 && ring3 == 2 && ring1 !== undefined) {
          setPrice(2)
      } else if (ring1 == 3 && ring2 == 3 && ring3 == 3 && ring1 !== undefined) {
          setPrice(3)
      } else if (ring1 == 4 && ring2 == 4 && ring3 == 4 && ring1 !== undefined) {
          setPrice(4)
      } else {
          setPrice(0)
      } 
  }

 function rand() {
      setRing1( Math.ceil( Math.floor(Math.random() * (100 - 1) + 1) /(100/4)) )
      setTimeout(function(){setRing2( Math.ceil( Math.floor(Math.random() * (100 - 1) + 1) /(100/4)) )}, 1000)
      setTimeout(function(){setRing3( Math.ceil( Math.floor(Math.random() * (100 - 1) + 1) /(100/4)) )}, 2000)
    }

function play() {
    if (ring3 >= 0 || !spin){
    if (input <= balance && input >= 1){
    setRealBet(input)
    setSpin(true)

    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - input)
    setJackpot(jackpot + (input / 2))
    setTimeout(function(){
   rand()
    }, 2000)
} else {
    setPrice(10)
}

}
}


function win() {
    if (ring1 == 1 && ring2 == 1 && ring3 == 1 && ring1 !== undefined) {
        setPrice(1)
        setBalance(balance + (input * 15))
    } else if (ring1 == 2 && ring2 == 2 && ring3 == 2 && ring1 !== undefined) {
        setPrice(2)
        setBalance(balance + (input * 20))
    } else if (ring1 == 3 && ring2 == 3 && ring3 == 3 && ring1 !== undefined) {
        setPrice(3)
        setBalance(balance + (input * 25))
    } else if (ring1 == 4 && ring2 == 4 && ring3 == 4 && ring1 !== undefined) {
        setPrice(4)
        setBalance(balance + jackpot)
        setJackpot(0)
    } else {
        setPrice(0)
    }
}

function premio() {
    if (price === 1 && ring3 >= 0) {
        return (
        <p className="priceInd">{"🍇 X15 Вы выиграли " + (realBet * 15) + "₽!"}</p>
        )
    } else if (price === 2 && ring3 >= 0) {
        return (
            <p className="priceInd">{"🍊 X20 Вы выиграли " + (realBet * 20) + "₽!"}</p>
            )
    } else if (price === 3 && ring3 >= 0) {
        return (
            <p className="priceInd">{"🥭 X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 4 && ring3 >= 0) {
        return (
            <p className="priceInd">{"🍓 Джекпот! Вы выиграли: " + (jackpot) + "₽!"}</p>
            )
    } else if (price === 0 && ring3 >= 0) {
        return (
            <p className="priceInd">😧 Не повезло...</p>
            )
    } else if (price === 10) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Недостаточно средств</span> </p>
            )
}
}

function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if ((value.match(regex) && parseInt(value) >= 100) || value === "") {
        setInput(value);
    }
}


    return (
        <div className="fullSlot">
        <h1 className="casinoName">casino montecarlo</h1>
        <h1 className="price">{"Джекпот: " + jackpot + "₽"}</h1>
        <div className="slot">
        <Ring order={ring1-1} items={items} />
        <Ring order={ring2-1} items={items} />
        <Ring order={ring3-1} items={items} />
        </div>
        <h1 className="price">
        {premio()}
        </h1>
        <div className="slotFoot">
        <input value={input} type="number" min="100" step="50" onChange={(e) => numChecker(e)} className="betInput" placeholder="100₽"></input>
        <button className="spinButton" onClick={() => play()}>Старт</button>
        </div>
        <h1 className="price">{"Ваш баланс: " + Math.round((balance * 100)) / 100 + "₽"}</h1>
        <button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Пополнить 1000 ₽</button>
        </div>
    )
}
    const tgWebAppScript = document.createElement("script");
    tgWebAppScript.src = "https://telegram.org/js/telegram-web-app.js";
    document.head.appendChild(tgWebAppScript);

    window.onload = ()=>{
        let tg = window.Telegram.WebApp
        tg.expand()
    }

export default App;
