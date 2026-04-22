/**
 * Componente para a página de erro 404 (Não Encontrado).
 * Substitui o componente NotFound original, adaptando-o para o Next.js.
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Página não encontrada</p>
        <Link href="/" className="text-primary underline hover:text-primary/80">
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
