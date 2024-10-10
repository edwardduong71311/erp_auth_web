import { createContext, useContext } from "react";
import { ServerContextType, RequestParam, Props } from "./ServerContext.type";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

const ServerContextData = createContext<ServerContextType>({
  get: () => Promise.resolve(),
  post: () => Promise.resolve(),
});

export function useServerContext() {
  return useContext(ServerContextData);
}

export function ServerContext(props: Props) {
  const formParam = (params: RequestParam) => {
    let paramUrl = "";
    for (const [key, value] of Object.entries(params)) {
      paramUrl += `${key}=${value}&`;
    }
    return paramUrl;
  };

  const get = async (path: string, params: RequestParam) => {
    try {
      let url = `${baseUrl}/${path}`;
      if (params) {
        url += "?" + formParam(params);
      }
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const post = async (path: string, body: unknown) => {
    try {
      const response = await fetch(`${baseUrl}/${path}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ServerContextData.Provider
      value={{
        get,
        post,
      }}
    >
      {props.children}
    </ServerContextData.Provider>
  );
}
