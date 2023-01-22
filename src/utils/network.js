

export const fetchData =  async (url) => {
    const res = await fetch(url)
    
    try {
        if(!res.ok){
            console.log('Not fetched');
            return false;
        }
        return await res.json()
    } catch (error) {
        console.error(error);
        return false
    }
}




