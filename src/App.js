import './App.css';

import React, {useState, useEffect} from 'react'


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

    function Spin(props){

        let rings = ['🍓','🍇','🍊','🥭']
        let i = props.index.split(',')
        let ring = [rings[i[0]], rings[i[1]], rings[i[2]], rings[i[3]]]

        return (
            ring.map((ring)=><div className={props.name}>{ring}</div>)
          
        )
      }
      

 function row1() {

    if (!spin) {
    return (
        <>
        <Spin index="0,1,2,3" name="ringEnd"/>
        </>
            )
    } else if (spin && ring1 === undefined) {
    return (
        <>
        <Spin index="0,1,2,3" name="ringMoving"/>
        </>
            )
    } else if (ring1 >= 1 && ring1 <= 50 ) {
    return (
        <>
        <Spin index="0,1,2,3" name="ringEnd"/>
        </>
            )  
    } else if (ring1 > 50 && ring1 <= 75) {
        return (
            <>
            <Spin index="1,2,3,0" name="ringEnd"/>
            </>
                )  
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                <Spin index="2,3,0,1" name="ringEnd"/>
                </>
                    )  
            } else if (ring1 > 95 && ring1 <= 100) {
                return (
                    <>
                    <Spin index="3,0,1,2" name="ringEnd"/>
                    </>
                        )  
                }
 }

 function row2() {

    if (!spin) {
    return (
        <>
        <Spin index="3,0,1,2" name="ringEnd"/>
        </>
            )
    } else if (spin && ring2 === undefined) {
    return (
        <>
        <Spin index="0,1,2,3" name="ringMoving"/>
        </>
            )
    } else if (ring2 >= 1 && ring2 <= 50 ) {
        return (
            <>
            <Spin index="0,1,2,3" name="ringEnd"/>
            </>
                )  
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                <Spin index="1,2,3,0" name="ringEnd"/>
                </>
                    )  
            } else if (ring2 > 75 && ring2 <= 95) {
                return (
                    <>
                    <Spin index="2,3,0,1" name="ringEnd"/>
                    </>
                        )  
                } else if (ring2 > 95 && ring2 <= 100) {
                    return (
                        <>
                        <Spin index="3,0,1,2" name="ringEnd"/>
                        </>
                            )  
                    }

 }

 function row3() {

    if (!spin) {
    return (
        <>
        <Spin index="3,0,1,2" name="ringEnd"/>
        </>
            )
    } else if (spin && ring3 === undefined) {
    return (
        <>
        <Spin index="0,1,2,3" name="ringMoving"/>
       { /*
        <div className="ringMoving">🍓</div>
        <div className="ringMoving">🍇</div>
        <div className="ringMoving">🍊</div>
        <div className="ringMoving">🍋</div>
        <div className="ringMoving">🍍</div>
        <div className="ringMoving">🥭</div>
        */}
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 50 ) {
        return (
            <>
            <Spin index="0,1,2,3" name="ringEnd"/>            
            </>
                )  
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                <div className="ringEnd">🍇</div>
                <div className="ringEnd">🍊</div>
                <div className="ringEnd">🥭</div>
                <div className="ringEnd">🍓</div>
                </>
                    )  
            } else if (ring3 > 75 && ring3 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    </>
                        )  
                } else if (ring3 > 95 && ring3 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🥭</div>
                        <div className="ringEnd">🍓</div>
                        <div className="ringEnd">🍇</div>
                        <div className="ringEnd">🍊</div>
                        </>
                            )  
                    }
     }

     function win() {
      if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
          setPrice(1)
      } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
          setPrice(2)
      } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
          setPrice(3)
      } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
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
    setPrice(10)
}

}
}


function win() {
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
        setPrice(1)
        setBalance(balance + (input * 15))
    } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
        setPrice(2)
        setBalance(balance + (input * 20))
    } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
        setPrice(3)
        setBalance(balance + (input * 25))
    } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
        setPrice(4)
        setBalance(balance + jackpot)
        setJackpot(0)
    } else {
        setPrice(0)
    } 
}

function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd">{"🍇 X15 Вы выиграли " + (realBet * 15) + "₽!"}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd">{"🍊 X20 Вы выиграли " + (realBet * 20) + "₽!"}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd">{"🥭 X25 Вы выиграли " + (realBet * 25) + "₽!"}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd">{"🍓 Джекпот! Вы выиграли: " + (jackpot) + "₽!"}</p>
            )
    } else if (price === 0 && ring3 > 1) {
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
    if (value.match(regex) && (parseInt(value) >= 0 || value === "")) {
        setInput(value);
    }
}






    return (
        <div className="fullSlot">
        <h1 className="casinoName">casino montecarlo</h1>
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
        <input value={input} type="number" onChange={(e) => numChecker(e)} className="betInput" placeholder="0₽"></input>
        <button className="spinButton" onClick={() => play()}>Старт</button>
        </div>
        <h1 className="price">{"Ваш баланс: " + Math.round((balance * 100)) / 100 + "₽"}</h1>
        <button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Пополнить 1000 ₽</button>
        </div>
        
    )
}

export default App;
