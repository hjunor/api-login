import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Country House | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <h1 id="apilogin">API LOGIN</h1>

        <p>
          Este projeto é apenas uma api que tem como proposito estudos primários
          em desenvolvimentos front-end para todo ela entrega dois end-points um
          de sign-in e sign-up.
        </p>

        <h2 id="documentaodaapi">Documentação da API</h2>

        <h4 id="fazloginnaaplicao">Faz login na aplicação</h4>

        <pre>
          <code className="bash language-bash"> GET /api/login</code>
        </pre>

        <p>Content-Type: application/json</p>

        <p>
          | Parâmetro | Tipo | Descrição | | :-------- | :------- |
          :-------------- | | <code>email</code> | <code>string</code> |{' '}
          <strong>Obrigatório</strong> |
        </p>

        <p>
          | Parâmetro | Tipo | Descrição | | :--------- | :------- |
          :-------------- | | <code>password</code> | <code>string</code> |{' '}
          <strong>Obrigatório</strong> |
        </p>

        <h4 id="criausurionaaplicao">Cria usuário na aplicação</h4>

        <pre>
          <code className="bash language-bash"> GET /api/create</code>
        </pre>

        <p>Content-Type: application/json</p>

        <p>
          | Parâmetro | Tipo | Descrição | | :-------- | :------- |
          :-------------- | | <code>email</code> | <code>string</code> |{' '}
          <strong>Obrigatório</strong> |
        </p>

        <p>
          | Parâmetro | Tipo | Descrição | | :--------- | :------- |
          :-------------- | | <code>password</code> | <code>string</code> |{' '}
          <strong>Obrigatório</strong> |
        </p>

        <p>
          | Parâmetro | Tipo | Descrição | | :---------------- | :------- |
          :-------------- | | <code>passwordConfirm</code> | <code>string</code>{' '}
          | <strong>Obrigatório</strong> |
        </p>

        <p>
          | Parâmetro | Tipo | Descrição | | :-------- | :------- |
          :-------------- | | <code>phone</code> | <code>string</code> |{' '}
          <strong>Obrigatório</strong> |
        </p>

        <h2 id="variveisdeambiente">Variáveis de Ambiente</h2>

        <p>
          Para rodar esse projeto, você vai precisar adicionar as seguintes
          variáveis de ambiente no seu .env
        </p>

        <p>
          <code>DB</code> <strong>urlMongoDBClient</strong>
        </p>

        <p>
          <code>SECRET</code> <strong>hash</strong>
        </p>
      </section>
    </div>
  );
};

export default Home;
