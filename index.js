// const initialSrc = "images/img1.png";
// const secondSrc = "images/img2.png";
// const thirdSrc = "images/img3.png";
// const photo = document.getElementById("airpod");
// const textElements = [
//   document.getElementById("scrollText1"),
//   document.getElementById("scrollText2"),
//   document.getElementById("scrollText3"),
// ];
// window.addEventListener("scroll", function () {
//   console.log(document.documentElement.scrollTop,window.scrollY);
//   const scrollPos = window.scrollY || document.documentElement.scrollTop;
//   textElements.forEach((textElement) => {
//     textElement.classList.add("hidden");
//   });

//   if (scrollPos > 30) {
//     if (scrollPos <= 80) {
//       photo.style.transform = "scale(.9)";
//       textElements[0].classList.remove("hidden");
//       textElements[0].classList.add("opacity-40", "bottom-0");
//     } else if (scrollPos <= 120) {
//       photo.style.transform = "scale(.8)";
//       textElements[0].classList.remove("hidden", "bottom-0", "opacity-40");
//       textElements[0].classList.add("bottom-[25%]", "opacity-100");
//     } else if (scrollPos <= 160) {
//       photo.style.transform = "scale(.7)";
//       textElements[1].classList.remove("hidden");
//       textElements[1].classList.add("opacity-40", "bottom-0");
//     } else if (scrollPos <= 200) {
//       photo.style.transform = "scale(.6)";
//       textElements[1].classList.remove("hidden", "bottom-0", "opacity-40");
//       textElements[1].classList.add("bottom-[25%]", "opacity-100");
//     } else if (scrollPos <= 240) {
//       photo.style.transform = "scale(1)";
//       photo.src = secondSrc;
//       photo.classList.add("opacity-40");
//       textElements[2].classList.remove("hidden", "opacity-40", "bottom-0");
//       textElements[2].classList.add("bottom-0");
//     } else if (scrollPos <= 280) {
//       photo.style.transform = "scale(.9)";
//       photo.classList.remove("opacity-40");
//       photo.src = secondSrc;
//       textElements[2].classList.remove("hidden", "bottom-0");
//       textElements[2].classList.add("bottom-[25%]");
//     } else if (scrollPos <= 320) {
//       photo.src = secondSrc;
//       photo.style.transform = "scale(.8)";
//       textElements[2].classList.remove("hidden", "bottom-0", "bottom-[25%]");
//       textElements[2].classList.add("bottom-[50%]");
//     } else if (scrollPos <= 360) {
//       photo.src = thirdSrc;
//       textElements[2].classList.remove(
//         "hidden",
//         "bottom-0",
//         "bottom-[25%]",
//         "bottom-[50%]"
//       );
//     } else {
//       photo.src = thirdSrc;
//     }
//   } else {
//     photo.src = initialSrc;
//   }
// });



// using Jquery
const initialSrc = "images/img1.png";
const secondSrc = "images/img2.png";
const thirdSrc = "images/img3.png";

$(window).scroll(function () {
  const scrollPos = $(window).scrollTop();
  const textElements = [
    $("#scrollText1"),
    $("#scrollText2"),
    $("#scrollText3"),
  ];

  const photo = $("#airpod");
  console.log(scrollPos);
  if (scrollPos > 30) {
    // text1
    if (scrollPos <= 80) {
      photo.removeClass("hidden");
      $("#finalImage").addClass("hidden");
      photo.css({ transform: "scale(.95)" });
      textElements[1].hide();
      textElements[2].hide();
      textElements[0].css({ bottom: scrollPos }).fadeIn();
    } else if (scrollPos <= 120) {
      console.log("55");
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo.css({ transform: "scale(.9)" });
      textElements[1].hide();
      textElements[2].hide();
      textElements[0].css({ bottom: scrollPos }).fadeIn();
    } else if (scrollPos <= 160) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo.css({ transform: "scale(.85)" });
      textElements[1].hide();
      textElements[2].hide();
      textElements[0].css({ bottom: scrollPos }).fadeIn();
    }
    // text2
    else if (scrollPos <= 200) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo.css({ transform: "scale(.8)" });
      textElements[0].hide();
      textElements[2].hide();
      textElements[1].css({ bottom: scrollPos - 200 }).fadeIn();
    } else if (scrollPos <= 240) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo.css({ transform: "scale(.75)" });
      textElements[0].hide();
      textElements[2].hide();
      textElements[1].css({ bottom: scrollPos - 200 }).fadeIn();
    } else if (scrollPos <= 280) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo.css({ transform: "scale(.7)" });
      textElements[0].hide();
      textElements[2].hide();
      textElements[1].css({ bottom: scrollPos - 160 }).fadeIn();
    }
    // clear
    else if (scrollPos <= 320) {
      $("#finalImage").addClass("hidden");
      photo.addClass("hidden");
      textElements[1].hide();
      textElements[0].hide();
      textElements[2].hide();
    }
    // text3
    else if (scrollPos <= 360) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo
        .css({ display: "block", transform: "scale(1)", opacity: ".4" })
        .attr("src", secondSrc);
      textElements[0].hide();
      textElements[1].hide();
      textElements[2].css({ bottom: scrollPos - 320, opacity: ".4" }).fadeIn();
    } else if (scrollPos <= 400) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo
        .css({ transform: "scale(.95)", opacity: "1" })
        .attr("src", secondSrc);
      textElements[0].hide();
      textElements[1].hide();
      textElements[2].css({ bottom: scrollPos - 320, opacity: "1" }).fadeIn();
    } else if (scrollPos <= 440) {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo
        .attr("src", secondSrc)
        .css({ transform: "scale(.9)", opacity: "1" });
      textElements[0].hide();
      textElements[1].hide();
      textElements[2].css({ bottom: scrollPos - 280, opacity: "1" }).fadeIn();
    }
    // opacity image
    else if (scrollPos <= 480) {
      photo.removeClass("hidden");
      photo.attr("src", secondSrc).css({ transform: "scale(1)", opacity: "1" });
      $("#finalImage").removeClass("hidden");
      textElements[0].hide();
      textElements[1].hide();
      textElements[2].css({ bottom: scrollPos - 280, opacity: ".4" }).fadeIn();
    }
    // final image
    else {
      $("#finalImage").addClass("hidden");
      photo.removeClass("hidden");
      photo.attr("src", thirdSrc);
      textElements[0].hide();
      textElements[1].hide();
      textElements[2].hide();
    }
  } else {
    $("#finalImage").addClass("hidden");
    photo.removeClass("hidden");
    photo.attr("src", initialSrc);
    textElements[0].hide();
    textElements[1].hide();
    textElements[2].hide();
  }
});
