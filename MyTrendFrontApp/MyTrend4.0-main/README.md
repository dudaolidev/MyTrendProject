# MyTrend Project
### Projeto Challenge FIAP 2024

## Sobre o MyTrend
![image](https://github.com/user-attachments/assets/78281615-9c2c-4315-968a-2356ce4881ed)


## Integrantes:
- Guilherme Rocha Toledo dos Santos - RM99396
- Gustavo Nunes Pereira - RM551496
- Isadora Tatajuba Moreira Pinto - RM552522
- Maria Eduarda Sousa de Oliveira - RM552477
- Matheus Wasserman Fernandes Silva - RM550712

## Arquitetura de pastas 

*/MyTrend-main*  
│  
├── */android*                  # Configurações e código específico para Android  
│   ├── */app*                  # Contém o código fonte da aplicação Android  
│   └── */gradle*               # Arquivos relacionados ao Gradle  
│  
├── */cadastro*                 # Código relacionado à tela de cadastro  
│  
├── */configuracao*             # Código relacionado à tela de configurações  
│  
├── */confirmacaologin*         # Código da tela de confirmação de login  
│  
├── */editProfile*              # Código da tela de edição de perfil  
│  
├── */esquecisenha*             # Código da tela de recuperação de senha  
│  
├── */firstpage*                # Tela inicial  
│  
├── */login*                    # Tela de login  
│  
├── */mainpage*                 # Tela principal  
│  
├── */perfil*                   # Tela de perfil  
│  
├── */src*  
│   ├── */assents*              # Imagens e ícones utilizados na aplicação  
│  
├── *App.tsx*                   # Arquivo principal do aplicativo  
├── *README.md*                 # Documentação do projeto  
├── *API.md*                    # Detalhes da API  
├── *package.json*              # Dependências e scripts do Node.js  
├── *tsconfig.json*             # Configurações do TypeScript  
├── *babel.config.js*           # Configurações do Babel  
└── *.gitignore*                # Arquivos e pastas ignorados pelo Git  

## Como rodar a aplicação
Siga as instruções abaixo para configurar e rodar a aplicação localmente:

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado as seguintes ferramentas:

- *Node.js* (versão 14.x ou superior): [Instalar Node.js](https://nodejs.org)
- *npm* (gerenciador de pacotes do Node.js) ou *Yarn*: O npm é instalado automaticamente com o Node.js.
- *Android Studio* (se for rodar no emulador Android) ou dispositivo físico Android/iOS.
- *Expo CLI* (para rodar a aplicação React Native):  
  
  npm install -g expo-cli
  

### >  Passo a Passo

#### Clone o repositório:

Primeiro, clone o repositório do projeto na sua máquina:


git clone https://github.com/seu-usuario/MyTrend.git
cd MyTrend
  

#### Inicie a aplicação:


Com tudo configurado, você pode iniciar a aplicação com o comando:


npx expo start


#### Abra o aplicativo no seu dispositivo ou emulador:

No terminal, aparecerá um QR code. Você pode escaneá-lo com o aplicativo Expo Go no seu celular (disponível na Play Store ou App Store).  
Se estiver usando um emulador Android ou iOS, o Expo também abrirá automaticamente.
