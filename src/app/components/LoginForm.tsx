const LoginForm = () => {
    return (
        <form action="">
            <h2 className="text-2xl font-medium text-darkBlue mb-5 dark:text-white">Login</h2>
            <div className="my-3">
              <label htmlFor="name" className="text-darkBlue text-sm font-medium dark:text-gray">Username</label>
              <input 
                type="text" 
                name="name" 
                className="dark:text-white w-full border-b-2 border-b-darkBlue dark:border-b-gray bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="text-darkBlue text-sm font-medium dark:text-gray">Password</label>
              <input 
                type="password" 
                name="password"
                className="dark:text-white w-full border-b-2 border-b-darkBlue dark:border-b-gray bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <button type="submit" className="w-full bg-darkBlue rounded px-3 py-2 mt-10 font-medium text-white dark:bg-gray dark:text-darkBlue">Sign In</button>
          </form>
    )
}

export default LoginForm;