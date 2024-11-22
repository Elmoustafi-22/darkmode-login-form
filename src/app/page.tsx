
export default function AuthPg() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex w-full max-w-[800px] rounded-lg shadow-lg">
        <aside className="relative w-1/2 rounded-l-lg bg-store bg-cover bg-no-repeat">
          <div className="w-full h-full py-20 rounded-l-lg flex flex-col items-center justify-end bg-gray bg-opacity-75">
            <h1 className="uppercase text-4xl text-darkBlue font-medium mb-4">Get Started</h1>
            <a href="#" 
              className="w-60 text-center py-2 uppercase font-medium text-white bg-darkBlue"
            >Sign in with Google</a>
            <a href="#"
              className="w-60 text-center py-2 uppercase font-medium text-white bg-darkBlue"
            >Sign in with Github</a>
          </div>
        </aside>
        <aside className="w-1/2 rounded-r-lg bg-gray px-8 pt-10 pb-20">
          <nav className="flex justify-end mb-16">
            <a href="" className="py-1 px-3 text-sm font-medium border 
              border-darkBlue cursor-pointer bg-darkBlue text-white">Login</a>
            <a href="" className="py-1 px-3 text-sm font-medium border 
              border-darkBlue cursor-pointer bg-white text-darkBlue">Register</a>
          </nav>

          <form action="">
            <h2 className="text-2xl font-medium text-darkBlue mb-5">Login</h2>
            <div>
              <label htmlFor="name" className="text-darkBlue text-sm font-medium">Username</label>
              <input 
                type="text" 
                name="name" 
                className="w-full border-b-2 border-b-darkBlue bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-darkBlue text-sm font-medium">Password</label>
              <input 
                type="password" 
                name="password"
                className="w-full border-b-2 border-b-darkBlue bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <button type="submit" className="w-full bg-darkBlue rounded px-3 py-2 mt-10 text-white">Sign In</button>
          </form>
        </aside>
      </div>
    </main>
  );
}
