import React from "react";

const User = (props) => {
  const { user } = props;
  return (
    <div className="user-card card">
      <h5 className="user-card-header card-title">{user.first_name}</h5>
      <img class="card-img-top" src={user.avatar} alt="Card image cap" />
      <div className="card-body">
        <h6 className="card-user-name">
          {user.first_name + " " + user.last_name}
        </h6>
      </div>
    </div>
  );
};

export default User;
