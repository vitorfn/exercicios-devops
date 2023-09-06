Passo 1) Instalar ubuntu no container

    docker run ubuntu

Passo 2) Rodar o ubuntu

    docker run -it --rm ubuntu /bin/bash

Passo 3) Em outro terminal, verifiquei se o container estava rodando

    docker ps

Passo 4) Atualizei os pacotes do ubuntu

    apt-get update

Passo 5) Instalei o curl
    apt-get install curl

Passo 6) Verifiquei a versão do curl

    curl --version