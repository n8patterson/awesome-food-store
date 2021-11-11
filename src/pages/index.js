import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to restaurant finder!
        </h1>

        <p className={styles.description}>
          This is a simple web app built with Next.js and React that displays restaurant information from a json-server.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.n8patterson.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ 2021 Nathan Patterson
        </a>
      </footer>
    </div>
  )
}
