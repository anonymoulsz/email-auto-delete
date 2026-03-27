// ==UserScript==
// @name         Excluir todos os e-mails em loop no Gmail 
// @namespace    http://tampermonkey.net/
// @version      3.3
// @description  Seleciona e exclui continuamente até zerar os e-mails, sem recarregar a página
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function excluirLoop() {
        // Seleciona o checkbox principal (seleciona todas as mensagens da página)
        let checkbox = document.querySelector('span.T-Jo[role="checkbox"]');

        if (checkbox && checkbox.offsetParent !== null) {
            checkbox.click();
            console.log("✔ Todas as mensagens da página foram selecionadas.");

            // Procura o botão de excluir
            let botaoExcluir = document.querySelector('div[act="10"][role="button"][aria-label="Excluir"], div[act="10"][role="button"][aria-label="Delete"]');
            if (botaoExcluir && botaoExcluir.offsetParent !== null) {
                // Dispara a sequência completa de eventos de mouse
                ["mousedown", "mouseup", "click"].forEach(evtType => {
                    botaoExcluir.dispatchEvent(new MouseEvent(evtType, {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }));
                });
                console.log("🗑 Mensagens excluídas automaticamente.");

                // Aguarda alguns segundos e tenta novamente
                setTimeout(excluirLoop, 5000);
            } else {
                console.log("⏳ Botão de excluir não encontrado.");
            }
        } else {
            console.log("✅ Não há mais mensagens nesta pasta. Loop encerrado.");
        }
    }

    // Executa após o carregamento da página
    window.addEventListener('load', function() {
        setTimeout(excluirLoop, 6000);
    });
})();
