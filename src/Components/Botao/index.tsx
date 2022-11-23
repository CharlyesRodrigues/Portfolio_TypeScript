import {Background_Português,Background_English,Background_Espanhol} from './style'

import Brasil from '../../assets/Flags/brasil.png'
import Espanha from '../../assets/Flags/spain.png'
import EUA from '../../assets/Flags/usa.png'


export function Botao(props) {
 
 
    
        
    return (
        <div>
            
        <Background_Português type='button' onClick={props.Portugues} >
        <div ></div>
        <h1>Portugues</h1>
        <img  src={Brasil}></img>
        </Background_Português>

        <Background_English type='button' onClick={props.Espanhol} >
        <div></div>
        <h1>English</h1>
        <img  src={EUA}></img>
        </Background_English>

        <Background_Espanhol type='button' onClick={props.English} >
        <div></div>
        <h1>Spain</h1>
        <img  src={Espanha}></img>
        </Background_Espanhol>
 
 
</div>

  
    )
  }
  
  