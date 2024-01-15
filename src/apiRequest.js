const apiRequest = async (url = '', optionsObj = nul, errMsg = null) => {
    try {
        const res = await fetch(url, optionsObj);
        if (!res.ok) throw Error('Please reload the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest;