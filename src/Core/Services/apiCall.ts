import axios from "axios";
import { userDetail } from "../ActionTypes/TrialActionsTypes";

interface Response {
    id: string,
    password:any,
}

export async function fetchApi(
    id: string| number,
    password: any,
    
): Promise<Response> {
console.log('Axiossssss',axios.get(`http://localhost:3500/userInfo`));
  return await axios.get(`http://localhost:3500/userInfo/${id}/${password}`);
}

