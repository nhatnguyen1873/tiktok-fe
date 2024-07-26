import * as httpRequest from "@/utils/httpRequest";

const search = async (value, type = "less") => {
    try {
        const response = await httpRequest.get("/users/search", {
            params: { q: value, type },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { search };
