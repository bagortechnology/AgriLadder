function searchJobs() {
    // Get all job postings
    const jobPostings = document.querySelectorAll('#job-postings .job-item');
  
    // Get search input values
    const jobSearchValue = document.querySelector('#job-search').value.toLowerCase();
    const locationSearchValue = document.querySelector('#location-search').value.toLowerCase();
  
    // Filter job postings based on search input values
    const filteredPostings = Array.from(jobPostings).filter(posting => {
      const jobTitle = posting.querySelector('.lead').textContent.toLowerCase();
      const location = posting.querySelector('.fa-map-marker-alt').nextSibling.textContent.toLowerCase();
      return jobTitle.includes(jobSearchValue) || location.includes(locationSearchValue);
    });
  
    // Create new HTML element to display filtered job postings
    const filteredPostingsHTML = document.createElement('div');
    filteredPostingsHTML.setAttribute('id', 'job-postings');
    if (filteredPostings.length > 0) {
      filteredPostings.forEach(posting => {
        filteredPostingsHTML.appendChild(posting.cloneNode(true));
      });
      // Replace current job postings with filtered job postings
      const currentPostings = document.querySelector('#job-postings');
      currentPostings.parentNode.replaceChild(filteredPostingsHTML, currentPostings);
    } else {
      alert('No job postings match your search criteria. Please contact us for assistance.');
    }
  }
  