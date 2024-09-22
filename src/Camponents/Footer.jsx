

function Footer() {
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white  px-8">
        <div className="flex justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        </div>
      </div>

    </div>
  )
}

export default Footer