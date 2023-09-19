import styles from './styles.module.css'
import Head from 'next/head'

export default function AppLayout ({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter 🍙 </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
