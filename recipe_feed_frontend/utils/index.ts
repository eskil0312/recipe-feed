import axios from 'axios';
import { AnyPtrRecord } from 'dns';
import jwt_decode from "jwt-decode"

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type DecodedJTW = {
  name: string,
  picture:string,
  sub:string
}


export const createOrGetUser = async (response: any, addUser: any) => {

  const {name, picture,sub}: DecodedJTW = jwt_decode(response.credential);

  const user = {
    _id: sub,
    _type:'user',
    userName:name,
    image:picture
  }
  await axios.post(`${BASE_URL}/api/auth`, user);
  addUser(user);
 
};