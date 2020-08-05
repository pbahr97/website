import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>pbahr.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

       
      </main>

      <footer className={styles.footer}>
          Powered by&nbsp;<a href="https://nextjs.org/" target="__blank" rel="noopener noreferrer">NextJS</a>
      </footer>
    </div>
  )
}
