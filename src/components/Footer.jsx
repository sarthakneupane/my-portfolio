import { Mail, Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Divider */}
        <div className="border-t border-gray-700 pt-10 text-center">

          {/* Name */}
          <h4 className="text-lg font-semibold text-white mb-2">
            Sarthak Neupane
          </h4>

          {/* Copyright */}
          <p className="text-sm text-gray-400 mb-6">
            © {new Date().getFullYear()}, All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:neupanesarthak3000@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://github.com/sarthakneupane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/sarthakneupane19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
