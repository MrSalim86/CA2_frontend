const URL = "http://localhost:8080/CA2/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const login = (user, password) => {
    // console.log("login");
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/xxx/joke", options)
      .then(handleHttpErrors)
      .then(res => {
        setToken(res.token);
      });
  };

  const Joke = () => {
    const [joke, setJoke] = useState(null);
    useEffect(() => {
      fetchData("/api/xxx/joke").then(data => setJoke(data));
    }, []);

    return (
      <div className="bord">
        {joke != null &&
          joke.map((joke, index) => {
            return (
              <div key={index}>
                <h3>{joke.id}</h3>
                <p>Joke: {joke.url}</p>
              </div>
            );
          })}
        {joke == null && <p>No joke found</p>}
      </div>
    );
  };

  const fetchData = jokeUrl => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + jokeUrl, options).then(handleHttpErrors);
  };
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
}
const facade = apiFacade();
export default facade;
