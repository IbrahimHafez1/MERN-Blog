import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <Footer container className="border-t-2 border-gray-300 bg-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <Link to="/" className="text-lg font-semibold text-gray-900 mb-2">
              <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 rounded-lg text-white">
                Ibrahim's
              </span>{" "}
              Blog
            </Link>
            <p className="text-gray-700 text-sm mb-4">
              A platform for sharing ideas and connecting with others.
            </p>
          </div>
          <div className="flex flex-col">
            <Footer.Title title="Follow Me" />
            <Footer.LinkGroup>
              <Footer.Link
                href="https://github.com/IbrahimHafez1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 mb-2 flex items-center"
              >
                <FaGithub className="mr-2" />
                Github
              </Footer.Link>
              <Footer.Link
                href="https://www.linkedin.com/in/ibrahim-hafez-923307254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 mb-2 flex items-center"
              >
                <FaLinkedin className="mr-2" />
                Linkedin
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="flex flex-col">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup>
              <Footer.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 mb-2"
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 mb-2"
              >
                Terms &amp; Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
