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
               <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo quam dolore libero eaque, maiores est sequi porro rerum mollitia, et saepe eos. Minima non sunt tenetur adipisci consequuntur corrupti.
               Modi iste voluptatum in unde, eveniet dignissimos repellat perferendis. Cupiditate dolorem voluptate architecto! Praesentium eveniet dignissimos, voluptatem asperiores quisquam illum velit, amet corporis, voluptate consequuntur nam aut vitae nobis mollitia?
               Ab nisi accusamus perferendis cumque natus tenetur rem dolore dignissimos amet, eos ut recusandae cupiditate inventore, dolorum debitis reprehenderit! Corporis tempora iure magnam amet itaque architecto, asperiores obcaecati earum. Earum?
               Dolore, illo at accusantium dolores recusandae consectetur nihil eligendi maxime omnis officiis, fugiat id voluptatum illum quia eum quasi provident a? Hic repellendus totam dolor nisi possimus animi obcaecati ad!
               Tempora reprehenderit, quibusdam adipisci perferendis molestiae officia minus perspiciatis ratione, facere illo dolor aliquam aut rem accusamus ab. Inventore repudiandae, odio voluptas rem deleniti facere molestiae asperiores rerum harum deserunt?
               Maxime dolor debitis rem quia distinctio quos eaque aliquam optio perspiciatis consequatur at provident nam corporis recusandae obcaecati facere expedita, sequi amet! Quos, similique magni. Illo quibusdam illum saepe asperiores!
               Alias, quaerat recusandae. Corporis tempora a sint aliquid sunt mollitia vitae dolor molestias possimus sapiente, cumque molestiae exercitationem deleniti debitis est obcaecati, ducimus cupiditate nihil eveniet nisi officiis eius! Nulla.
               Neque porro consequatur ab alias tempore, in reprehenderit molestiae nobis soluta velit modi voluptatem. Illo dolorem ipsa aperiam. Suscipit architecto ipsa quam, explicabo doloribus exercitationem obcaecati necessitatibus dolorem reprehenderit id?
               Illum natus beatae quasi voluptas dicta facilis. Explicabo sequi voluptatibus impedit exercitationem nostrum voluptate at nemo, nihil iure, libero aliquid excepturi itaque debitis veniam incidunt. Dolores ad iure debitis natus.
               Adipisci tempora nulla repellendus assumenda aperiam! Voluptatibus nam temporibus reiciendis sint aut quidem dolorum rerum fugiat! Voluptate ipsa deleniti veniam laboriosam exercitationem, numquam reiciendis ea rem et vero odit dolore.uta, neque magnam aperiam alias ipsam excepturi dolor, voluptate culpa quae accusamus laudantium voluptates fugiat delectus?
               </p>

          </section>

     )
}