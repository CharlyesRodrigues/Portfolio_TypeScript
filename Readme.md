:pushpin: Requisitos:

1) A lista de tecnologias deve ser um array onde no HTML você irá fazer um map para listar

2) Ao clicar no botão de linguagem  o texto de apresentação "Olá meu nome...." muda para
a linguagem selecionada

3) O botão de linguagem  deve ser um componente onde você passará 3 propriedades: Título,
ícone e o click dele

4) Nesse projeto eu utilizei React com Styled Components que foi instalado em meu terminal através do comando
npm install --save styled-components.

![icons8-reaccionar-80 (2)](https://user-images.githubusercontent.com/98665329/209464095-407264c0-46dc-40d9-af42-0f4f126b52f5.png)
![styled](https://user-images.githubusercontent.com/98665329/209464299-9d68a61a-7f39-4682-ab79-c32a0efad346.png)



# Passo a passo do Projeto

1º NODE

2º YARN OU NPM 

3º PowerShell

* npm create vite@latest
- Vai fazer uma pergunda e digitamos y
+ Vai pedir o nome do projeto
* Vai pedir o Framework  que será utilizado
* Por fim vai pedir a variant que no meu caso é o TypeScript



    Essa biblioteca nos permite trabalhar com o CSS dentro do React com TypeScript, mas para isso temos que importá-la
para o projeto e utilizá-la em nossos arquivos de style.ts de cada pasta criada.Para cada tag que eu criei em meu arquivo 
index.tsx eu dei um nome sugestivo  e coloquei dentro do import para ser usado e estilizado no styed component do arquivo 
ts aonde criei e exportei uma const  como o nome importado(Sugestivo)  e atráves do styled. eu pude dizer se era um botão, 
uma div ou uma h1  e por ai vai.Vale a pena ressaltar que para o  estilo global tivemos que importar o createGlobalStyle  
e criar uma constante e exportá-la para ser utilizado em todo o projeto (export const GlobalStyle = createGlobalStyle).
    Nesse projeto criei três pastas .Uma com o nome componente e sua subpasta chamada botão, outra pasta criada foi a Header
e a outra foi a Pages com uma subpasta chamada home, todas com um arquivo.tsx e um  style.ts. Cada pasta ficou responsável por
uma funcionalidade. 
    No componente botão fiz o uso do useState a qual foi importado e iniciei ele com a escrita principal "Olá meu nome...." a 
qual seria mudada segundo os botões criados na imagem abaixo que condiz com 3 funções criada nessa pasta a qual cada uma
muda o estado principal da state para a linguagem selecionada.Fiz também o uso do props, aonde no app.tsx coloquei as informações
referente a linguagem dos botões e através da função do Botão coloquei como parâmetro o comando props para
conseguir usar as informações criadas no componente do App.tsx. 
Exemplo:

App.tsx
 <Botao
        pt="Portugues"
        en=" Inglês"
        esp=" Spain"

      />

Pasta Botao
export function Botao(props)

<h1>{props.pt} </h1>

    A pasta Header ficou responsável pelo cabeçalho do projeto e a pasta Pages responsável pelas páginas do projeto.
Dentro da página Home no arquivo index.tsx, fiz três arrays, uma para cada coluna de tecnologia proposta no enunciado,
e utilizei para cada array uma const coluna aonde  foi possível fazer o map desses arrays e apartir dai chamei para dentro
do meu codigo html da pasta Home.
Exemplo:

  const lista1 = ["JavaScript", "React", "Vue Js", "Tailwind CSS"];
  const coluna1 = lista1.map(

    (a) => <ul><li>{a}</li></ul>

  )
  
      <Coluna1>{coluna1}</Coluna1>
      <Coluna2>{coluna2}</Coluna2>
      <Coluna3>{coluna3}</Coluna3>

    Todas as páginas criadas  foram exportadas para ser importadas em nosso arquivo  App.tsx, que
praticamente integra todas elas e esse arquivo App.tsx é exportado para  main.tsx.


import { Header } from './Header/index'

function App() {


  return (

    <>


      <Header />
      <Home />
      <Botao />
      <GlobalStyle />

    </>

  )
}

export default App



![portugues](https://user-images.githubusercontent.com/98665329/207726683-87347066-ce8f-4620-9258-a95ab10f1d1c.PNG)


![ingles](https://user-images.githubusercontent.com/98665329/207726725-3b55f375-95cd-4596-a57c-eef9c0fad4c9.PNG)


![espanhol](https://user-images.githubusercontent.com/98665329/207726747-f88ff646-0068-45a2-b072-c4d2b40c25b8.PNG)
