import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DottedBackground from "../components/DottedBackground";

const About: React.FC = () => {
  return (
    <DottedBackground>
      <Header />

      <main className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8 px-6">
        <div className="bg-gray-900 bg-opacity-70 p-8 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">About Toolbox</h1>
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Welcome to the Toolbox - a curated collection of useful tools,
              resources, and services for designers, developers, and creative
              professionals.
            </p>

            <p>
              This collection is maintained by Soma Hargitai and includes a wide
              range of tools from typography resources to AI services,
              development frameworks, and creative coding platforms.
            </p>

            <p>
              Each tool is carefully selected based on its utility, innovation,
              and potential value to the creative workflow. The collection is
              regularly updated with new discoveries.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>

            <p>
              Browse the tools by category using the filter system, or search
              for specific tools by name or description. Each card includes a
              direct link to the tool as well as a brief description of its
              functionality.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Suggest a Tool</h2>

            <p>
              Have a suggestion for a tool that should be included? Feel free to
              reach out and share your recommendations. This collection grows
              through community input and shared discoveries.
            </p>

            <div className="mt-8 border-t border-gray-700 pt-6">
              <p className="text-gray-400">
                Thank you for visiting the Toolbox. I hope you find resources
                that enhance your creative and technical projects.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </DottedBackground>
  );
};

export default About;
