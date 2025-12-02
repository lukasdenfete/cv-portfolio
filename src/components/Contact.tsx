import ContactInfo  from './ContactInfo';

function Contact() {
    return(
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-extrabold mb-12 text-center">
                Kontakta Mig
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border rounded-lg shadow-lg bg-white" style={{ backgroundColor: '#C3E0E9'}}>
                    <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center pb-2">
                        Skicka ett meddelande
                    </h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Namn" 
                            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500"
                            style={{  backgroundColor: '#C3E0E9', color: '#003442', borderColor: '#003442' }} required />
                        <input type="email" placeholder="E-post" 
                            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500" 
                            style={{  backgroundColor: '#C3E0E9', color: '#003442', borderColor: '#003442' }} required />
                        <textarea 
                            placeholder="Meddelande..." rows={5} 
                            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500" 
                            style={{  backgroundColor: '#C3E0E9', color: '#003442', borderColor: '#003442' }} required></textarea>
                        <button 
                            type="submit" 
                            className="w-full p-3 text-white font-semibold rounded hover:bg-blue-800 transition-colors"
                            style={{ backgroundColor: '#F0E68C', color: '#003442' }}>
                            Skicka
                        </button>
                    </form>
                </div>
                <div className="p-8 border rounded-lg shadow-lg flex flex-col justify-center" 
                style={{ backgroundColor: '#C3E0E9' ,color: '#003442'}}>
                    <h3 className="text-xl font-semibold mb-6 text-center pb-2">
                        Kontaktuppgifter
                    </h3>
                    <ContactInfo iconSize={24} linkSize={36} />
                </div>
            </div>
        </div>
    );
}
export default Contact;