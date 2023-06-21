export default function analizeText(text) {
  const formdata = new FormData();
  formdata.append("key", "e2ee7ac3fef2bd1369f55c31e9e343ed");
  formdata.append("txt", text);
  formdata.append("model", "MODEL NAME HERE");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/deepcategorization-1.0",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));

  console.log(formdata);
}
