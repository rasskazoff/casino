import React, {useState} from 'react'

    const Ring = (props)=>{
        
        let items = props.items
        let i = props.order
        
        let styles = i>=0 ? 'ringEnd' : 'ringMoving'
        let items_order = i>0 ? items.slice(i).concat(items.reverse().slice(-i)) : items
                
        return(
            <>
            <div className="row">
            { /* items_order.map((items_order)=><div className={styles}>{items_order}</div>) */ }
            {items_order.map((items_order)=><div className={styles}>{items_order.img}</div>)}
            </div>
            </>
        )
    }
export default Ring