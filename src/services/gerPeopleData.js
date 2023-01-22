import { HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, GUIDE_IMG_SRC, GUIDE_EXT } from "../constants/api"


const checkProtocol = url => {
    if(url.indexOf(HTTPS) !== -1){
        return HTTPS
    }

    return HTTPS
}

const getId = (url, category) => {
    const protocol = checkProtocol(url);
    
    const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(protocol + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
    return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
export const getPeopleImg = id => GUIDE_IMG_SRC + `${id}` + GUIDE_EXT