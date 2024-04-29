function searchJobs() {
    var input, filter, jobListings, jobListing, location, i, txtValue;
    input = document.getElementById('location-input');
    filter = input.value.toUpperCase();
    jobListings = document.getElementsByClassName('job-listing');

    for (i = 0; i < jobListings.length; i++) {
        jobListing = jobListings[i];
        location = jobListing.getElementsByTagName('p')[0];
        txtValue = location.textContent || location.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            jobListing.style.display = '';
        } else {
            jobListing.style.display = 'none';
        }
    }
}
function animateJobs() {
    var jobListings = document.getElementsByClassName('job-listing');
    for (var i = 0; i < jobListings.length; i++) {
        var jobListing = jobListings[i];
        jobListing.classList.add('animated', 'fadeInUp');
    }
}

// Call the animateJobs function when the window loads
window.onload = function() {
    animateJobs();
};