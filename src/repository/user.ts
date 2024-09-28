export type LoginParam = {
  username: string;
  password: string;
};

type UserInfo = {
  name: string;
};

type LoginInfo = {
  token: string;
  user: UserInfo;
};

type LoginResult = {
  status: boolean;
  data: LoginInfo | null;
};

export const login = async ({
  username,
  password,
}: LoginParam): Promise<LoginResult> => {
  // TODO: To implement login request
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        resolve({
          status: true,
          data: {
            token: "123",
            user: {
              name: "Super Admin",
            },
          },
        });
        return;
      }

      resolve({
        status: false,
        data: null,
      });
    }, 2000);
  });
};
