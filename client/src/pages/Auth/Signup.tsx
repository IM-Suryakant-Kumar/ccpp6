import { Link, useLocation } from "react-router";

const Signup = () => {
  const state = useLocation().state;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");

		console.log("Name: ", name, "Email: ", email, "Password", password);
	};

  return (
    <article className="min-h-screen flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-secondary p-4 rounded-xs text-center flex flex-col gap-2"
          >
            {/* title */}
            <h1 className="text-logo text-2xl md:text-3xl font-secondary font-bold mt-4">SignUp</h1>
            {/* error message */}
            {state?.message && <p className="error-message">{state.message}</p>}
            {/* input */}
            <input className="text-field mt-4" type="text" name="name" placeholder="Name: " />
            <input className="text-field" type="email" name="email" placeholder="Email: " />
            <input className="text-field" type="password" name="password" placeholder="Password: " />
            {/* buttons */}
            <button className="btn rounded-xs text-sm py-1.5 mt-4" type="submit">
              SignUp
            </button>
            {/* info */}
            <p className="mt-2 text-xs md:text-sm text-gray-600">
              Already have an account?
              <Link
                className="text-logo font-secondary font-bold"
                to="/login"
              >
                {" "}
                Login
              </Link>
            </p>
          </form>
        </article>
  )
}

export default Signup