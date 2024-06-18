var width = $(window).width();

// Might create a button that can redirect the user to the overview section
// window.onscroll = function () {
//   if (width >= 1000) {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     } else {
//     }
//   }
// };
window.onscroll = function () {
  if (width >= 1000) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#header").css("background", "#fff");
      $("#header").css("opacity", "1");
      $("#header").css("color", "#000");
      $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
      $("#header").css("padding", "4vh 4vw");
      $("#navigation a").hover(
        function () {
          $(this).css("border-bottom", "2px solid #f27a62");
        },
        function () {
          $(this).css("border-bottom", "2px solid transparent");
        }
      );
    } else {
      $("#header").css("background-color", "white");
      $("#header").css("opacity", "0.8");
      $("#header").css("color", "black");
      $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
      $("#header").css("padding", "4vh 4vw");
      $("#navigation a").hover(
        function () {
          $(this).css("border-bottom", "2px solid #f27a62");
        },
        function () {
          $(this).css("border-bottom", "2px solid transparent");
        }
      );
    }
  }
};
function magnify(imglink) {
  $("#img_here").css("background", `url('${imglink}') center center`);
  $("#magnify").css("display", "flex");
  $("#magnify").addClass("animated fadeIn");
  setTimeout(function () {
    $("#magnify").removeClass("animated fadeIn");
  }, 800);
}

function closemagnify() {
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function () {
    $("#magnify").css("display", "none");
    $("#magnify").removeClass("animated fadeOut");
    $("#img_here").css("background", `url('') center center`);
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1650);

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("body,html").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
