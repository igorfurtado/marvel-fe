<p>
  <img src="./src/assets/logo_pontua_white.svg" alt="Logo Pontua">
</p>

# Pontua - Marvel Project

Aplicação criada com ReactJs com as seguintes rotas:

- Login;
- Home;
- Reset Password.

## Documentação de cores

| Cor             | Hexadecimal                                                      |
| --------------- | ---------------------------------------------------------------- |
| White           | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Black           | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Divider          | ![#EBEFF2](https://via.placeholder.com/10/EBEFF2?text=+) #EBEFF2 |
| Blue/800        | ![#00113D](https://via.placeholder.com/10/00113D?text=+) #00113D |
| Blue/600        | ![#213770](https://via.placeholder.com/10/213770?text=+) #213770 |
| Blue/200        | ![#747D94](https://via.placeholder.com/10/747D94?text=+) #747D94 |
| Orange/500      | ![#F21A05](https://via.placeholder.com/10/F21A05?text=+) #F21A05 |
| Orange/400      | ![#F43724](https://via.placeholder.com/10/F43724?text=+) #F43724 |
| Gray/background | ![#F5F6F8](https://via.placeholder.com/10/F5F6F8?text=+) #F5F6F8 |
| Gray/100        | ![#EAECF0](https://via.placeholder.com/10/EAECF0?text=+) #EAECF0 |
| Gray/500        | ![#777777](https://via.placeholder.com/10/777777?text=+) #777777 |

## Fontes utilizadas

Epilogue;
Inter.

## Referência

Esse projeto foi elaborado baseado em uma interface fornecida pela empresa Pontua.

- [Pontua](https://pontua.com.br/)

## 🛠 Stack

ReactJs + Typescript

## Documentação

A aplicação foi criada com sistema de rotas utilizando o `react-router-dom`.

A tela de login pode ser acessada na rota `/login`. Para que o usuário realize um login, deve inserir um email válido (validado por meio de uma regex com `react-hook-form` e `zod`) e também uma senha (pode ser qualquer valor diferente de vazio).

Caso o usuário tenha esquecido a sua senha, pode acessar a página de recuperação clicando no botão `"Esqueceu a senha?"`, que o levará para a rota `/reset-password`.

Caso o usuário informe uma rota inexistente, receberá um feedback visual de que a página que ele está procurando não existe.

Após o preenchimento e submissão do formulário por meio do botão de ação, o usuário terá acesso à tela inicial, encontrada no endereço `/home`. Caso o usuário tente acessar a tela inicial sem que antes tenha feito login, será redirecionado automaticamente para a tela de login. No login, é criado um fake-token no session storage que valida se o usuário está habilitado para acessar o sistema.

Assim que a tela inicial for acessada, uma chamada na api da marvel será feita para trazer os dados dos heróis. A chamada é paginada, reduzindo o tempo de resposta da api e trazendo os heróis de acordo com o offset da página, que pode ser selecionada pelo usuário por meio de um componente da view.

Além disso, o usuário pode filtrar a sua pesquisa por meio do campo de busca, localizado na parte superior da tela inicial. Por padrão, os itens retornados pela api estarão em ordem alfabética.

A tela inicial é dividida em duas seções, sendo a primeira delas a Home, onde serão exibidos os heróis disponíveis de acordo com o filtro de busca e também com a paginação selecionada pelo usuário. Ao clicar em um dos heróis, o usuário será redirecionado para a seção Perfil, onde terá acesso à algumas informações do herói selecionado.

Caso o usuário tente acessar a seção perfil tem antes ter selecionado um herói, receberá um aviso informando que sobre a necessidade de seleção de um herói.

Caso as buscas feitas pelos usuários no campo de filtro não retornem alguma respostas, uma mensagem será retornada ao usuário.

## Sobre arquitetura e libs

A arquiterura do projeto segue o padrão MVP, onde a camada model de acesso à api chama-se `data-access`. Essa é integrada com uma outra camada chamada `presenter`, que por sua vez faz a comunicação com a view, de forma a desacoplar responsabilidades.

Para a estilização do projeto foi utilizado o `styled-components`.

Para o gerenciamento e criação de schemas para preenchimento de formulários foi utilizado `react-hook-form` + `zod`.

Para realizar chamadas na api foi utilizado o `axios`.

Este projeto utilizada também `eslint` + `prettier`para garantir boas práticas e padrões de escrita de código.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/igorfurtado/marvel-fe
```

Entre no diretório do projeto

```bash
  cd marvel-fe
```

Instale as dependências

```bash
  yarn
```

Insira a sua key da api da marvel no arquivo .env

```
VITE_ACCESS_KEY='XXXX-marvel-key'
```

Inicie o servidor

```bash
  yarn dev
```
