const ApiUrlPath = 'http://localhost:3002/api/sanki';
const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
const request = (endpoint: string, options: RequestInit) => {
    const url = `${ApiUrlPath}${endpoint}`;
    return fetch(url, options).then(checkResponse);
}
export const fetchMenuData = () => {
    const endpoint = '/menu';
    return request(endpoint, {})
        .then((res) => {
            if (res.success) return res.menu;
            return Promise.reject(res);
        });
}
export const fetchIngredientsData = () => {
    const endpoint = '/ingredients';
    return request(endpoint, {})
        .then((res) => {
            if (res.success) return res.ingredients;
            return Promise.reject(res);
        });
}
