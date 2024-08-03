import * as httpRequest from "@/utils/httpRequest";

const INIT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;

const getSuggested = async ({ page = INIT_PAGE, perPage = DEFAULT_PER_PAGE }) => {
    try {
        const response = await httpRequest.get("/users/suggested", {
            params: { page, per_page: perPage },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const getFollowing = async ({ page = INIT_PAGE }) => {
    try {
        const response = await httpRequest.get("/me/followings", {
            params: { page },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { getSuggested, getFollowing };
