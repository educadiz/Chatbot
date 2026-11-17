# Chat-Roma-Ai

Aplicação de chat em tempo real construída com Node.js, Express e Socket.IO. O servidor entrega a interface web e gerencia mensagens, usuários online e comandos do bot.

## Requisitos

- Node.js e npm instalados.
- Acesso à internet para instalar dependências e usar os comandos que consultam serviços externos.
- Uma chave da API da OpenAI somente para os comandos `/text` e `/image`.

## Instalação

Na pasta raiz do projeto, instale as dependências listadas no `package-lock.json`:

```powershell
npm ci
```

## Configuração local do Socket.IO

Antes de iniciar o servidor local, abra `front/js/socketConfig.js` e configure a conexão para apontar para o endereço local:

```js
const socket = io("http://localhost:3000");
```

O arquivo pode estar configurado com uma URL remota de desenvolvimento. Para testar localmente, use `http://localhost:3000`.

## Iniciar para teste

Na raiz do projeto:

```powershell
npm start
```

O servidor inicia na porta `3000`. Acesse no navegador:

- `http://localhost:3000/login` para entrar no chat;
- `http://localhost:3000/` para abrir a rota principal.

Informe um nome de usuário. Para testar mensagens e a contagem de usuários, abra outra aba ou janela e entre com um nome diferente. O servidor pode ser interrompido com `Ctrl+C`.

Durante o desenvolvimento, também é possível iniciar com reinicialização automática ao alterar arquivos:

```powershell
npm run dev
```

## Comandos do chat

Envie uma mensagem com um dos comandos abaixo:

| Comando | Ação |
| --- | --- |
| `/help` | Exibe os comandos disponíveis |
| `/miau` | Busca uma imagem de gato |
| `/raposa` | Busca uma imagem de raposa |
| `/auau` | Busca uma imagem de cachorro |
| `/usuario` | Busca uma imagem de usuário |
| `/som de gato` | Toca um som de gato |
| `/som de bode` | Toca um som de bode |
| `/star wars` | Toca o tema Star Wars |
| `/text sua pergunta` | Solicita uma resposta textual à API da OpenAI |
| `/image descrição da imagem` | Solicita a geração de uma imagem à API da OpenAI |

Os comandos de texto e imagem usam a variável `OPENAI_API_KEY`. Para habilitá-los, crie um arquivo `.env` na raiz do projeto com:

```dotenv
OPENAI_API_KEY=sua_chave_da_api
```

Não compartilhe nem versione uma chave real. Os comandos `/miau`, `/raposa`, `/auau` e `/usuario` usam serviços externos e também precisam de acesso à internet.

## Testes

O projeto não define um script `test` no `package.json` e não contém uma suíte de testes automatizados. A verificação inicial pode ser feita manualmente: iniciar o servidor, entrar por duas sessões, trocar mensagens e testar os comandos. Os comandos que chamam APIs externas dependem da disponibilidade dos respectivos serviços e, no caso da OpenAI, de uma chave válida.

## Scripts disponíveis

- `npm start`: inicia o servidor Socket.IO (`socketio.js`).
- `npm run start-sktio`: alternativa para iniciar o mesmo servidor.
- `npm run dev`: inicia `socketio.js` com `nodemon`.
