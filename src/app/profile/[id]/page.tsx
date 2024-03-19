import React from "react";

function page({params}:any) {
    return <div>
      <h1>Profile</h1>
        <h2>Profile page</h2>
        <p className="text-4xl ">Welcome <span className="bg-orange-600">{params.id}</span> </p>
  </div>;
}

export default page;
