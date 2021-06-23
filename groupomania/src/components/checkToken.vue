<script>
import jwt_decode from "jwt-decode";

export default {
  getUserToken(){
    let user = JSON.parse(localStorage.getItem('user'));
    let decodedToken = user ? jwt_decode(user.token) : null;
    if(!decodedToken || decodedToken.exp < Date.now()){
      window.location = "http://localhost:8080/#/";
      localStorage.clear();
      return null;
    } else {
      return decodedToken;
    }
  }
}

</script>

