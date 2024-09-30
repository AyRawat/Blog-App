import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            BlogPro
          </span>
        </Link>
        <div className="">
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;