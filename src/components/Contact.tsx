import { FaPhone, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";

function Contact() {
    return(
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">
                Kontakta Mig
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border rounded-lg shadow-lg bg-white">
                    <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center pb-2">
                        Skicka ett meddelande
                    </h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Namn" 
                            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500" required />
                        <input 
                            type="email" placeholder="E-post" 
                            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500" required />
                        <textarea 
                            placeholder="Meddelande..." rows={5} 
                            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500" required></textarea>
                        <button 
                            type="submit" 
                            className="w-full p-3 text-white font-semibold rounded hover:bg-blue-800 transition-colors"
                            style={{ backgroundColor: '#BFD8B8' }}>
                            Skicka
                        </button>
                    </form>
                </div>
                <div className="p-8 border rounded-lg shadow-lg bg-white flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-6 text-center text-gray-700  pb-2">
                        Kontaktuppgifter
                    </h3>
                    <p className="flex items-center justify-center mb-4 text-lg">
                        <FaEnvelope size={24} className="mr-3 text-gray-600"/>
                        <a href="mailto:lukas.rosendahl@hotmail.com" className="hover:underline">
                            lukas.rosendahl@hotmail.com
                        </a>
                    </p>
                    <p className="flex items-center justify-center mb-8 text-lg">
                        <FaPhone size={24} className="mr-3 text-gray-600"/>
                        070 260 60 44
                    </p>
                    <div className="flex justify-center space-x-2">
                        <a target="_blank" href="https://www.linkedin.com/in/lukas-rosendahl-7380052aa/" 
                            rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                            <FaLinkedin size={36}/>
                        </a>
                        <a 
                            target="_blank" 
                            href="https://github.com/lukasdenfete" 
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-gray-600 transition-colors">
                            <FaGithub size={36}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;