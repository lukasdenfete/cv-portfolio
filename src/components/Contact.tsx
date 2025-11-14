import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


function Contact() {
    return(
        <>
        <div className="max-w-4x1 mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Kontakt</h2>
        <p className="flex items-center justify-center mb-3">
            <FaEnvelope size={24} className="mr-2"/>
            lukas.rosendahl@hotmail.com
            </p>
        <p className="flex items-center justify-center">
            <FaPhone size={24} className="mr-2"/>
            070 260 60 44
            </p>
            <br/>
        <p className="flex items-center justify-center">
            <a target="_blank" href="https://www.linkedin.com/in/lukas-rosendahl-7380052aa/" rel="noopener noreferrer">
            <FaLinkedin size={30} className="mr-2 text-blue-700"/></a>
            <a target="_blank" href="https://github.com/lukasdenfete" rel="noopener noreferrer">
            <FaGithub size={30}/></a>
            </p>
        </div>

        </>
    );
}
export default Contact;
export{};