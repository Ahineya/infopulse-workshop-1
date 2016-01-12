/*
Phones module (we can call this a 'model' with 'view' logic)
Used for storing phones data, and it's showing
 */

function Phones() {

    //Array for storing data that have been received from server
    var storedPhonesData = [];

    //jQuery element in which we will render all phones
    var $phonesContainer = $('#phones');

    //HTML of our Handlebars template, that we're getting from <script> tag
    var phoneTemplateSource = $('#phone').html();
    //Compiled by Handlebars template
    var phoneTemplate = Handlebars.compile(phoneTemplateSource);

    //Here we call function that adds event listeners to buttons
    addEventListeners();

    function addEventListeners() {
        //We're adding an event listener to #showHTC button on click here
        $('#showHTC').click(function() {
            //Filtering phones by name. In phonesData variable we will have new filtered array
            var phonesData = storedPhonesData.filter(function(phone) {
                return phone.name === "HTC";
            });
            show(phonesData);
        });

        $('#showAll').click(function() {
            show(storedPhonesData);
        });
    }

    function show(phonesData) {
        //We are creating an object to properly work with Handlebars template here
        var phonesObj = {
            phones: phonesData
        };

        //And we're applying created object to our phoneTemplate
        var phonesHtml = phoneTemplate(phonesObj);

        //And showing it in $phonesContainer in browser
        $phonesContainer.html(phonesHtml);
    }

    //Here is a function that simply stores data from server in storedPhonesData variable
    function store(phonesData) {
        storedPhonesData = phonesData;
    }

    //We are returning two methods for this module
    return {
        show: show,
        store: store
    };
}