import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchInventory, fetchRemovedItems } from "../actions"

const RemainingItems = () => {

    const dispatch = useDispatch()

    const inventory = useSelector(state => state.inventory)
    const removedItems = useSelector(state => state.removedItems)

    const totalInventory = inventory.reduce((acc, curr) => curr.itemQuantity + acc , 0)
    const totalRemovedItems = removedItems.reduce((acc, curr) => curr.itemQuantity + acc , 0)

    const remainingItems = totalInventory - totalRemovedItems

    useEffect(() => {
        dispatch(fetchInventory())
    }, [])

    useEffect(() => {
        dispatch(fetchRemovedItems())
    }, [])
    

    return (
        <div>
            <h1>Remaining Items In Inventory</h1>
            <h2>Inventory Total:  {remainingItems}</h2>
        </div>
    )
}

export default RemainingItems