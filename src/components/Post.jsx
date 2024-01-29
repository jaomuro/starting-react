/* eslint-disable react/prop-types */

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/jaomuro.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="29 de Janeiro às 18:00h" dateTime="2024-01-29 18:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻{' '}
        </p>
        <p>
          Acesse e deixe seu feedback 👉 <a href="">devonlane.design</a>
        </p>
        <p>
          <a href="">#uiux #userexperience</a>
        </p>
      </div>
    </article>
  );
}
