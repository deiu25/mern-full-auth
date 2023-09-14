import React, { useEffect, useState } from "react";
import "./UserList.scss";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { UserStats } from "../../components/userStats/UserStats";
import { PageMenu } from "../../components/pageMenu/PageMenu";
import { Search } from "../../components/search/Search";
import { FaTrashAlt } from "react-icons/fa";
import { ChangeRole } from "../../components/changeRole/ChangeRole";
import { useRedirectLoggedOutUser } from "../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/features/auth/authSlice";
import { shortenText } from "../profile/Profile";
import { Spinner } from "../../components/loader/Loader";
import {
  FILTER_USERS,
  selectUsers,
} from "../../redux/features/auth/filterSlice";
import ReactPaginate from "react-paginate";

export const UserList = () => {
  useRedirectLoggedOutUser("/auth");
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { users, isLoading } = useSelector(
    (state) => state.auth
  );

  const filteredUsers = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const removeUser = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Delete",
          onClick: () => removeUser(id),
        },
        {
          label: "Cancel",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [dispatch, users, search]);

  // Begin Pagination
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    setItemOffset(newOffset);
  };

  // End Pagination
  return (
    <div className="card mt-5">
      <PageMenu />
      <UserStats />
      <div className="user-list">
        {isLoading && <Spinner />}
        <div className="table">
          <div className="--flex-between">
            <span>
              <h3>All Users</h3>
              <span>
                <Search
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </span>
            </span>
          </div>
          {!isLoading && users.length === 0 ? (
            <p>No user found...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Change Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, index) => {
                  const { _id, firstname, lastname, email, role } = user;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(firstname, 8)}</td>
                      <td>{shortenText(lastname, 8)}</td>
                      <td>{shortenText(email, 8)}</td>
                      <td>{role}</td>
                      <td>
                        <ChangeRole _id={_id} email={email} />
                      </td>
                      <td>
                        <span>
                          <FaTrashAlt
                            size={20}
                            color="red"
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <hr />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};
