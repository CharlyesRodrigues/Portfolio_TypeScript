import {Background_Português,Background_English,Background_Espanhol} from './style'

import Brasil from '../../assets/Flags/brasil.png'
import Espanha from '../../assets/Flags/spain.png'
import EUA from '../../assets/Flags/usa.png'

import {Home} from "./../../Pages/Home/index"

export function Botao() {
 
    function pt (){
return (
    <div>
    
 <h1>   "Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:"</h1>
 
    </div>
)
 }
 
 
    function usa (){
   return ("Hello, my name is Charlyes Souza Rodrigues and I am a Front-end developer, Technologies that I have experiences:"

   )
    
    }
    
        function spain (){
       return("Hola, mi nombre es Charlyes Souza Rodrigues y soy desarrollador Front-end, Tecnologías que tengo experiencias:"

    
       )
        }
        
    return (
        <div>
              <Home
              
              Portugues = {pt}
              Espanhol = {spain}
              English = {usa}
                            
              />  
        <Background_Português type='button' onClick={pt}>
        <div ></div>
        <h1>Portugues</h1>
        <img  src={Brasil}></img>
        </Background_Português>

        <Background_English type='button' onClick={usa}>
        <div></div>
        <h1>English</h1>
        <img  src={EUA}></img>
        </Background_English>

        <Background_Espanhol type='button' onClick={spain}>
        <div></div>
        <h1>Spain</h1>
        <img  src={Espanha}></img>
        </Background_Espanhol>
 
 
</div>

  
    )
  }
  
  