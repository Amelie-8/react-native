import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer IF3GNbQYADtbBstAoltCo8XJJrBt47hFkY57cyYKLmZCC18bWhpoYlv6gaX2Xg3hh1X96rACEJ1aokghIQ1p-KDqiRawwdbegCmrqxlv4S2xhCuGxc5WWEzPwxxCYHYx'

    }
})