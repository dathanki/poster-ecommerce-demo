import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from './../../Utils';
import './styles.scss';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminToolbar = props => {

    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);
    if (!isAdmin) return false;

    return(
        <div className="adminToolbar">
            <ul>
                <li>
                    <Link to="/Admin" >
                        My Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminToolbar;