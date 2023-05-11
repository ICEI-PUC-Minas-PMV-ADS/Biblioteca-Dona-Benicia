import Avatar from "../../components/avatar/index";
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Header() {

  return (
    <header className="bg-customGre">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Avatar/>
           
          </a>
        </div>
        <div className="flex lg:flex-1 justify-between ">
          <a href="#" className="-m-1.5 p-1.5 ml-auto bg-[rgba(51,117,97,1)] rounded-full p-2">
          <Link to="/">
      <FaHome className="text-white hover:text-white transition-colors duration-200 text-2xl " />
    </Link>
          
          </a>
        </div>
       
           </nav> 

             
    </header>
  )
}
