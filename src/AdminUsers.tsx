import React from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const adminUsersData: User[] = [
  { id: 1, name: "Fred", isAdmin: true },
  { id: 2, name: "Bob", isAdmin: false },
  { id: 3, name: "Jane", isAdmin: false }
];

const AdminUsers: React.FC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map(user => (
          <li>
            <NavLink to={`/admin/users/${user.id}`} activeClassName="admin-link-active">
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path="/admin/users/:id" component={AdminUser}/>
    </div>
  )
};

const AdminUser: React.FC<RouteComponentProps<{ id: string }>> = props => {
  let user: User;
  if (props.match.params.id) {
    const id: number = parseInt(props.match.params.id, 10);
    user = adminUsersData.filter(u => u.id === id)[0];
  } else {
    return null;
  }
  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id.toString()}</span>
      </div>
      <div>
        <b>Is Admin: </b>
        <span>{user.isAdmin.toString()}</span>
      </div>
    </div>
  )
};

export default AdminUsers;
