import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WVeaPNrvzAnZd6UjkKrhcdTwGXc5jrY32RniC073RVg'
    }
});