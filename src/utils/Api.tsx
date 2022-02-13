



  



   function getInitialCards() {
        return fetch('https://norma.nomoreparties.space/api/ingredients' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
              } 
        })
    }

export default getInitialCards