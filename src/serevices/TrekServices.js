import axios from 'axios';

const api = "http://localhost:9191/api/trek"
class TrekService {
    getTrek(){
        return axios.get(api);
    }
}

export default new TrekService();
