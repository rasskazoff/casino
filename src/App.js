import './App.css';
import React, {useState, useEffect} from 'react'
import Ring from './components/Ring'
//import Slot from './components/Slot';

import seven from'./img/Seven.png'
import banana from'./img/Banana.png'
import bar from'./img/Bar.png'
import drink from'./img/Drink.png'
import horseshoe from'./img/Horseshoe.png'
import diamond from'./img/Diamond.png'
import gold from'./img/Gold Bar.png'
import money from'./img/Money.png'
import lemon from'./img/Lemon.png'
import apple from'./img/Apple.png'


const App = ({id, owned, close, expires}) => {

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [input, setInput] = useState()
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(1000)


    useEffect(() => {
        win()
    }, [ring3])

//const rings = ['🍓', '🍇', '🍊', '🥭']
const rings = [
    {img: seven},
    {img: bar},
    {img: banana},
    {img: drink},
    {img: horseshoe},
    {img: diamond},
    {img: gold},
    {img: money},
    {img: lemon},
    {img: apple},
]

 function row1() {

    if (!spin) {
    return (
        <>
        <Ring order={0} items= {rings} />
        </>
            )
    } else if (spin && ring1 == undefined) {
    return (
        <>
        <Ring  items= {rings} />
        </>
            )
    } else if (ring1 >= 1 && ring1 <= 40 ) {
    return (
        <>
        <Ring order={0} items= {rings} />
        </>
            ) 
    } else if (ring1 > 40 && ring1 <= 47) {
        return (
            <>
            <Ring order={1} items= {rings} />
            </>
                )  
    } else if (ring1 > 47 && ring1 <= 54) {
        return (
            <>
            <Ring order={2} items= {rings} />
            </>
                )  
    } else if (ring1 > 54 && ring1 <= 61) {
        return (
            <>
            <Ring order={3} items= {rings} />
            </>
                ) 
    } else if (ring1 > 61 && ring1 <= 68) {
        return (
            <>
            <Ring order={4} items= {rings} />
            </>
                )
    } else if (ring1 > 68 && ring1 <= 75) {
        return (
            <>
            <Ring order={5} items= {rings} />
            </>
                )
    } else if (ring1 > 75 && ring1 <= 82) {
        return (
            <>
            <Ring order={6} items= {rings} />
            </>
                )
    } else if (ring1 > 82 && ring1 <= 89) {
        return (
            <>
            <Ring order={7} items= {rings} />
            </>
                )
    } else if (ring1 > 89 && ring1 <= 96) {
        return (
            <>
            <Ring order={8} items= {rings} />
            </>
                ) 
    } else if (ring1 > 96 && ring1 <= 100) {
        return (
            <>
            <Ring order={9} items= {rings} />
            </>
                )  
            }
 }

 function row2() {

    if (!spin) {
    return (
        <>
        <Ring order={0} items= {rings} />
        </>
            )
    } else if (spin && ring2 == undefined) {
    return (
        <>
        <Ring  items= {rings} />
        </>
            )
    } else if (ring2 >= 1 && ring2 <= 40 ) {
    return (
        <>
        <Ring order={0} items= {rings} />
        </>
            ) 
    } else if (ring2 > 40 && ring2 <= 47) {
        return (
            <>
            <Ring order={1} items= {rings} />
            </>
                )  
    } else if (ring2 > 47 && ring2 <= 54) {
        return (
            <>
            <Ring order={2} items= {rings} />
            </>
                )  
    } else if (ring2 > 54 && ring2 <= 61) {
        return (
            <>
            <Ring order={3} items= {rings} />
            </>
                ) 
    } else if (ring2 > 61 && ring2 <= 68) {
        return (
            <>
            <Ring order={4} items= {rings} />
            </>
                )
    } else if (ring2 > 68 && ring2 <= 75) {
        return (
            <>
            <Ring order={5} items= {rings} />
            </>
                )
    } else if (ring2 > 75 && ring2 <= 82) {
        return (
            <>
            <Ring order={6} items= {rings} />
            </>
                )
    } else if (ring2 > 82 && ring2 <= 89) {
        return (
            <>
            <Ring order={7} items= {rings} />
            </>
                )
    } else if (ring2 > 89 && ring2 <= 96) {
        return (
            <>
            <Ring order={8} items= {rings} />
            </>
                ) 
    } else if (ring2 > 96 && ring2 <= 100) {
        return (
            <>
            <Ring order={9} items= {rings} />
            </>
                )  
            }
 }

 function row3() {

    if (!spin) {
    return (
        <>
        <Ring order={0} items= {rings} />
        </>
            )
    } else if (spin && ring3 == undefined) {
    return (
        <>
        <Ring  items= {rings} />
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 40 ) {
    return (
        <>
        <Ring order={0} items= {rings} />
        </>
            ) 
    } else if (ring3 > 40 && ring3 <= 47) {
        return (
            <>
            <Ring order={1} items= {rings} />
            </>
                )  
    } else if (ring3 > 47 && ring3 <= 54) {
        return (
            <>
            <Ring order={2} items= {rings} />
            </>
                )  
    } else if (ring3 > 54 && ring3 <= 61) {
        return (
            <>
            <Ring order={3} items= {rings} />
            </>
                ) 
    } else if (ring3 > 61 && ring3 <= 68) {
        return (
            <>
            <Ring order={4} items= {rings} />
            </>
                )
    } else if (ring3 > 68 && ring3 <= 75) {
        return (
            <>
            <Ring order={5} items= {rings} />
            </>
                )
    } else if (ring3 > 75 && ring3 <= 82) {
        return (
            <>
            <Ring order={6} items= {rings} />
            </>
                )
    } else if (ring3 > 82 && ring3 <= 89) {
        return (
            <>
            <Ring order={7} items= {rings} />
            </>
                )
    } else if (ring3 > 89 && ring3 <= 96) {
        return (
            <>
            <Ring order={8} items= {rings} />
            </>
                ) 
    } else if (ring3 > 96 && ring3 <= 100) {
        return (
            <>
            <Ring order={9} items= {rings} />
            </>
                )  
            }
 }

     function win() {
      if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
          setPrice(1)
      } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
          setPrice(2)
      } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
          setPrice(3)
      } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
          setPrice(4)
      } else {
          setPrice(0)
      } 
  }

 function rand() {
      setRing1(Math.floor(Math.random() * (100 - 1) + 1))
      setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
      setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

function play() {
    if (ring3 > 1 || !spin){
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
    setPrice(100)
}

}
}


function win() {
    let ifRing = ring1 != undefined
    if (ifRing && ring1 <= 40 && ring2 <= 40 && ring3 <= 40) {
        setPrice(1)
        setBalance(balance + input * 15)
    } else if (ifRing && ring1 > 40 && ring1 <= 47 && ring2 > 40 && ring2 <= 47 && ring3 > 40 && ring3 <= 47) {
        setPrice(2)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 47 && ring1 <= 54 && ring2 > 47 && ring2 <= 54 && ring3 > 47 && ring3 <= 54) {
        setPrice(3)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 54 && ring1 <= 61 && ring2 > 54 && ring2 <= 61 && ring3 > 54 && ring3 <= 61) {
        setPrice(4)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 61 && ring1 <= 68 && ring2 > 61 && ring2 <= 68 && ring3 > 61 && ring3 <= 68) {
        setPrice(5)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 68 && ring1 <= 75 && ring2 > 68 && ring2 <= 75 && ring3 > 68 && ring3 <= 75) {
        setPrice(6)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 75 && ring1 <= 82 && ring2 > 75 && ring2 <= 82 && ring3 > 75 && ring3 <= 82) {
        setPrice(7)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 82 && ring1 <= 89 && ring2 > 82 && ring2 <= 89 && ring3 > 82 && ring3 <= 89) {
        setPrice(8)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 89 && ring1 <= 96 && ring2 > 89 && ring2 <= 96 && ring3 > 89 && ring3 <= 96) {
        setPrice(9)
        setBalance(balance + input * 20)
    } else if (ifRing && ring1 > 96 && ring1 <= 100 && ring2 > 96 && ring2 <= 100 && ring3 > 96 && ring3 <= 100) {
        setPrice(10)
        setBalance(balance + jackpot)
        setJackpot(0)
    } else {
        setPrice(0)
    } 
}

function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd"><img src={bar} alt=""></img>{"BAR Вы выиграли " + (realBet * 1) + "₽!"}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={banana} alt=""></img>{"X15 Вы выиграли " + (realBet * 15) + "₽!"}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 5 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 6 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 7 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 8 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 9 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={drink} alt=""></img>{"X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 10 && ring3 > 1) {
        return (
            <p className="priceInd"><img src={seven} alt=""></img>{"Джекпот! Вы выиграли: " + (jackpot) + "₽!"}</p>
            )
    } else if (price === 0 && ring3 > 1) {
        return (
            <p className="priceInd">😧 Не повезло...</p>
            )
    } else if (price === 100) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Не достаточно средств</span> </p>
            )
}
}

function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if (value.match(regex) && parseInt(value) >= 0 || value === "") {
        setInput(value);
    }
}


function plusMinus(e) {

    let inp = input >= 0 ? Number(input)+ e : 0 + e

    if (inp <= 0){
        return setInput('')
    }
    return setInput(inp)
}



    return (
        <div className="fullSlot">
        <h1 className="casinoName">casino</h1>
        <h1 className="price">{"Джекпот: " + jackpot + "₽"}</h1>
        <div className="slot">
        <div className="row">
        {row1()}
        
        </div>
        <div className="row">
        {row2()}
        </div>
        <div className="row">
        {row3()}
        </div>
        </div>
        <h1 className="price">
        {premio()}
        </h1>
        <div className="slotFoot">
        <div className="inputWrap">
            <span className="minus" onClick={()=>plusMinus(-50)}>-</span>
            <input value={input} type="number" className="betInput" onChange={(e) => numChecker(e)} placeholder="0₽"></input>
            <span className="plus" onClick={()=>plusMinus(+50)}>+</span>
        </div>
        <button className="spinButton" onClick={() => play()}>СТАРТ</button>
        </div>
        <h1 className="price">{"Баланс: " + Math.round((balance * 100)) / 100 + "₽"}</h1>
        <button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Добавить 1000 ₽</button>
        </div>
        
    )
}

export default App;