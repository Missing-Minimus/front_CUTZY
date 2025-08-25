import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <section className={styles.container}>      
      <div className={styles.wrapper}>
        <Image 
          src="/CUTZY.png" 
          alt="CUTZY Logo" 
          width={200} 
          height={100} 
        />
        <h1>Bem-vindo a CUTZY</h1>
      </div>
      
      <Link href="/register">
        <button className={styles.button}>Ir para Registro</button>
      </Link>
    </section>
  )
}