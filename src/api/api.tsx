export interface FormData {
  [fieldName: string]: string | number[];
}

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const sendRequest = (data: FormData) => {
  return fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
  }).then(checkResponse);
};
