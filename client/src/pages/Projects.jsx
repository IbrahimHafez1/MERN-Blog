const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly App",
      description:
        "A mobile application aimed at promoting environmental awareness and sustainable living practices. Users can track their carbon footprint, discover eco-friendly tips, and participate in challenges to reduce waste.",
    },
    {
      id: 2,
      title: "Community Garden Initiative",
      description:
        "A community-driven project focused on establishing and maintaining urban gardens. We organize workshops on gardening techniques, distribute seeds and plants, and collaborate with local schools to educate children about the importance of green spaces.",
    },
    {
      id: 3,
      title: "Tech for Good Hackathon",
      description:
        "An annual hackathon event bringing together developers, designers, and activists to create technological solutions for social and environmental challenges. Past projects include an app to connect volunteers with local charities and a platform to facilitate food redistribution to reduce waste.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold mb-4 text-blue-900">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">About Us</h2>
          <p className="text-gray-600">
            We are a team of passionate individuals dedicated to making a
            positive impact on our community and the environment through
            innovative projects and initiatives. With a focus on sustainability
            and social responsibility, we strive to create meaningful solutions
            that address pressing issues facing our world today.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Us</h2>
          <p className="text-gray-600">
            Have a question or want to collaborate on a project? We'd love to
            hear from you! Reach out to us at{" "}
            <a href="mailto:info@example.com" className="text-blue-700">
              info@example.com
            </a>{" "}
            or give us a call at{" "}
            <span className="text-blue-700">123-456-7890</span>.
          </p>
        </section>
      </div>
      <footer className="text-center text-gray-500 mt-8">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default ProjectsPage;
