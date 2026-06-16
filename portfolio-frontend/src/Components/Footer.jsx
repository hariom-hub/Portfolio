export const Footer = () => {

     return (
          <footer className="border-t border-white-200 border-radius-10 mt-24 bg-black">
               <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>

                    {/* Social Links */}
                    <div className="flex  gap-6">
                         <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
                         <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition-colors">LinkedIn</a>
                         <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition-colors">Twitter</a>
                    </div>
               </div>
          </footer>
     )
}