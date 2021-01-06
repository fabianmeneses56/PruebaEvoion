const BASEURL = "https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip=0&limit=10";


export const apiGet = () => {

    const url = BASEURL;

    return fetch(url)
        .then(response => response.json());
};