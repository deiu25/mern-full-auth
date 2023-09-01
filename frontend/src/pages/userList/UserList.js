import React from "react";
import "./UserList.scss";
import { UserStats } from "../../components/userStats/UserStats";
import { PageMenu } from "../../components/pageMenu/PageMenu";
import { Search } from "../../components/search/Search";
import { FaTrashAlt } from "react-icons/fa";
import { ChangeRole } from "../../components/changeRole/ChangeRole";

export const UserList = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card">
              <PageMenu />
              <UserStats />
              <div className="user-list">
                <div className="table">
                  <div className="--flex-between">
                    <span>
                      <h3>All Users</h3>
                      <span>
                        <Search />
                      </span>
                    </span>
                  </div>
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
                    <tr>
                        <td>1</td>
                        <td>Deiu</td>
                        <td>Deiu@gmail.com</td>
                        <td>Admin</td>
                        <td>
                            <ChangeRole />
                        </td>
                        <td>
                            <span>
                                <FaTrashAlt size={20} color="red" />
                            </span>
                        </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
