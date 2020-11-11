const auth = async (action, data) => {
  switch(action) {
    case "login" :
      try {
        if (localStorage.getItem('users')===null) return {error:{message:"Login Invalid"}}
        const user = JSON.parse(localStorage.getItem("users"));
        const cekUser = user.find(el => el.email === data.email && el.password === data.password)
        if(!cekUser) return {error:{message:"Login Invalid"}}
        return cekUser;
      }catch (error) {
        console.log(error)    
      }
    break
      case "registration" :
      try {
        const dataUser = JSON.parse(localStorage.getItem("users"));
        const cekUser = dataUser.find(el => el.email === data.email)
        if(!cekUser) return {error:{message:"Email is registered"}}
        let user;
        if (localStorage.getItem('users')===null)
        {
          user = [];
        }else{
          user = JSON.parse(localStorage.getItem('users'));	
        }
        
        user.push(data);	
        localStorage.setItem('users',JSON.stringify(user))
    
        return data;
      }catch (error) {
        console.log(error)    
      }
    break
    default:
      console.log("hallo world")
  }
}

export default auth;