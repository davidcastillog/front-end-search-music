import { apiServer } from "./api";

/*
 It takes a search term as an argument, and returns the results of the search
 param searchTerm - The search term you want to find.
 returns The response from the API call.
*/

export const getAlbums = async (searchTerm) => {
  try {
    const res = await apiServer.get(
      `search?term=${searchTerm}&entity=album&limit=200`
    );
    return res;
  } catch (error) {
    return error;
  }
};
