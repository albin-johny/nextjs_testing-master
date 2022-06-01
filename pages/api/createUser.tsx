import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}




export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    var content:any;
    var StatusCode:any= 404;
      
    if(req.method === "POST") {
        let apiContent= await fetch('https://dattiens-group.herokuapp.com/api/v1/user-create/', {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            StatusCode= 200;
            content= {"status": "success"};
            return data;
        }).catch(function (error) {
            return content= {"status": 'Something went wrong.'+ error};
        });
    }else {
        StatusCode= 500;
        content= {"status": "server error"};
    }

    
    await res.status(StatusCode).json(content)
}