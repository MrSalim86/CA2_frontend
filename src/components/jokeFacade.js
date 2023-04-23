import facade from "./apiFacade";

async function fetchJoke() {
  const jokefromDB = await facade.fetchData("joke");
  return jokefromDB.result;
  console.log(jokefromDB);
}

const jokeFacade = {
  fetchJoke,
};

export default jokeFacade;
