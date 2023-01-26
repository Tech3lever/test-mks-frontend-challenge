import Image from 'next/image'

import * as S from './style.js'

import logo from '../../../public/images/header/logo.svg'
import car from '../../../public/images/header/car.svg'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/checkoutSlice.js'

const Header = () => {

    const {name} = useSelector(selectUser)

    return (
        <>
            <S.Container>
                <S.Content>
                    <Image src={logo} />
                    <S.Car>
                        <Image height={15}  src={car} />
                        <S.ValueCar>
                            {name}
                        </S.ValueCar>
                    </S.Car>
                </S.Content>
            </S.Container>
        </>
    )
}


export default Header