import React, {useState} from 'react'

const Ring = (props)=>{

    let styles = props.order>=0 ? 'ringEnd' : 'ringMoving'
    
    let items_order = props.order>=0 ? sortArr(props.items, props.order) : sortArr(props.items, 0)

    return(
        items_order.map((items_order)=><div className={styles}>{items_order}</div>)
    )
}

function sortArr(items,a){
    let arr=[]
    for(let i = a; i<items.length; i++){
        arr.push(items[i])   
    }
    for(let i = a-1; i>=0; i--){
        arr.push(items[i])   
    }
    return arr
}

export default Ring