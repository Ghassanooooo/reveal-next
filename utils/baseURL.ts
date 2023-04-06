const baseURL = "http://localhost:4444";
// new port for client 4111 nginx
// new port for client 4111 nginx

export const presentationApi = baseURL + "/presentation-api/trpc";
export const socketApi = baseURL;

/*const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  return `http://localhost:${process.env.PORT ?? 4001}`; // dev SSR should use localhost
};*/
