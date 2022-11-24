import {Background_Português,Background_English,Background_Espanhol,Texto} from './style'

import Brasil from '../../assets/Flags/brasil.png'
import Espanha from '../../assets/Flags/spain.png'
import EUA from '../../assets/Flags/usa.png'
import { useState } from 'react' 

export function Botao() { 
    const [] = useState();
    
    
    
    const [traducao,setTraducao] = useState("Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:" )
    
    function pt() {
   
   setTraducao ("Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:")
   
   }
   
   function esp(){
   
      setTraducao ("Hola, mi nombre es Charlyes Souza Rodrigues y soy desarrollador Front-end, Tecnologías que tengo experiencias:")
   
      }
      
   function eng() {
   
         setTraducao ("Hello, my name is Charlyes Souza Rodrigues and I am a Front-end developer, Technologies that I have experiences:")
   
         }
        
    return (
        <div>
           <Texto>{traducao}</Texto>   
        <Background_Português type='button' onClick={pt}  >
        <div ></div>
        <h1>Portugues</h1>
        <img  src={Brasil}></img>
        </Background_Português>

        <Background_English type='button' onClick={eng} >
        <div></div>
        <h1>English</h1>
        <img  src={EUA}></img>
        </Background_English>

        <Background_Espanhol type='button' onClick={esp} >
        <div></div>
        <h1>Spain</h1>
        <img  src={Espanha}></img>
        </Background_Espanhol>
 
 
</div>

  
    )
  }
  
  