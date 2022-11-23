
import {Rectangle,Texto,Coluna1,Coluna2,Coluna3} from './style';

import {Botao} from '../../Components/Botao/index'


export function Casa (props) {

  

    const lista1 = ["JavaScript","React","Vue Js", "Tailwind CSS"];
    const coluna1 = lista1.map(
  
      (a)=> <ul><li>{a}</li></ul>
  
    )
    const lista2 = ["Styled Components", "Saas", "Node", "TypeScript"];
    const coluna2 = lista2.map(
  
  (b)=> <ul><li>{b}</li></ul>
  
    )
    const lista3 = ["Angular", "Java"];
    const coluna3 = lista3.map(
  
  (c)=> <ul><li>{c}</li></ul>
  
    )


return (

 
  <div>
    
       <Texto>{props.Portugues}</Texto>
       <Rectangle> </Rectangle>
          
       
            <Coluna1>{coluna1}</Coluna1>
            <Coluna2>{coluna2}</Coluna2> 
            <Coluna3>{coluna3}</Coluna3>      
       
      

           <Botao />
        </div>

        
    )
  }
