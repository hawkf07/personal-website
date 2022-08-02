

export function About () {
  
  return(
    <section name="about " className="w-full flex items-center justify-center">
    <div className="prose" >
    <h1 className=""> About Me </h1>
    <p>My Name is Fikri Fadillah. a Front End Web Developer Based On Bandung,Indonesia </p>
    <p> I loves technology and passionate about it </p> 
    <p> I loves What I Do</p> 
    <h2> Skills </h2>
    <div className="grid grid-cols-5 mobile:grid-cols-3 mobile:p-5 p-3 gap-3 items-center container">
    <button className="py-2 px-2 bg-blue-500 rounded"> HTML </button>
    <button className="py-2 px-2 bg-blue-500 rounded"> CSS</button>
    <button className="py-2 px-2 bg-blue-500 rounded"> Javascript</button>
    <button className="py-2 px-2 bg-blue-500 rounded"> Typescript</button>
    <button className="py-2 px-2 bg-blue-500 rounded">React</button>
    <button className="py-2 px-2 bg-blue-500 rounded">TailwindCSS</button>
    <button className="py-2 px-2 bg-blue-500 rounded">Express</button>
    <button className="py-2 px-2 bg-blue-500 rounded">NodeJS</button>
    <button className="py-2 px-2 bg-blue-500 rounded">NextJS</button>
    <button className="py-2 px-2 bg-blue-500 rounded">Git</button>
    </div>
    </div>
    </section>
  )
}
