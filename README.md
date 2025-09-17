# Automação Luma Ecommerce - Magento 🤖

Automação de testes para o Ecommerce utilizando Cypress e JavaScript.

O projeto foi organizado usando estruturas Describe com cenários de sucesso e erro validando os principais fluxos do Ecommerce: Cadastro de usuário, Login, Adicionar produto ao carrinho e Finalização de compra.

Foram construídos 8 casos de testes, sendo eles divididos nas 4 funcionalidades do sistema.

Utilização de Custom Commands para maior flexibilidade e manutenção do código. ✅  
Geração de relatórios ricos com gráficos e imagens utilizando a biblioteca do Mochawesome. ✅
Adoção de padrões consistentes de nomenclatura para commits. ✅  
Implementação da biblioteca Faker para geração de massas de dados dinâmicas. ⌛️  
Utilização de variáveis de ambiente (env secrets) para proteger credenciais sensíveis, garantindo a segurança do código. ⌛️
Configurada uma pipeline (GitHub Actions) de integração contínua CI/CD que executa automaticamente todos os testes do projeto quando é realizado um push na branch main ou quando um pull request é aberto. ⌛️ 

## 💻 Pré-requisitos

- NodeJS;
- Git;
- Cypress;
- IDE (Visual Studio Code);
- Material Icon Theme (Optional Plugin VSCode).
- Mochawesome
- cypress-xpath

## 🛠️ Instalação

Instalação da IDE Visual Studio Code

- Entrar na página oficial e seguir os passos de instalação padrão: [https://code.visualstudio.com/](https://code.visualstudio.com/)

Instalação do NodeJS

- Acessar o link [https://nodejs.org/](https://nodejs.org/), baixar e instalar o NodeJS versão 18 ou superior;
- Ao baixar o NodeJS, o gerenciador de pacotes NPM virá junto. 

Para verificar a instalação do NodeJS e do NPM, abrir o Prompt de Comando e digitar:

Para verificar a instalação do NodeJS (deve retornar a versão algo como v22.17.1):

``node -v `` 

Para verificar a instalação do gerenciador de pacoted NPM (deve retornar a versão algo como v11.5.1):

``npm -v ``

Instalação do GIT

- Acessar o link [https://git-scm.com/downloads](https://git-scm.com/downloads), baixar e instalar o Git/GitBash;
 - No Windows Explorer, navegar até a pasta onde deseja clonar o projeto, abrir o GitBash (botão direito -> *Git Bash Here*) e digitar:

``git clone https://github.com/ramirobrandao/webjump-desafio-qa-frontend.git ``
 - Para que o Cypress funcione, é necessário que ele seja instalado atraves do *npm install* na pasta raiz do projeto
``npm install``

Foi usado o cypress-xpath no projeto para a captura de alguns elementos, como ele não é nativo, é necessário fazer a instalação
- Comando para instalar o xpath 
`npm install -D cypress-xpath`

## 🚀 Execução dos testes

- No terminal do VSCode deve ser executado o seguinte comando para que o Cypress seja executado:

`` npx cypress open``

- No terminal do VSCode se optar por executar em modo headless digite o seguinte comando: 

`` npx cypress run``

## 📊 Relatórios 

- Depois da execução dos testes os relatórios das features podem ser acessados no seguinte diretório:

`` /cypress/reports/mochawesome-report/``