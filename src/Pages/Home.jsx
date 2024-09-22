import Profilepic from '../assets/Profilepic.jpg';

function Home() {
  return (
    <>
  <div className="introdiv  flex  md:flex-row justify-between items-center h-screen px-4 md:px-10">
  <div className="md:w-1/2 ">
    <h1 className="text-white font-bold text-3xl lg:text-5xl mb-4">
      I'm Hussain, a Frontend Web Developer
    </h1>
    
    <div className="container mx-auto mt-20 p-2 pt-3 md:p-4 lg:p-6 bg-gray-900">
    <h2 className="underline text-3xl text-white font-bold  mb-2">
      About Me
    </h2>
    <p className="text-white m-2">
      I am a passionate Frontend Developer with expertise in building responsive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and modern libraries/frameworks like React, Bootstrap, and Tailwind CSS. My goal is to create seamless and intuitive user experiences through clean, efficient code and thoughtful design.
    </p>
    </div>
  </div>
  <div className=" md:w-1/2 mb-8 md:mb-0 flex justify-center align-middle">
    <img src={Profilepic} alt="profile picture" className=" profilepicdiv object-cover rounded-full" />
  </div>
</div>


    </>
  )
}

export default Home