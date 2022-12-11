import { Header } from './Header/index'
import { Home } from './Pages/Home'

import { GlobalStyle } from './Styles/global'
import { Botao } from './Components/Botao'



function App() {


  return (

    <>


      <Header />
      <Home />
      <Botao
        pt="Portugues"
        en=" Inglês"
        esp=" Spain"

      />
      <GlobalStyle />

    </>

  )
}

export default App
