import { findUserOrg, resourcePost, updateOrg, claimResource, listOfResource, showResource } from "../services/orgService.js"

const userOrg = async(request, response, next) => {
    console.log(request.body)
    if(!request.user.email) response.json(400).json({
        message: "Please Log in"
    })
    try{
        const orgInfo = await findUserOrg(request.user.email);
        console.log(orgInfo)
        response
            .status(200)
            .json(orgInfo)
    } catch(error) {
        response.status(400);
    }
    
}

const postResource = async(request, response, next) => {
    console.log(request.file);
    await resourcePost(request.user, request.body, request.file)
    response.json({
        message: "Hello This ran"
    })
}

const postClaimStatus = async(request, response, next) => {
    console.log(request.body.id)
    const claimResponse = await claimResource(request.body.id)
    response.status(200).json(claimResponse);
}

const resourceList = async(request, response, next) => {
    const resourceList = await listOfResource();
    response.json(resourceList);
}

const resourceDetail = async(request, response, next) => {
    const id = request.params.id
    const resource = await showResource(id)
    response.json(resource);
}

export {
    userOrg,
    postResource,
    claimResource,
    postClaimStatus,
    resourceList,
    resourceDetail
}