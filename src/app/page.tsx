import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <Image 
        src="/CUTZY.png" 
        alt="CUTZY Logo" 
        width={200} 
        height={100} 
      />
      <h1>Bem-vindo a</h1>
      <p>CUTZY</p>
      <Link href="/register">
        <button>Ir para Registro</button>
      </Link>
    </div>
  )
}