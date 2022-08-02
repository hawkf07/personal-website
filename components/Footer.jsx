export function Footer ( ) {
  const thisYear = new Date().getFullYear()
  return(
    <footer className="flex flex-col items-center justify-center bg-blue-500 h-[5vh]">
    <div className="flex prose justify-center items-center"> 
    <p> COPYRIGHT Fikri Fadillah {String(thisYear)} </p>
    </div>
    </footer>
  )
}
