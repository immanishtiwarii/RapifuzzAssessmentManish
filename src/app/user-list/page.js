"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users";
import Pagination from "./Pagination";
import UserCount from "./UserCount";
import UserSearch from "./UserSearch";
import { useRouter } from "next/navigation";

const UserList = () => {
  const navigation = useRouter();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);

  const [searchedUser, setSearchedUser] = useState(null);

  useEffect(() => {
    const tokeenn = localStorage.getItem("token");
    if (!tokeenn) {
      navigation.push("/");
    }
  },[navigation]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
      setPerPage(response.data.per_page);
      setTotal(response.data.total);
    };

    fetchData();
  }, [page]);

  const handleSearch = (user) => {
    setSearchedUser(user);
  };

  const handleResetSearch = () => {
    setSearchedUser(null);
  };
  return (
    <div>
      {!searchedUser && (
        <UserCount page={page} perPage={perPage} total={total} />
      )}
      <UserSearch onSearch={handleSearch} onResetSearch={handleResetSearch} />
      {searchedUser ? (
        <div>
          <h2>Searched User</h2>
          <Users users={[searchedUser]} />
        </div>
      ) : (
        <div>
          <Users users={users} />
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default UserList;
