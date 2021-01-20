const BASEURL = "https://us-central1-bonsai-interview-endpoints.cloudfunctions.net";


export const apiGet = ({page, limit }) => {

    const url = BASEURL+ `/movieTickets?skip=${page}&limit=${limit}`;

    return fetch(url)
        .then(response => response.json());
};