function Projects() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center mt-40 space-x-4 mb-10">
        <div className="relative w-64 h-48 bg-blue-200 rounded border-4 border-blue-300 shadow-md m-5 overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:w-[50vh] hover:h-[70vw]">
          <div className="absolute top-0 left-0 w-full bg-blue-100 border-b border-blue-200 flex items-center justify-center p-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Visit Portfolio
            </a>
          </div>
          <div className="w-full h-full overflow-hidden pt-10">
            <iframe
              src="../index.html"
              width="100%"
              height="100%"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;