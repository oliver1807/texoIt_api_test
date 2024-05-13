# Projeto E2E nas apis do json placeholder# 
Esse projeto tem por finalidade a validacao das apis extraídas dos metodos do site json placeholder

Tecnologias utilizadas:

* Automacao foi realizada com cypress versao 12.14.0 (foi necessario essa versao para um comportament correto no report);
* Allure-report para que fosse possivel não somente o relatorio da automacao, como tambem o printscreen do resultado esperado;
* Instrucoes para a rodada de testes:

Para a execucao em headless e na sequencia, solicitar o relatorio seguir os seguintes passos:
-> no prompt de comando, inserir a instrucao npm run test e na sequencia informar allure open para verificar de forma separada;
-> Para a execucao em headless e a geracao instantanea do Report apos o fim da rodada de testes inserir a instrucao npm run test:rep no prompt de comando.
