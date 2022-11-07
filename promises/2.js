async function serverResponse(result) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Response from server"), 2000);
  });
}

async function userRequest() {
  try {
    const result = document.getElementById("result");
    result.innerHTML = "Waiting for response";
    result.innerHTML = await serverResponse(result);
  } catch (error) {
    result.innerHTML = error;
  }
}

userRequest();
