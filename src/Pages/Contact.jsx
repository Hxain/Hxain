function Contact() {
  return (
    <div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-lg mb-6 text-white">Feel free to reach out to me through any of the following channels:</p>
        <ul className="flex flex-wrap justify-center mb-6 md:flex-col md:space-y-4">
          <li className="mr-4 mb-4 md:w-1/2 xl:w-1/4">
            <a target="_blank" href="https://www.upwork.com/nx/create-profile/resume-import" className="text-white hover:text-gray-300 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png" alt="Upwork Icon" className="w-6 h-6 mr-2" />
              <span className="ml-2 text-white font-bold">Upwork</span>
            </a>
          </li>
          <li className="mr-4 mb-4 md:w-1/2 xl:w-1/4">
            <a target="_blank" href="https://www.fiverr.com/devhuxin?up_rollout=true" className="text-white hover:text-gray-300 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145315.png" alt="Fiverr Icon" className="w-6 h-6 mr-2" />
              <span className="ml-2 text-white font-bold">Fiverr</span>
            </a>
          </li>

          <li className="mr-4 mb-4 md:w-1/2 xl:w-1/4">
            <a target="_blank" href="mailto:your_email@gmail.com" className="text-white hover:text-gray-300 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Gmail Icon" className="w-6 h-6 mr-2" />
              <span className="ml-2 text-white font-bold">Gmail</span>
            </a>
          </li>
          <li className="mr-4 mb-4 md:w-1/2 xl:w-1/4">
            <a target="_blank" href="https://wa.me/your_phone_number" className="text-white hover:text-gray-300 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp Icon" className="w-6 h-6 mr-2" />
              <span className="ml-2 text-white font-bold">WhatsApp</span>
            </a>
          </li>
          <li className="mr-4 mb-4 md:w-1/2 xl:w-1/4">
            <a target="_blank" href="https://github.com/Hxain" className="text-white hover:text-gray-300 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Icon" className="w-6 h-6 mr-2" />
              <span className="ml-2 text-white font-bold">GitHub</span>
            </a>
          </li>
          <li className="mr-4 mb-4 md:w-1/2 xl:w-1/4">
            <a target="_blank" href="https://www.linkedin.com/in/your_username" className="text-white hover:text-gray-300 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Icon" className="w-6 h-6 mr-2" />
              <span className="ml-2 text-white font-bold">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
