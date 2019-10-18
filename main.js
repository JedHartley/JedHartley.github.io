
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader",).onclick = function() {
      this.style.color = 'grey'
    }
  })
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navbars",).onclick = function() {
      this.style.color = 'grey'
    }
  })

  $( document ).ready(function() {
    $( "#fade" ).click(function() {
      $( "#fade" ).fadeOut( "slow", function() {
      });
    });
  });

  