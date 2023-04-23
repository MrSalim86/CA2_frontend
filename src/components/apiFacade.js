const URL = "http://localhost:8080/CA2/api/xxx/joke";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

async function fetchChuckNorrisJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await response.json();
  return json.value;
}

function apiFacade() {
  // other utility methods...

  const fetchJoke = async () => {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };

  return {
    // other utility methods...
    fetchJoke,
  };
}
const fetchData = ressource => {
  const options = makeOptions("GET", true); //True add's the token
  return fetch(URL + ressource, options).then(handleHttpErrors);
};

const login = (user, password) => {
  // console.log("login");
  const options = makeOptions("POST", true, {
    username: user,
    password: password,
  });

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  const setToken = token => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  function readJwtToken(token) {
    console.log("TOKEN: ", token);
    // console.log('TOKEN opened with atob: ',window.atob(token));
    var base64Url = token.split(".")[1];
    // console.log(base64Url);
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    // console.log(base64);
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    console.log(jsonPayload);
    return JSON.parse(jsonPayload);
  }

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    readJwtToken,
  };
};
const facade = apiFacade();
export default facade;
