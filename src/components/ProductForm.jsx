import { useState } from "react"

export const ProductForm = () => {

    const initialData = {
        name: "",
        description: "",
        price: ""
    }
    const [form, setForm] = useState(initialData);

    const { name, description, price} = form //destructuracion del objeto

    return (
        <form>
            <input placeholder="name"
                name="name"
                value={name}
                onChange={ }
            />
            <input placeholder="description"
                name="description"
                value={description}
                onChange={ }
            />
            <input placeholder="price"
                name="price"
                value={price}
                onChange={ }
            />
        </form>
    )
}