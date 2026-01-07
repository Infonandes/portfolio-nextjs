export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada</p>
        <a
          href="/"
          className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-block"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  )
}
