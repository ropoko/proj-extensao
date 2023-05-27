import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
     <Header />
     <section className={styles.first}>
      <div>
        <h1>Pastoral da Ecologia Integral</h1>      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className={styles.buttons}>
          <button className={styles.info} type='button'>Saiba Mais</button>
          <button className={styles.video} type='button'>
            <Image alt='Logo Video' src='/button-video.png' width={24} height={24}></Image>
            Assistir Video
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <Image alt='Pastoral da Ecologia Integral' src='/ecologia.png' width={524} height={524}></Image>
      </div>
     </section>
    </main>
  )
}
