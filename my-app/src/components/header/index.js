import Image from 'next/image'

import * as S from './style.js'

import logo from '../../../public/images/header/logo.svg'
import car from '../../../public/images/header/car.svg'

const Header = () => {
    return (
        <>
            <S.Container>
                <S.Content>
                    <Image src={logo} />
                    <S.Car>
                        <Image height={20} width={50} src={car} />
                    </S.Car>
                </S.Content>
            </S.Container>
        </>
    )
}


export default Header