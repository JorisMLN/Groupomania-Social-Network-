import jwt_decode from "jwt-decode";

export default {
  getUserToken(store){
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    let decodedToken = user ? jwt_decode(user.token) : null;
    console.log(decodedToken);

    if(!decodedToken || decodedToken.exp < (Date.now()/1000)){
      store.commit("cleanStore");
      localStorage.clear();
      window.location = "http://localhost:8080/#/";
      return null;
    } else {
      return decodedToken;
    }
  }
}

