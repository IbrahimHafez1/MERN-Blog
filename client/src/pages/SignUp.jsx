import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        <div className="flex flex-col md:flex-row md:items-center md:gap-5">
          <div className="md:w-1/2">
            <Link
              to="/"
              className="block text-center mb-8 text-4xl font-semibold text-indigo-500"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-2 py-1 text-white">
                Ibrahim's
              </span>{" "}
              Blog
            </Link>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis quasi dicta quod! Ab atque quae sed dicta aspernatur
              perspiciatis quo, enim reprehenderit rem accusamus est
              voluptatibus ipsa dolorem. Incidunt, laborum?
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <Label value="Your email" />
                <TextInput type="email" placeholder="Email" id="email" />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="mt-4 text-center">
              <span>Already have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
