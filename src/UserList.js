import React, {useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {
    const [User, setUser] = useState([]);
    const GetUserList = () => {
      
        
        axios.get("https://jsonplaceholder.typicode.com/users")
  
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => console.log(`Error : ${error}`));
    };
  
    useEffect(() => {
      GetUserList();
    });
  
    return (
      <div className="User">
        {Data.map((el) => (
          <User key={el.id} user={el.name} user ={el.mail} user={el.adress}/>
        ))}
      </div>
    );
  };
  
  export default UserList;