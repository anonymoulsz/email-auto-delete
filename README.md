# Gmail Delete Loop Tampermonkey Script

## 📌 Descrição
Este repositório contém um script Tampermonkey que automatiza a exclusão contínua de e-mails no Gmail sem recarregar a página.  
O script seleciona todas as mensagens visíveis, aciona o botão de excluir e repete o processo em loop até que a caixa de entrada esteja vazia.

## 🚀 Instalação
1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no seu navegador.
2. Clique no ícone do Tampermonkey → **Criar novo script**.
3. Apague o conteúdo padrão e cole o código do arquivo `gmail-delete-loop.user.js`.
4. Salve o script.
5. Abra o Gmail e o script será executado automaticamente.

## ⚙️ Funcionamento
- Seleciona todas as mensagens da página atual.
- Aciona o botão de excluir.
- Repete o processo a cada 5 segundos até não restarem mensagens.
- Exibe mensagens no console para acompanhar a execução.

## 🛠️ Arquivos
- `gmail-delete-loop.user.js` → Script principal.

## 📜 Licença
Este projeto está licenciado sob a licença MIT.  
Você pode usar, modificar e distribuir livremente, desde que mantenha os créditos originais.
