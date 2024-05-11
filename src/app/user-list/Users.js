import React from "react";

const Users = ({ users }) => {
  return (
    <>
      <div className="user-list">
        {users.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <div>
              {user.first_name} {user.last_name}
            </div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
