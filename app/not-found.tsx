import Link from 'next/link'

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}