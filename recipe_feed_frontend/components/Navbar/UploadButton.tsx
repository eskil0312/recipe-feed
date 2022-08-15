import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

const UploadButton = () => {
  return (
    <Link href="/upload">
      <Button rightIcon={<AddIcon />} height="3rem" variant="outline">
        Upload
      </Button>
    </Link>
  );
};

export default UploadButton;
