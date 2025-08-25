import Link from 'next/link'

export default function AccessFlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>
        <Link href="/">Início</Link> | 
        <Link href="/register">Registro</Link> | 
        <Link href="/users">Usuários</Link>
      </nav>
      <hr />
      {children}
    </div>
  )
}