Requisitos:

1) A lista de tecnologias deve ser um array onde no HTML você irá fazer um map para listar

2) Ao clicar no botão de linguagem  o texto de apresentação "Olá meu nome...." muda para
a linguagem selecionada

3) O botão de linguagem  deve ser um componente onde você passará 3 propriedades: Título,
ícone e o click dele

4) Nesse projeto eu utilizei React com Styled Components que foi instalado em meu terminal através do comando:
npm install --save styled-components.

    Essa biblioteca nos permite trabalhar com o CSS dentro do React com TypeScript, mas para isso temos que importá-la
para o projeto e utilizá-la em nossos arquivos de style.ts de cada pasta criada.Para cada tag que eu criei em meu arquivo 
index.tsx eu dei um nome sugestivo  e coloquei dentro do import para ser usado e estilizado no styed component do arquivo 
ts aonde criei e exportei uma const  como o nome importado(Sugestivo)  e atráves do styled. eu pude dizer se era um botão, 
uma div ou uma h1  e por ai vai.Vale a pena ressaltar que para o  estilo global tivemos que importar o createGlobalStyle  
e criar uma constante e exportá-la para ser utilizado em todo o projeto (export const GlobalStyle = createGlobalStyle).
    Nesse projeto criei três pastas uma com o nome componente com uma subpasta chamada botão, outra pasta criada foi a 
Header e a outra foi a Pages com uma subpasta chamada home, todas com o nome de arquivo.tsx e style.ts.
No componente botão fiz o uso do useState a qual foi importado e iniciei ele com a escrita principal "Olá meu nome...." a 
qual seria mudada segundo os botões criados na imagem abaixo que condiz com 3 funções criada nessa pasta a qual cada uma
muda o estado principal da escrita para a linguagem selecionada 
setTradução que esta presente no hook dando a assim a possiblidade de mudar o estado dele inicial que é tradução.



![portugues](https://user-images.githubusercontent.com/98665329/207726683-87347066-ce8f-4620-9258-a95ab10f1d1c.PNG)


![ingles](https://user-images.githubusercontent.com/98665329/207726725-3b55f375-95cd-4596-a57c-eef9c0fad4c9.PNG)


![espanhol](https://user-images.githubusercontent.com/98665329/207726747-f88ff646-0068-45a2-b072-c4d2b40c25b8.PNG)
