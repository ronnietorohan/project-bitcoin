import { Link } from 'react-router-dom';
import React from 'react';
import { Button, HStack } from '@chakra-ui/react';


const Header = () => {
  return (
    <HStack p={'4'} bgColor={"blackAlpha.900"} shadow={"base"}>
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/'>Home</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'}>
            <Link to='/exchanges'>Exchanges</Link>
        </Button>
        
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/coins'>Coins</Link>
        </Button>

    </HStack>
  )
}

export default Header
