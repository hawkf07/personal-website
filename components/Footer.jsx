import {MdEmail} from 'react-icons/md'
export function Footer ( ) {
  const thisYear = new Date().getFullYear()
  return(
    <footer className="flex p-5 flex-col bg-blue-500 justify-center items-center">
    <div className="flex prose justify-center items-center flex-col"> 
    <a href="mailto:fikrifadilah299@gmail.com" className="flex items-center gap-5"> <MdEmail/> fikrifadilah299@gmail.com </a> 
    <p> COPYRIGHT Fikri Fadillah {String(thisYear)} </p>
    </div>
    </footer>
  )
}
