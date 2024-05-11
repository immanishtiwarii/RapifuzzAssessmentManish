import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  };

  return (
    <>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === currentPage ? "selected" : ""}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
      <div>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Pagination;
