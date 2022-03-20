const URL = 'https://norma.nomoreparties.space/api/ingredients';

function getInitialCards() {
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`)
      .catch((err) => {
        console.log(err.code, err.message);
        });
    
    }
  })
}


export default getInitialCards;
