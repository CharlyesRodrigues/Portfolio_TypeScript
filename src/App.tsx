
import {Header} from './Header/index'
import {GlobalStyle } from './Styles/global'
import {Botao} from './Components/Botao'

function App() {


  return (
   
  <>

  
   <Header />
  <Botao 
  Espanhol = "Hola, mi nombre es Charlyes Souza Rodrigues y soy desarrollador Front-end, Tecnologías que tengo experiencias:"
  Portugues = "Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:"
  English = "Hello, my name is Charlyes Souza Rodrigues and I am a Front-end developer, Technologies that I have experiences:"
 
  
  />
  <GlobalStyle/>

   </>

  )
}

export default App
