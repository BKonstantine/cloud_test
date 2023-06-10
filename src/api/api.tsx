const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const sendRequest = (data: any) => {
  return fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
  }).then(checkResponse);
};
