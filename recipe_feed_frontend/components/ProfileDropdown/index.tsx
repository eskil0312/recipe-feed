import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/router";
import useAuthStore from "../../store/authStore";
import { useCallback } from "react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";

const ProfileDropdown = () => {
  const { removeUser, userProfile } = useAuthStore();
  const router = useRouter();

  const logOut = () => {
    googleLogout();
    removeUser();
  };

  const linkToProfile = useCallback(() => {
    if (!userProfile?._id) return;
    router.push(`/profile/${userProfile?._id}`);
  }, [router, userProfile?._id]);

  if (!userProfile) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} height="3rem" variant='ghost'>
        <Avatar src={userProfile.image} size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={linkToProfile} icon={<AiOutlineUser />}>
          Profile
        </MenuItem>
        <MenuItem disabled icon={<AiOutlineSetting />}>
          Account settings
        </MenuItem>
        <MenuItem onClick={logOut} icon={<AiOutlineLogout />}>
          Logout
        </MenuItem>
    
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
