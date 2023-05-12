# Sistema de Lembretes
Processo Seletivo - Estágio Desenvolvimento DTI

# Desafio
O projeto do Sistema de Lembretes corresponde a uma API seguindo os padrões RESTful, desenvolvido utlizando-se a linguagem Java com o framework Spring Boot, front-end do projeto foi feito em React sendo uma aplicação web, dando uma interface bonita e utilizável diariamente. O código para o projeto foi implementado utilizando-se o paradigma orientado a objetos.

## Decisões de projeto
### Intruções para o desenvolvimento
* Deverá ser possível adicionar um novo lembrete, informando o nome ea data do lembreteAo clicar em “Criar”, os campo deverão ser validados seguindo as regras:
  * O campo “Nome” deverá estar preenchido
  * O campo “Data” deverá estar preenchido, com uma data válida, e essa data tem de estar no futuro
  * O Caso os valores dos campos sejam válidos, o novo lembrete deverá ser exibido na seção “Lista de lembretes”
  * Deverá ser possível deletar um lembrete anteriormente adicionado, clicando no “x”
  * Ao adicionar um novo lembrete, caso a sua data já exista, ele deverá aparecer dentro da lista referente àquele dia; caso não, um novo dia deverá ser exibido,     contendo aquele novo dia
  * Os dias da lista de lembretes deverão ser exibidos em ordem cronológica
### BACK-END E FRONT-END
#### BACK-END: 
* Linguagens utilizadas
   * Java(Spring Boot)
   * API seguindo os padrões RESTful
* Banco de dados
   * Banco de dados H2,  foi escolhido por ser um banco de dados temporário e não precisar de configuração e instalação.
#### FRONT-END:
* Linguagens utilizadas
   * React
* Estilização
 * Styled Components
 * Padrões de cores foi utilizado(As principais cores da empresa)
    * `#33b4c4` e `#e31c79`
 * Captura de tela do front-end
  ![image](https://github.com/faelcrz/teste-dti/assets/49538724/4e42ca22-2284-48de-8318-644f6d1facdf)

 #### Github
 * Utilizado por ser um metódo mais convencional de versionamento.
## Instruções pra executar o sistema
#### BACK-END:
Entre no diretorio do back-end que se encontra em teste-dti\back-end

Instalar o maven, aqui tem umas orientações para a instalação: https://dicasdejava.com.br/como-instalar-o-maven-no-windows/
```
cd target
java -jar TesteDti-0.0.1-SNAPSHOT.jar
```
#### FRONT-END:
Entre no diretorio do front-end que se encontra em  teste-dti\front-end
```
npm install
npm run dev
```
* Depois desses passos o Sistema de Lembretes vai está pronto para ser usado.
## Melhorias
  * Testes unitários para testar o sistema.
  * Tratamento de erros no front-end.
