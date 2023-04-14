function editJobItem(jobItem) {
    // find the elements within the job item that need to be edited
    const titleElem = jobItem.querySelector('h5');
    const locationElem = jobItem.querySelector('.fa-map-marker-alt').nextSibling;
    const scheduleElem = jobItem.querySelector('.fa-clock').nextSibling;
    const rateElem = jobItem.querySelector('.fa-money-bill-alt').nextSibling;
    
    // create input fields for each element and set their value to the current text
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = titleElem.textContent;
    titleElem.replaceWith(titleInput);
  
    const locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.value = locationElem.textContent.trim();
    locationElem.replaceWith(locationInput);
  
    const scheduleInput = document.createElement('input');
    scheduleInput.type = 'text';
    scheduleInput.value = scheduleElem.textContent.trim();
    scheduleElem.replaceWith(scheduleInput);
  
    const rateInput = document.createElement('input');
    rateInput.type = 'text';
    rateInput.value = rateElem.textContent.trim();
    rateElem.replaceWith(rateInput);
  
    // create a save button
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'btn btn-success btn-square me-3';
  
    // replace the edit button with the save button
    const editBtn = jobItem.querySelector('.search-btn');
    editBtn.replaceWith(saveBtn);
  
    // add a click event listener to the save button to save the changes
    saveBtn.addEventListener('click', () => {
      // update the text content of each element with the value of its corresponding input field
      titleElem.textContent = titleInput.value;
      locationElem.textContent = ` ${locationInput.value}`;
      scheduleElem.textContent = ` ${scheduleInput.value}`;
      rateElem.textContent = ` ${rateInput.value}`;
  
      // replace the save button with the edit button
      saveBtn.replaceWith(editBtn);
  
      // update the timestamp with the current time
      const timestampElem = jobItem.querySelector('.fa-calendar-alt').nextSibling;
      const now = new Date();
      const timestamp = `updated ${now.getHours()}:${now.getMinutes()}`;
      timestampElem.textContent = timestamp;
    });
  }
  
  // find all the job items and add a click event listener to their edit button
  const editBtns = document.querySelectorAll('.search-btn');
  editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', () => {
      // find the parent job item and call the editJobItem function on it
      const jobItem = editBtn.closest('.job-item');
      editJobItem(jobItem);
    });
  });
  