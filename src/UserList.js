import React, {useState, useEffect} from "react";
import axios from "axios";
import Person from "./Person"

const UserList = () => {
  const [User, setUser] = useState([]);
  useEffect(() => {
    const GetUserList = () => {
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {setUser(res.data);
      })
      .catch((error) => console.log(error));
  };
    GetUserList();
    console.log(User);
    
    
  }, [])
    return (
      <div className="User">
        {User.map((el) => (
          <Person user={el}/>
        ))}
      </div>
    );
  };
  
  export default UserList;