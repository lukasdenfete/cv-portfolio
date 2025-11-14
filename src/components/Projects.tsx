function Projects() {
    const projectList = [
        { title: "Projekt 1", description: "Beskrivning av projekt 1" },
        { title: "Projekt 2", description: "Beskrivning av projekt 2" },
        { title: "Projekt 3", description: "Beskrivning av projekt 3" },
        { title: "Projekt 4", description: "Beskrivning av projekt 4" },
      ];
    return (
        
        <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Projekt</h2>
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