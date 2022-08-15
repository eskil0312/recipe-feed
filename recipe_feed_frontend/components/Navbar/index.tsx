import Image from "next/image";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";

import Logo from "../../utils/RecipeFeed.svg";
import { createOrGetUser } from "../../utils";
import useAuthStore from "../../store/authStore";
import UploadButton from "./UploadButton";
import ProfileDropdown from "../ProfileDropdown";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { addUser, userProfile } = useAuthStore();

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[120px] md:w-[200px] ">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="RecipeFeed"
            layout="responsive"
          />
        </div>
      </Link>

  
      <div className="flex gap-10">
      <SearchBar />
        {userProfile ? (
          <div className="flex gap-5 md:gap-10 items-center">
            <UploadButton />
            <ProfileDropdown />
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(resp) => createOrGetUser(resp, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
