module.exports = function(inpResp, links){
    inpResp.links = (inpResp.links) ? inpResp.links.concat(links) : inpResp.links = links;
    return (inpResp);
    };
