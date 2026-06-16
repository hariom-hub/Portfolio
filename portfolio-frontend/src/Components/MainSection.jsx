export const MainSection = () => {

     return (
          <div>
               <main className="max-w-6xl mx-auto px-8 mt-12 space-y-24">

                    {/* 1. Hero / Intro Section */}
                    <section id="about" className="py-12 md:py-20 max-w-3xl">
                         <p className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-3">Hi there, I am</p>
                         <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                              Building digital products, brands, and experiences.
                         </h2>
                         <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
                              I am a frontend developer specializing in building beautiful, highly functional web applications.
                              Currently focusing on creating clean user interfaces with React and Tailwind CSS.
                         </p>
                         <div className="mt-8">
                              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition duration-200 shadow-sm">
                                   Get in touch
                              </a>
                         </div>
                    </section>

                    {/* 2. Projects Section */}
                    <section id="projects" className="border-t border-slate-200/60 pt-16">
                         <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
                              <h3 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h3>
                              <p className="text-slate-500 mt-2 md:mt-0">A selection of things I've built recently</p>
                         </div>

                         {/* Grid Layout for Cards */}
                         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                              {/* Project Card 1 */}
                              <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                   <div className="h-48 rounded-lg bg-slate-100 mb-6 flex items-center justify-center text-slate-400 font-medium">
                                        [ Project Image Placeholder ]
                                   </div>
                                   <h4 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">E-Commerce Dashboard</h4>
                                   <p className="mt-2 text-sm text-slate-600 leading-relaxed">A real-time sales and inventory monitoring dashboard built for small businesses.</p>
                                   <div className="flex gap-2 mt-4 flex-wrap">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 text-cyan-700 rounded-md">React</span>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">Tailwind</span>
                                   </div>
                              </div>

                              {/* Project Card 2 */}
                              <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                   <div className="h-48 rounded-lg bg-slate-100 mb-6 flex items-center justify-center text-slate-400 font-medium">
                                        [ Project Image Placeholder ]
                                   </div>
                                   <h4 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Weather Application</h4>
                                   <p className="mt-2 text-sm text-slate-600 leading-relaxed">An elegant weather application leveraging third-party APIs with dynamic visual changes.</p>
                                   <div className="flex gap-2 mt-4 flex-wrap">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 text-cyan-700 rounded-md">JavaScript</span>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">API</span>
                                   </div>
                              </div>

                         </div>
                    </section>

                    {/* 3. Contact Section */}
                    <section id="contact" className="border-t border-slate-200/60 pt-16 pb-12 text-center max-w-xl mx-auto">
                         <h3 className="text-3xl font-bold text-slate-900">Let's work together</h3>
                         <p className="mt-4 text-slate-600">
                              I am currently available for freelance work and full-time frontend roles. If you have a project in mind or just want to chat, feel free to drop an email.
                         </p>
                         <p className="mt-6 text-xl font-bold text-cyan-600 hover:underline cursor-pointer">
                              your.email@example.com
                         </p>
                    </section>
               </main>
          </div>
     )
}