import {Button} from './Button'
export function About() {
  return (
    <section name="about " className="w-full flex items-center justify-center">
      <div className="p-3">
        <div className="prose">
          <h1 className=""> About Me </h1>
          <p>
            My Name is Fikri Fadillah. a Front End Web Developer Based On
            Bandung,Indonesia{" "}
          </p>
          <p> I loves technology and passionate about it </p>
          <p> I loves What I Do</p>
          <h2> Skills </h2>
        </div>
        <div className="grid not-prose grid-cols-5 mobile:grid-cols-2 mobile:p-5 p-3 gap-3 items-center">
          <Button>HTML</Button>
          <Button>CSS </Button>
          <Button> Javascript</Button>
          <Button>Typescript</Button>

          <Button > Typescript</Button>
          <Button >React</Button>
          <Button >TailwindCSS</Button>
          <Button >Express</Button>
          <Button >NodeJS</Button>
          <Button >NextJS</Button>
          <Button >Git</Button>
          <Button >BootStrap</Button>
        </div>
      </div>
    </section>
  );
}
