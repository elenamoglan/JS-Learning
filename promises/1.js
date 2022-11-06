function serverResponse(result) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Response from server"), 2000);
  });
  promise.then(
    (res) => (result.innerHTML = res),
    (error) => (result.innerHTML = error)
  );
}

function userRequest() {
  const result = document.getElementById("result");
  result.innerHTML = "Waiting for response";
  serverResponse(result);
}

userRequest();
