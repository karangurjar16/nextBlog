
export function Navbar(){
    return <nav className="bg-white border-8border-gray-200 rounded-lg p-4 ">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-black text-2xl font-bold">
        MyBlog
      </a>
      <button
        className="text-black md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
        </svg>
      </button>

      <div className=" md:flex md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <a href="/" className="text-black border-1">
          Home
        </a>
        <a href="/CreateBlog" className="text-black border-1">
          Add Blog 
        </a>
        <a href="/Signup" className="text-black ">
          Signup
        </a>
      </div>
    </div>
  </nav>
}