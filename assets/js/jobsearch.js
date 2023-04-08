function searchJobs() {
    // Get all job postings
    const jobPostings = document.querySelectorAll('#job-postings .job-item');
    // Save a reference to the original job postings
    const originalPostings = Array.from(jobPostings);
  
    // Get search input values
    const jobSearchValue = document.querySelector('#job-search').value.toLowerCase();
    const locationSearchValue = document.querySelector('#location-search').value.toLowerCase();
  
    // Filter job postings based on search input values
    const filteredPostings = originalPostings.filter(posting => {
      const jobTitle = posting.querySelector('.lead').textContent.toLowerCase();
      const location = posting.querySelector('.fa-map-marker-alt').nextSibling.textContent.toLowerCase();
      if (jobSearchValue !== '' && locationSearchValue !== '') {
        return jobTitle.includes(jobSearchValue) && location.includes(locationSearchValue);
      } else if (jobSearchValue !== '' && locationSearchValue === '') {
        return jobTitle.includes(jobSearchValue);
      } else if (jobSearchValue === '' && locationSearchValue !== '') {
        return location.includes(locationSearchValue);
      }
    });
  
    // Create new HTML element to display filtered job postings or alert message
    const filteredPostingsHTML = document.createElement('div');
    filteredPostingsHTML.setAttribute('id', 'job-postings');
    if (filteredPostings.length > 0) {
      filteredPostings.forEach(posting => {
        filteredPostingsHTML.appendChild(posting.cloneNode(true));
      });
    } else {
      const alertMessage = document.createElement('p');
      alertMessage.textContent = 'No job postings match your search criteria. Please contact us for assistance.';
      filteredPostingsHTML.appendChild(alertMessage);
    }
  
    // Replace current job postings with filtered job postings or original postings
    const currentPostings = document.querySelector('#job-search-results');
    if (jobSearchValue === '' && locationSearchValue === '') {
      currentPostings.parentNode.replaceChild(document.createElement('div'), currentPostings);
    } else {
      currentPostings.parentNode.replaceChild(filteredPostingsHTML, currentPostings);
    }
  }
  