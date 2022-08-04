import { createContext, useContext, useReducer } from "react"
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from "./Reducers"

const Cart = createContext()

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.nature(0, 0, true),
        inStock: faker.datatype.number({ min: 0, max: 10 }),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.datatype.number({ min: 1, max: 5 })
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byOverNight: false,
        byRating: 0,
        searchQuery: "",
    });

    return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}      </Cart.Provider>

}

export default Context

export const CartState = () => {
    return useContext(Cart)
}
