import {MdEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
export function ContactInfo () {

    return (
        <section name="contact-info" className="flex flex-col gap-5 h-96 items-center justify-center" >
      <h1 className="text-4xl text-center"> Contact Info </h1>
            <div className="flex flex-col justify-center items-center prose">

                <h2 className="flex gap-3 w-96 items-center"><HiLocationMarker size="2em"/> <span>BANDUNG | INDONESIA</span> </h2>
                <h2 className="flex gap-3 items-center justify-around w-96"><MdEmail size="2em"/> <span> fikrifadilah299@gmail.com </span> </h2>
                <h2 className="flex gap-3 w-96 items-center text-white"><FaGithub size="2em"/> <a href="#"> Hawkf07</a> </h2>
            </div>
        </section>
    )
}
