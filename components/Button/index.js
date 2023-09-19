export default function Button ({ children, onClick, fondo = '#000', disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled} >
        {children}
      </button>
      <style jsx>{`
        button{
          align-items: center;
          background: ${fondo};
          border-radius: 30px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 12px;
          font-weight: 400;
          justify-content: center;
          margin-top: 10px;
          padding: 8px 24px;
          transition: opacity 200ms ease;
          width: 175px;
          user-select: none;
        }

        button[disabled]{
          pointer-events: none;
          opacity: .2;
        }

        button > :global(svg){
          margin-right: 8px;
        }

        button:hover{
          opacity: .7;
        }
      `}</style>
    </>
  )
}
