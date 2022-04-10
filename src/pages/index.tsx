import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <div className='justify-center items-center flex middle text-center'>
        <div className='lg:grid lg:text-center lg:relative mb-2 text-center gap-3'>
          <div />
          <h1>Coming Soon!</h1>
          <h2>This is currently a Work In Progress! Come back later!</h2>
        </div>
      </div>

      <div style={{ bottom: 0, left: 0 }}>
        <p className='text-center' style={{ fontSize:' 1.2rem' }}>
          Copyright &copy; 2022 - Present | <a href='https://github.com/ArtieFuzzz'> ArtieFuzzz </a> | (<a href='https://www.pixiv.net/en/artworks/90163114'> Background Source </a>) </p>
      </div>
    </>
  )
}

export default Index
