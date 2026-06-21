import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export const MainSection = () => {

     return (
          <section id="about" className="max-w-5xl grid justify-center border-2 mx-auto my-10 px-6 rounded-lg py-8">
               <h2 className="text-6xl font-bold mb-6">
                    Hariom Singh Thakur
               </h2>
               <p className="text-xl">
                    Full Stack Web Developer | Software Developer | Problem Solving Enthusiast | AI Dev Explorer
               </p>
               <br />
               <p className="text-4xl">Contacts</p>
               <div className="contacts flex justify-evenly gap-10 my-10">
                    <a href='mailto:hariomthakur638@gmail.com'><p><EmailIcon fontSize='large' />hariomthakur638@gmail.com</p></a>
                    <a href='https://github.com/hariom-hub' ><p><GitHubIcon fontSize='large' />github.com/hariom-hub</p></a>
                    <a href= "https://www.linkedin.com/in/hariom-singh-thakur-8b5089214"> <p><LinkedInIcon fontSize='large' />linkedin.com/in/hariomsinghthakur</p></a>
                    <a href="https://x.com/singhhariom01"> <p><XIcon fontSize='large' />x.com/singhhariom01</p></a>
               </div>

               <div>
                    h
               </div>

          </section>
     )
}