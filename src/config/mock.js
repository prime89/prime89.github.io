import urls from './urls';
import data from './data';

export default [
    {
        method: 'Get',
        url: urls.DEVLIST,
        response: {
            error: 0,
            total: 100,
            data: data.devlist,
        }
    },
    {
        method: 'Get',
        url: urls.GET_USERS,
        response: {
            error: 0,
            total: 100,
            data: data.userlist,
        }
    },
    {
        method: 'Any',
        response: {error: 0, message: 'xx'},
    },
];