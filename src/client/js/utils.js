//--------------- Function to validate the URL ----------------

export const isValidURL = (url) => {
  const urlRegex = /^(http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};
