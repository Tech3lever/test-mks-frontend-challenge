import { useDispatch, useSelector } from "react-redux"
import {comprarProduto, removerProduto, selectUser} from '../../redux/checkoutSlice'

export default function Sum() {

    const {name} = useSelector(selectUser)
    const dispatch = useDispatch()

    const SumValue = () => {
        dispatch(comprarProduto(name))
    }

    const removeValue = () => {
        dispatch(removerProduto(name))
    }

    return (
        <>
            <h1>Valor: {name}</h1>
            <button onClick={SumValue}>+1</button>
            <button onClick={removeValue}>-1</button>
        </>
    )
}