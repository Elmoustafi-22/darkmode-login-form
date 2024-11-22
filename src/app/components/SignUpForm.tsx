const SignUpForm = () => {
    return (
        <form action="">
            <h2 className="text-2xl font-medium text-darkBlue mb-5 dark:text-white">Register</h2>
            <div className="my-3">
              <label htmlFor="name" className="text-darkBlue text-sm font-medium dark:text-gray">Full Name</label>
              <input 
                type="text" 
                name="name" 
                className="dark:text-white w-full border-b-2 border-b-darkBlue dark:border-b-gray bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <div className="my-3">
              <label htmlFor="name" className="text-darkBlue text-sm font-medium dark:text-gray">E-mail</label>
              <input 
                type="email" 
                name="email" 
                className="dark:text-white w-full border-b-2 border-b-darkBlue dark:border-b-gray bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="text-darkBlue text-sm font-medium dark:text-gray">Password</label>
              <input 
                type="password" 
                name="password"
                className="w-full border-b-2 border-b-darkBlue dark:border-b-gray bg-white bg-opacity-0 outline-none px-3 py-px text-darkBlue"
              />
            </div>
            <button type="submit" className="w-full bg-darkBlue rounded px-3 py-2 mt-10 text-white dark:bg-gray dark:text-darkBlue font-medium">Sign Up</button>
          </form>
    )
}

export default SignUpForm;