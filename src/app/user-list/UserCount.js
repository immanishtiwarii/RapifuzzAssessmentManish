import React from "react";

const UserCount = ({ page, perPage, total }) => {
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);

  return (
    <div className="user-count">
      Showing {start}-{end} of {total} Users
    </div>
  );
};

export default UserCount;
