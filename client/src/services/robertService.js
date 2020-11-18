import axios from 'axios';

export default {
    getAllProject: async() => {
        let res = await axios.get(`/api/project`);
        return res.data || [];
    },
    getAllMood: async() => {
        let res = await axios.get(`/api/mood`);
        return res.data || [];
    },
    getAllUser: async() => {
        let res = await axios.get(`/api/user`);
        return res.data || [];
    },
    getAllButton: async() => {
        let res = await axios.get(`/api/button`);
        return res.data || [];
    }
}