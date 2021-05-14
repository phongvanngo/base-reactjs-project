// import axiosClient from './AxiosClient';
import { fakeApi } from './fakeApi';
import {listTheaterSystem} from './fakeData';

const theaterApi = {
    getListTheaterSystem: async (loginInfo) => {
        let response = await fakeApi({
            // request: loginInfo,
            response: {
                status: 200,
                data: {
                    listTheaterSystem:listTheaterSystem
                }
            }
            , timeOut: 1000
        }
        )
        return response;
    }
}

export default theaterApi;