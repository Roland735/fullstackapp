
import { NextRequest} from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => { 

    try {
        request.cookies.get('token')?.value || ``;
    } catch (error:any) {
        throw new Error(error.message);
    }
}
