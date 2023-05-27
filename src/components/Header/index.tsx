import Image from 'next/image'
import styles from '../../app/page.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Image alt="Logo CNBB - Regional Sul 1" src="/logo.png" width={95} height={88}></Image>

      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/regional'}>O Regional</Link>
        <Link href={'/noticias'}>Notícias</Link>
        <Link href={'/artigos'}>Artigos</Link>
        <Link href={'/downloads'}>Downloads</Link>
        <Link href={'/contatos'}>Contatos</Link>
        <Link href={'search'}>
          <Image alt='Lupa' src='/magnifier.png' width={24} height={24}></Image>
        </Link>
      </nav>
    </header>
  )
}

export default Header
