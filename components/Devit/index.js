import Avatar from '../Avatar'

export default function Devit ({ avatar, username, message, id, date }) {
  return (
    <>
      <article>
        <div>
          <Avatar
            src={avatar}
            alt={username}
            />
        </div>
        <section>
          <strong>{username}</strong>
            <section>
              <date>{date.toDate().toDateString()}</date>
            </section>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article{
          border-bottom: 2px solid #eee;
          display: flex;
          padding: 10px 15px;
        }  
        div{
          margin-right: 10px;
        }
        p {
          margin: 3px 0;
          line-height: 1.3125;
          font-size: 14px;
        }
        date {
          color: #555;
          font-size: 13px;
        }
      `}</style>
    </>
  )
}
