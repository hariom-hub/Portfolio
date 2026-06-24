import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export const MainSection = () => {

     const contacts = [
          {
               icon: <EmailIcon fontSize="large" />,
               text: "hariomthakur638@gmail.com",
               link: "mailto:hariomthakur638@gmail.com",
          },
          {
               icon: <GitHubIcon fontSize="large" />,
               text: "github.com/hariom-hub",
               link: "https://github.com/hariom-hub",
          },
          {
               icon: <LinkedInIcon fontSize="large" />,
               text: "linkedin.com/in/hariom-singh-thakur-8b5089214",
               link: "https://www.linkedin.com/in/hariom-singh-thakur-8b5089214",
          },
          {
               icon: <XIcon fontSize="large" />,
               text: "x.com/singhhariom01",
               link: "https://x.com/singhhariom01",
          },
     ];
     return (
          <section
               id="about"
               className="max-w-5xl mx-auto my-20 px-6 py-8 z-5 rounded-lg"
          >
               <div id="about_contact">
                    <h1 className="text-6xl font-bold mb-6">
                         Hariom Singh Thakur
                    </h1>

                    <p className="text-xl mb-8">
                         Full Stack Web Developer | Software Developer |
                         Problem Solving Enthusiast | AI Dev Explorer
                    </p>

                    <h2 className="text-3xl font-semibold mb-6">
                         Contacts
                    </h2>

                    <div className="flex flex-wrap gap-6">
                         {contacts.map((contact) => (
                              <a
                                   key={contact.link}
                                   href={contact.link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-2"
                              >
                                   {contact.icon}
                                   <span>{contact.text}</span>
                              </a>
                         ))}
                    </div>
               </div>
               
               <div className="skills my-8">

                    <h2 className="text-3xl  font-semibold mb-6">
                         Skills
                    </h2>

               </div>
               <div id='projects'>
                    <h2 className='text-3xl font-semibold mb-6'>Projects</h2>
               </div>
               <div id='experience'>
                    <h2 className='text-3xl font-semibold mb-6'>Experience</h2>
               </div>
               <div id='coding-profiles'>
                    <h2 className='text-3xl font-semibold mb-6'>Coding Profiles</h2>
               </div>

          </section>

     )
}