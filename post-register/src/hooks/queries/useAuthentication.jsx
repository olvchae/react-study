import { useQuery } from "@tanstack/react-query";

async function requestAuthentication(accessToken) {
    const secret = "abcd1234"
    if (!accessToken) {
        throw {
            status: 403,
            data: "AccessToken이 유효하지 않습니다.",
        }
    }
    const accessTokenObj = JSON.parse(accessToken);
    if (secret !== accessTokenObj.secret) {
        throw {
            status: 403,
            data: "AccessToken이 유효하지 않습니다.",
        }
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUser = users.find(user => user.id === accessTokenObj.userId);
    return {
        status: 200,
        data: foundUser,
    }
}

export function useAuthentication(accessToken) {

    return useQuery({
        queryKey: ["authentication", accessToken],
        queryFn: async () => {
            try {
                return await requestAuthentication(accessToken);
            } catch(error) {
                return error;
            }
        },
        staleTime: 1000 * 60 * 2,
        gcTime: 1000 * 60 * 5,
    });
}
