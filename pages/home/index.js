import styles from './styles.module.css'
import AppLayout from '../../components/AppLayout'
import Devit from '../../components/Devit'
import { useAuth, useTimeline } from '../../firebase/client'

export default function Home () {
  const currentUser = useAuth()
  const timeline = useTimeline()

  console.log(currentUser)

  return (
    <AppLayout>
      <div>
        <header className={styles.header}>
          <h2 className={styles.h2}>inicio</h2>
        </header>
        <section className={styles.section}>
          {currentUser && timeline.map(({ docId, userName, avatar, content, createdAt }) => {
            return (
              <Devit
                key={docId}
                username={userName}
                avatar={avatar}
                message={content}
                id={docId}
                date={createdAt}
              />
            )
          })}
        </section>
        <nav className={styles.nav}>
          <h2>Menú</h2>
        </nav>
      </div>
    </AppLayout>
  )
}
