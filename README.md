# Teste Técnico Frontend - Simples Dental

## Descrição
O objetivo deste teste é avaliar a capacidade do candidato em desenvolver uma aplicação frontend utilizando Angular.

## Requisitos
- [Requisitos](https://docs.google.com/document/d/1PQOAqM1Wmk_TdLmYzli2eS_CwRc4Z4QlrtMzDQkYd7k/edit?usp=sharing)

## Controle de versão
Os commits foram feitos utilizando o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Arquitetura
Foram criados 4 módulos:

####
- **Core**: Módulo que contém os serviços, interceptors e guards compartilhados por toda a aplicação.
- **Shared**: Módulo que contém os componentes, diretivas e pipes que são compartilhados por toda a aplicação. Neste módulo foram criados componentes para encapsular os componentes do [Angular Material](https://material.angular.io/), para que possam ser reutilizados em toda a aplicação, mantendo a consistência visual e melhorando a manutenibilidade.
- **Auth**: Módulo que contém os componentes, containers e serviços relacionados à autenticação.
- **Albums**: Módulo que contém os componentes, containers e serviços relacionados aos álbuns.

## Execução
Para executar a aplicação, basta executar os seguintes comandos:

```bash
  npm install
  ng serve
```

## Páginas
- **auth/login**: Página de login.
- **/albums**: Página que lista os álbuns do usuário logado.
- **/albums/:id:** Página que lista as fotos de um álbum.
