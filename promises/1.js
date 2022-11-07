function serverResponse(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Response from server"), 2000);
  });
}

function userRequest() {
  const result = document.getElementById("result");
  result.innerHTML = "Waiting for response";
  serverResponse(result).then(
    (res) => (result.innerHTML = res),
    (error) => (result.innerHTML = error)
  );
}

userRequest();
