async function serverResponse(result) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Response from server"), 2000);
  });
  result.innerHTML = await promise;
}

function userRequest() {
  const result = document.getElementById("result");
  result.innerHTML = "Waiting for response";
  serverResponse(result);
}

userRequest();
