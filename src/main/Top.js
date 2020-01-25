import React from 'react'

import { Link } from 'react-router-dom'
import  styled from 'styled-components'
export default function Top(){
  return(
    <Header>
     <Link to='/'>HOME</Link>
     <Link to= '/sobre'> SOBRE</Link>
     <Link to= '/fotos'> FOTOS</Link>
     <Link to= '/contatos'>CONTATO</Link>
     <Link to= '/cadastro'>CADASTRO</Link>
    </Header>
  )
}
const Header = styled.header`
background: #0f0`;

