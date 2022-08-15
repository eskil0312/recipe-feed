import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home: NextPage<IProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text="No videos" />
      )}
    </div>
  );
};
export const getServerSideProps = async ({
  query: { category },
}: {
  query: { category: string };
}) => {
  const url = category ? `${BASE_URL}/api/discover/${category}` : `${BASE_URL}/api/recipe`;
  const response = await axios.get(url)
  
  return {
    props: { videos: response.data },
  };
};

export default Home;
