document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form inputs
    var firstName = document.getElementById('name').value.trim();
    var lastName = document.getElementById('password').value.trim();

    // Simple validation
    if (firstName === '' || lastName === '') {
      alert('Please fill in all fields');
      return;
    }

    // Store data in session storage
    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('lastName', lastName);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    // Redirect or do something else after successful validation
    window.location.href = 'success.html';
    console.log('Form submitted successfully');
  });



//   jquery code

{/* <script>
  $(document).ready(function() {
    $('#form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Get form inputs
      var firstName = $('#name').val().trim();
      var lastName = $('#password').val().trim();

      // Simple validation
      if (firstName === '' || lastName === '') {
        alert('Please fill in all fields');
        return;
      }

      // Store data in session storage
      sessionStorage.setItem('firstName', firstName);
      sessionStorage.setItem('lastName', lastName);

      // Redirect or do something else after successful validation
      // window.location.href = 'success.html';
      console.log('Form submitted successfully');
    });
  });
</script> */}
