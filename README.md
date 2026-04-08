P# Desafio 2 — Catálogo com API

## Visão geral

Neste desafio você irá construir uma **aplicação responsiva que consome uma API externa** e exibe um catálogo de produtos.

O objetivo é aprender a:

* consumir APIs
* renderizar dados dinamicamente
* manipular dados na interface
* manter uma interface responsiva

Utilizaremos a **Fake Store API**, que fornece um conjunto de produtos fictícios para testes.

[https://fakestoreapi.com/](https://fakestoreapi.com/)

---

# Referência visual

A interface deve se parecer com um **catálogo de produtos moderno**, semelhante a aplicações reais.

![exemplo](./examples/example.png)

Exemplo de estrutura comum:

* lista de produtos em **grid/flex**
* **sidebar ou barra de filtros**
* **cards de produto**

O layout pode usar:

* sidebar com categorias + grid de produtos
* filtros no topo + grid de produtos

Não é necessário copiar exatamente a solução de referência.

---

# Stack obrigatória

A implementação deve utilizar:

* **React**
* **Vite**
* **TypeScript**
* **Tailwind CSS**

Este repositório fornece um projeto inicial com **React + Vite + TypeScript + TailwindCSS**.

# API utilizada

Utilize a **Fake Store API**.

Produtos:

```
https://fakestoreapi.com/products
```

Categorias:

```
https://fakestoreapi.com/products/categories
```

Apenas eletrônicos

```
https://fakestoreapi.com/products/category/electronics
```

---

# Objetivo

Construir uma aplicação responsiva que:

* consuma dados da API
* exiba produtos em um catálogo
* permita alguma **interação dinâmica com os dados**

---

# Requisitos obrigatórios

Para aprovação no desafio:

* consumir dados da Fake Store API
* exibir produtos dinamicamente
* cada produto deve mostrar pelo menos:

  * imagem
  * título
  * preço

* ter **componentização mínima**
* interface **responsiva**
* realizar **deploy da aplicação**

Além disso, a aplicação deve possuir **pelo menos um comportamento dinâmico**, como por exemplo:

* filtro por categoria
* ordenação por preço
* busca de produtos

---

# Melhorias opcionais

Os itens abaixo não são obrigatórios, mas aumentam a qualidade da solução:

* separação entre UI e lógica de dados
* melhor organização de componentes
* melhor tipagem TypeScript
* melhor hierarquia visual
* implementar loading state
* implementar error state

---

# Como desenvolver e entregar

## 1. Faça um fork do repositório

Clique em **Fork** no topo desta página e clone o seu fork:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Desenvolva a aplicação

Durante o desenvolvimento:

```bash
npm run dev
```

Antes de enviar:

```bash
npm run build
```

---

## 4. Envie sua solução

Abra um **Pull Request do seu fork para este repositório**, contendo screenshots do layout em **desktop e mobile**

Após o envio, sua solução será revisada. Feedback poderá ser fornecido antes da aprovação.

## 5. Solução de Referência
Esse site demonstra um modelo de solução, que implementa todos os requisitos obrigatórios e opcionais do desafio:

https://desafio-2-solution.vercel.app/

