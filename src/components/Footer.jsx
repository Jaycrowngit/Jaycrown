import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-deep-space text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Jay<span className="text-meltgreen">crownHub</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Senior Developer. Systems thinker. Building for scale.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-meltgreen transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="hover:text-meltgreen transition-smooth">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Collaborate</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/freelance" className="hover:text-meltgreen transition-smooth">
                  Freelance Work
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-meltgreen transition-smooth">
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@jaycrown.dev" className="hover:text-meltgreen transition-smooth">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Jaycrown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
