const auth = async (action, data) => {
  switch(action) {
    case "login" :
      try {
        const dataLogin = {data:data}
        return dataLogin;
      }catch (error) {
        console.log(error)    
      }
    break
      case "registration" :
      try {
        let user;
        if (localStorage.getItem('users')===null)
        {
          user = [];
        }else{
          user = JSON.parse(localStorage.getItem('users'));	
        }
        
        user.push(data);	
        localStorage.setItem('users',JSON.stringify(user))
        
        const dataRegister =  {data:data}
        return dataRegister;
      }catch (error) {
        console.log(error)    
      }
    break
    default:
      console.log("hallo world")
  }
}

export default auth;