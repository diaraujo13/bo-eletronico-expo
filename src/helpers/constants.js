import  Env from 'react-native-config';

export const API_URL =
    process.env["NODE_ENV"] == 'development' ?
        "http://localhost:3000/api/v1" :
                'https://bo-eletronico-app.herokuapp.com/api/v1'


export const MAPS_API_KEY = process.env.MAPS_API_KEY || ''
