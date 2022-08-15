import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import React, { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };
  return (
    <form className="relative hidden md:block" onSubmit={handleSearch}>
      <InputGroup onSubmit={handleSearch}>
        <Input
          placeholder="Search for recipes"
          size="lg"
          value={searchValue}
          onChange={handleChange}
          variant="flushed"
        />
        <InputRightElement
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          height="100%"
          cursor={"pointer"}
          onClick={handleSearch}
        >
          <AiOutlineSearch fontSize={"24"} />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
