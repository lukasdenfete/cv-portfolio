function Projects() {
    const projectList = [
        { title: "Whiskey Sour Carparts", description: "Hobbyprojekt där jag byggt en e-handelsplattform med användarforum. Användare kan skapa konton, följa varandra, skicka DMs samt skapa trådar och kommentera. Man kan även söka och bläddra bland produkter och lägga till i kundvagnen." },
        { title: "CV-projektet", description: "Skolprojekt där vi " },
        { title: "Hattmakarna", description: "Skolprojekt där vi " },
        { title: "Men in Black", description: "Skolprojekt där vi " },
        { title: "Podcastprojektet", description: "Skolprojekt där vi " },
        { title: "CV-Portfolio", description: "Den här sidan är byggt med create react app" },
      ];
    return (
        
        <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Skol- och hobbyprojekt</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projectList.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg shadow">
                <h3 className="text-x1 font-semibold mb-2">{project.title}</h3>
                <p className="text-grey-700">{project.description}</p>
                </div>
        ))}
        </div>
    </div>
    );
}
export default Projects;