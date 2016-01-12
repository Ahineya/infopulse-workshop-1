/*
API - application programming interface module
All server calls is written here
 */

function API() {

    /*
    Function that gets phones data from data/phones.json file
     */
    function getPhonesData(callback) {
        /*
         jQuery method for getting data from server
         callback here is an anonymous function from app.js
         callback will be called after receiving data
         */
        $.get('data/phones.json', callback);
    }

    /*
    We're returning an object with public method of API module here
     */
    return {
        getPhonesData: getPhonesData
    };

}