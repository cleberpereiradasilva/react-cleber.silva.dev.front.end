import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Content</title>
        <meta name="description" content="Cleber Pereira da Silva" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.clebersilva.dev">Content</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Content</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/cleberp/"
            className={styles.card}
          >
            <h2>Content &rarr;</h2>
          </a>

          <a
            href="https://github.com/cleberpereiradasilva"
            className={styles.card}
          >
            <h2>Content &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.clebersilva.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>Content</span>
        </a>
      </footer>
    </div>
  )
}
