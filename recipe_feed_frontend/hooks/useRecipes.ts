import useSWR from "swr"
import { Video } from "../types"
import { BASE_URL } from "../utils"
import fetcher from "../utils/fetcher"

const useRecipes = ( ) => {
    const { data, error} = useSWR<Video[]>(`${BASE_URL}/api/recipe`, fetcher)

    return {
      recipes: data,
      isLoading: !error && !data,
      isError: error
    }
}

export default useRecipes