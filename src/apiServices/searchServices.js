import * as request from "@/utils/request";

const search = async (value, type = "less") => {
    try {
        const response = await request.get("/users/search", {
            params: { q: value, type },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { search };
