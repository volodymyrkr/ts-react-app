export const handleResponse = (response: any) => {
  return response.json().then((json: any) => {
    return response.ok ? json : Promise.reject(json);
  });
};