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
        <p>Fala galera 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">devonlane.design</a>
        </p>
        <p>
          <a href="">##novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
