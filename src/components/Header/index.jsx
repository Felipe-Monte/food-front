import { FiLogOut, FiSearch, FiMenu  } from 'react-icons/fi';
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { useAuth } from '../../hooks/auth';

import { Container, Search } from './styles';

import { TitleLogo } from '../../components/TitleLogo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import imgLogo from '../../assets/poligono.svg'

import { useNavigate } from 'react-router-dom';

export function Header() {
    const { signOut } = useAuth();

    const navigate = useNavigate()

    function handleNavigate() {
        navigate("/add")
    }

    return (
        <Container>

            <FiMenu className='icon-menu'/>

            <TitleLogo
                text="Food explorer"
                urlImg={imgLogo}
                imgSize={30}
                textSize={28}
            />

            <Search>
                <Input
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />
            </Search>

            <Button
                title="Pedidos (0)"
            />

            <Button
                title="+"
                className="add_button"
                onClick={handleNavigate}
            />

            <a type="button" onClick={signOut}>
                <FiLogOut size={24} className='icon-logout'/>
            </a>

            <MdOutlineRestaurantMenu className='icon-pedido'/>
        </Container>
    );
};