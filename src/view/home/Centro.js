import React from 'react'

import  styled from 'styled-components'

import Box from './Box'


import imagem1 from '../../img/imagem1.jpg'
import imagem2 from '../../img/imagem2.jpg'
import imagem3 from '../../img/imagem3.jpg'
import imagem4 from '../../img/imagem4.jpg'

import imagem5 from '../../img/imagem5.jpg'
import imagem6 from '../../img/imagem6.jpg'
export default function Centro(){
  return (
    <Aside>
     <section>
     <img src={imagem1} alt='logo' width='200' height='200'/>
     </section>
     <section>
     <img src={imagem2} alt='logo' width='200' height='200'/>
     </section>
     <section>
     <img src={imagem3} alt='logo' width='200' height='200'/>
     </section>
     <section>
     <img src={imagem4} alt='logo' width='200' height='200'/>
     </section>
     <section>
     <img src={imagem5} alt='logo' width='200' height='200'/>
     </section>
     <section>
     <img src={imagem6} alt='logo' width='200' height='200'/>
     </section>
    </Aside>
  );
}

const Aside = styled.aside`
background: #6606;
display: flex;
flex-wrap: wrap;
justify-content: Center;
align-items: center;
`;

const Section = styled.section`
margin: 10px;
padding: 10px;
width: 200px;
height: 200px;
border: solid 2px #00f;`;

