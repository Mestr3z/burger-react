const URL = "https://norma.nomoreparties.space/api/ingredients";

function getInitialCards() {
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    
}

export default getInitialCards;
