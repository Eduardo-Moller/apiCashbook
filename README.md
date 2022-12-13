# Api cashbook 💲

Api desenvolvida para mostrar as saida e entradas de caixa de uma empresa.

##

### 📋 Como rodar a aplicação

Dentro da pasta raiz do projeto execute o comando seguinte

```
npm i
```

Logo em configure o banco de dados e execute o comando

```
npm start
```

agora entre no link 

```
http://localhost:3000/
```

✔️ Sua aplicação ja estará rodando

##

### Rotas da api

<p>GET   /moviments/cashbalance :Retorna um objeto contendo os valores de entrada, saída e saldo do caixa.</p>

<p>GET   /moviments/io :Retorna um objeto contendo o histórico de entradas e saídas de caixa ordenados por data.</p>

<p>GET   /moviments/io/:year/:month :Retorna um objeto contendo o histórico de entradas e saídas de uma determinada data.</p>

<p>GET   /moviments/io/:year/:month /:month/:year :Retorna um objeto contendo o histórico de entradas e saídas entre duas determinadas datas.</p>

<p>GET   /moviments/:year/:month :Retorna um objeto contendo todos os movimentos de valores de uma determinada data.</p>

<p>POST   /user/login :Rota de login</p>

## 

### Conta para a realização de testes

E-mail: email@mail.com.br <br>
Senha: 45b45c21a0cdd1479235e69c936a09e6
