import type { NextPage } from "next";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import useRecipes from "../hooks/useRecipes";
import { Spinner } from "@chakra-ui/react";

interface IProps {
  category: string;
}

const Home: NextPage<IProps> = () => {
  const { isLoading, recipes } = useRecipes();
  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {recipes?.length ? (
        recipes.map((video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text="No videos" />
      )}
    </div>
  );
};

export default Home;
