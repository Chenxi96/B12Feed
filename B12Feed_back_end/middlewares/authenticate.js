import jwt from 'jsonwebtoken';
import { SECRET } from '../config/config.js';

const authenticateJWT = async (request, response, next) => {
    const token = request.cookies?.jwt;
    if(!token) {
        return response.status(400).json({
            message: "No token provided"
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        request.user = decoded;
        next();
    } catch (err) {
        console.log(err.message);
        return response.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

export default authenticateJWT;