import React from "react";
import { myData } from '../api/crud'

const Messages = () => {
   const getUserProfile = async () => {
      const result = await myData();
      //console.log(result)
   }
   getUserProfile();
   return(
      <h2>User Profile</h2>
   );
}


export default Messages