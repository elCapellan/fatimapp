import { useState } from "react"

const ItemContador = ({stock, initial, onAdd})=>{
    const[quantity, setQuantity] = useState(initial)

    const incrementar = () =>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }


    const decrementar =()=>{
        if(quantity>1){
             setQuantity(quantity-1)
        }

    }

return(
    <div className="Contador">
        <div className="Controles">
            <button className="Boton" onClick={decrementar}>-</button>
            <h4 className="Numero">{quantity}</h4>
            <button className="Boton" onClick={incrementar}>+</button>
        </div>
        <div>
            <button className="Boton" onClick={()=> onAdd(quantity)}disabled={!stock}>
                 Agregar al carrito de compras
            </button>
        </div>
    </div>
)

}
export default ItemContador