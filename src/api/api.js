import axios from 'axios';

let base = '/api';

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data); };

/*export const customerFind = params => {
    return axios.get(`${base}/customer/find`, params).then(res => res.data); };
*/
export const getUserList = params => {
    return axios.get(`${base}/user/get`, { params: params }).then(res => res.data); };


export const getUserListPage = params => {
    return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => {
    return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => {
    return axios.get(`${base}/user/add`, { params: params }); };
