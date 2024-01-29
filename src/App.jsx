import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jhon"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, natus. Velit ullam quibusdam nisi reiciendis aliquam possimus rerum, porro sunt temporibus ex soluta, sequi suscipit. Pariatur, neque excepturi? Asperiores, delectus."
          />
          <Post author="Fulano" content="Novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
