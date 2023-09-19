import { useState } from 'react'
import AppLayout from '../../../components/AppLayout'
import Avatar from '../../../components/Avatar'
import Button from '../../../components/button'
import GitHub from '../../../components/Icons/GitHub'
import { router } from 'next/router'

import { useAuth, addDevit } from '../../../firebase/client'

export default function ComposeTweet () {
  const currentUser = useAuth()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    addDevit({
      avatar: currentUser.photoURL,
      userName: currentUser.email,
      userId: currentUser.uid,
      content: message
    }).then(() => {
      router.push('/home')
      setLoading(false)
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <Avatar
            src={currentUser?.photoURL}
            alt='foto del usuario'
          />
          <textarea onChange={handleChange} placeholder='¿What are you thinking?'></textarea>
          <div>
            {
              loading && <GitHub fill='#000' width={32} height={32} />
            }
              <Button disabled={!message.length || loading}>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>
        {`
          div {
            padding: 15px;
          }

          textarea {
            border: 0;
            font-size: 18px;
            outline: 0;
            padding: 15px;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
