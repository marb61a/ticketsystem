// Use moment.js for date formatting
Template.registerHelper('formatDate', function(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

// Capitalise the first letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});
