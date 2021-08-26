import axios from 'axios';

export const checkUserIsAdmin = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    const { userRoles } = currentUser;
    if (userRoles.includes('admin')) return true;

    return false;
};

export const apiInstance = axios.create({
    // UPDATE LIVE URL
    baseURL: 'http://localhost:5001/e-commerce-posters/us-central1/api'
});
