import { useState } from "react"
import { useDispatch } from "react-redux"
import { addEntry } from "../actions"

const AddNewItems = () => {
    const [formData, setFormData] = useState({
        itemName: "",
        itemQuantity: 0,
        entryType: "addToStore"
    })

    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData)

        dispatch(addEntry(formData))


    }
    const onChangeHandler = (e) => {
        const {value, name} = e.target

        setFormData(prevState => ({
            ...prevState,
            [name]: value === "itemQuantity" ? Number(value) : value
        }) )
    }


    return (
        <div>
            <h1>Inventory Admin App</h1>

            <form onSubmit={onSubmitHandler}>
                <label>Item Name:</label>
                <input name="itemName" type="text" value={formData.itemName} onChange={onChangeHandler} />

                <label>Item Quantity:</label>
                <input name="itemQuantity" type="number" value={formData.itemQuantity} onChange={onChangeHandler} />

                <label>Entry Type:</label>
                <select name="entryType" value={formData.entryType} onChange={onChangeHandler} >
                    <option value="addToStore">Add To Storage</option>
                    <option value="removeFromStore">Remove From Storage</option>
                </select>
                
                <button type="submit">Add Item Data</button>

            </form>


        </div>
    )
}

export default AddNewItems