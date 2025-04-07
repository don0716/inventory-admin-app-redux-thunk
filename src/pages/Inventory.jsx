import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchInventory} from "../actions"

const Inventory = () => {
    const dispatch = useDispatch()
    const inventory = useSelector((state) => state.inventory)
    const totalInventory = inventory.reduce((acc, curr) => curr.itemQuantity + acc , 0)

    useEffect(() => {
        dispatch(fetchInventory())
    }, [])

    return (
        <div>
            <h1>Inventory Items</h1>

           <ul>
           {
                inventory?.map((item, index) => (
                    <li key={index}> 
                        {item.itemName} : {item.itemQuantity}
                    </li>
                ))

            }
           </ul>


            <h2>Total Inventory Items: {totalInventory} </h2>



        </div>
    )
}

export default Inventory