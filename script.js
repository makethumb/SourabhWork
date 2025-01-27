// Add any JavaScript for interactive elements here if needed.
    const elements = document.querySelectorAll('.animate-left');
        elements.forEach(element => {
          element.classList.add('animate__animated');
          element.classList.add('animate__fadeInLeft');
        });