import { registerUserOrg, findUser, verifyPassword, createAuthToken } from '../services/userService.js';
import { needApproval } from '../utils/mail.js';
import { CLIENT_SIDE } from '../config/config.js';


const userSignUp = async (request, response) => {
    // Simulate form request data
    // const email = 'example123@example.com'; // Email request data
    // const password = 'password123'; // Password request data
    const { firstName, lastName, email, password, orgName, address, phone } = request.body;
    // Create attempts to create a user in DB
    try {
        // Add User in DB
        await registerUserOrg(firstName, lastName, email, password, orgName, address, phone);
        await needApproval(firstName, lastName, orgName)
        response.status(200).json({
            message: "User Registered successfully"
        });
    } catch (err) {
        response.status(400);
    }
};

const loginUser = async (request, response, next) => {
    // Simulate form request data
    // const email = 'example123@example.com';
    // const password = 'password123';
    // Attempts to find a specific user and checks password then sends json response object
    try {
        const user = await findUser(request.body.email);
        if(!user) return response.status(401).json({ message: "Please try again" });

        const authorizePassword = await verifyPassword(user.password, request.body.password);

        if(!authorizePassword) return response.status(401).json({ message: "Invalid credentials" });

        const sign = await createAuthToken(user);
        // console.log(sign)
        
        return response.cookie('jwt', sign, {
            httpOnly: true,
            secure: true,       
            }).status(200).json({
            message: "User authorized"
        })
        
    } catch (err) {
        console.error(err.message);
        return response.status(500).json({
            message: "Server error"
        });
    }
};

export {
    userSignUp,
    loginUser,
};