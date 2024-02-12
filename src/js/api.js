function apiGenerator(api) {
  return new Promise((resolve, reject) => {
    fetch(api, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer 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",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const getUsersByUserName = (userName) =>
  apiGenerator(`https://api.github.com/search/users?q=${userName}`);

export const getUserDataByUserName = (userName) =>
  apiGenerator(`https://api.github.com/users/${userName}`);
