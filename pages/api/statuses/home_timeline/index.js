const timeline = [
  {
    id: '0',
    avatar:
      'https://i.pinimg.com/originals/d3/db/da/d3dbda7f3c0ad1a4a96e78628049e339.jpg',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
      'https://i.pinimg.com/originals/f1/0f/32/f10f327fa500f4f75523dea7452b7214.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://i.pinimg.com/originals/a2/cd/01/a2cd01908456f70a2d15d3d8d61a069c.jpg',
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '3',
    avatar:
      'https://i.pinimg.com/originals/d3/db/da/d3dbda7f3c0ad1a4a96e78628049e339.jpg',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '4',
    avatar:
      'https://i.pinimg.com/originals/f1/0f/32/f10f327fa500f4f75523dea7452b7214.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '5',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://i.pinimg.com/originals/a2/cd/01/a2cd01908456f70a2d15d3d8d61a069c.jpg',
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '6',
    avatar:
      'https://i.pinimg.com/originals/d3/db/da/d3dbda7f3c0ad1a4a96e78628049e339.jpg',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '7',
    avatar:
      'https://i.pinimg.com/originals/f1/0f/32/f10f327fa500f4f75523dea7452b7214.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '8',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://i.pinimg.com/originals/a2/cd/01/a2cd01908456f70a2d15d3d8d61a069c.jpg',
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  }
]

export default (req, res) => {
  res.status(200).json(timeline)
}
