
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
    --white:#FFFFFF;
    --dark: #121212;
    --white2: #EDEDED ;
    --Rectangle-4234: #27272A;
    --logo : #DADADA;
    --borda :#9D4B00 

}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
     
     }
    
     body{
        position: absolute;
        width: 1440px;
        height: 900px;
        left: 0px;
        top: 0px;
        
        background: var( --dark);
        -webkit-font-smoothing: antialiased;
    
     }

     
`

