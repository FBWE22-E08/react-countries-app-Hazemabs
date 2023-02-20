import React, { useState } from "react";
import SearchResult from "../SearchResult";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state. 


  const handleChange = () => {
   
  };

  const handleSubmit = () => {
   
  };

  return (
    <div>
      <form style={{ padding: "30px" }}>
        <input type="text" />
        <button>search</button>
      </form>
      {/* show the country you received from fetch and saved in the local state (use SearchResult component to display that country) */}
    </div>
  );
}
