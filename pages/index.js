import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import Avatar from '../components/Avatar'
import Button from '../components/button'
import GitHub from '../components/Icons/GitHub'
import AppLayout from '../components/AppLayout'

import { loginWithGitHub, logOut, singUp, useAuth, loginWithEmail } from '../firebase/client'

export default function Home () {
  // refs from inputs
  const emailRef = useRef()
  const passwordRef = useRef()
  // Return from custom hook
  const currentUser = useAuth()
  // useState for loading state
  const [loading, setLoading] = useState(false)
  // useRouter
  const router = useRouter()

  // sign up
  async function handleSingUp () {
    setLoading(true)
    try {
      await singUp(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert('error')
    }
    setLoading(false)
  }
  // con asycn y await hay que usar try-catch // sign up con email y contraseña
  async function handleLogIn () {
    setLoading(true)
    try {
      await loginWithEmail(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert('error')
    }
    setLoading(false)
  }
  // con promises // sing up con github
  async function handleLoginWithGithub () {
    setLoading(true)
    loginWithGitHub()
      .then(() => {
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }
  // log out
  async function handleLogOut () {
    setLoading(true)
    try {
      await logOut()
    } catch {
      alert('error')
    }
    setLoading(false)
  }
  // Cambiar a /home si hay un usuario loggeado
  // useEffect(() => {
  //   setLoading(true)
  //   router.replace('home')
  //   setLoading(false)
  // }, [currentUser])

  return (
    <AppLayout>
      <section className={styles.loginSection}>
        <img className={styles.logo} src='/devter-logo.png' alt='Logo' />
        <h1>devter</h1>
        <h2>Talk about developent<br />with developers 👩‍💻👨‍💻</h2>
        <div className={styles.inputs}>
          <input ref={emailRef} placeholder='email' />
          <input ref={passwordRef} type='password' placeholder='password' />
        </div>
        {
          !currentUser &&
          <Button fondo='#555' disabled={loading} onClick={handleSingUp}>Sing up</Button>
        }
        {
          !currentUser &&
          <Button fondo='#09f' disabled={loading} onClick={handleLogIn}>Log in</Button>
        }
        {
          currentUser &&
          <Button fondo='red' disabled={loading} onClick={handleLogOut}>log Out</Button>
        }
        {
          loading && <GitHub fill='#000' width={32} height={32} />
        }
        {
          !currentUser &&
          <Button onClick={handleLoginWithGithub}>
            <GitHub fill='#fff' width={12} height={12} />Login with GitHub
          </Button>
        }
        {
          currentUser &&
          <Avatar
            alt='foto usuario'
            src={currentUser.photoURL}
            text={currentUser.email}
          />
        }
      </section>
    </AppLayout>
  )
}
