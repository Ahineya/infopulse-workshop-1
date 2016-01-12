/**
 * Main application module used for communication between all other modules
 * Pay attention that we are polluting the global scope (window) with our modules. This is bad practice,
 * and we will get on with it later
 */

function App() {
    console.log('initialized');

    // We're creating modules instances
    var api = new API();
    var phones = new Phones();

    /*
    Here we're calling api.getPhonesData method with anonymous callback function
    Callback will be called when the data from server will be received
    In callback we're storing the received data in Phones module, and calling show method
     */
    api.getPhonesData(function(phonesData) {
        phones.store(phonesData);
        phones.show(phonesData);
    });

}

/*
We're instantiating our main module after all HTML is loaded
 */
window.onload = function() {
    var app = new App();
};