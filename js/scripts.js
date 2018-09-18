$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
  var loginForm = document.getElementById("loginM");
  var loginBtn = document.getElementById("loginBtn");
  var buttonClose = document.getElementsByClassName("close")[0];
  var buttonClose2 = document.getElementsByClassName("close")[1];
  var reserveForm = document.getElementById("myModal");
  var reserveBtn = document.getElementById("myBtn");
  var cancelLoginBtn = document.getElementById("cancelLoginBtn");

  loginBtn.onclick = function() {
      loginForm.style.display = "block";
  }

  reserveBtn.onclick = function() {
      reserveForm.style.display = "block";
  }

  buttonClose.onclick = function() {
      reserveForm.style.display = "none";
      loginForm.style.display = "none";
  }

  buttonClose2.onclick = function() {
      loginForm.style.display = "none";
  }

  cancelLoginBtn.onclick = function(){
    loginForm.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == reserveForm) {
          reserveForm.style.display = "none";
      }
      else if (event.target == loginForm) {
          loginForm.style.display = "none";
      }
  }
