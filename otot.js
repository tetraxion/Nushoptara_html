// clicked
var menu_item = document.getElementById("menu_item");
menu_item.style.maxHeight ="0px";
function menuclick(){
    if(menu_item.style.maxHeight == "0px")
    {
        menu_item.style.maxHeight ="200px";
    }
    else 
    {
        menu_item.style.maxHeight ="0px";
    }
}

// tagline slider
let start = 0;
otomatis();

function otomatis()
{
	const sliders = document.querySelectorAll(".rill_tagline");

	for (let i = 0; i < sliders.length; i++)
	{
		sliders[i].style.display = "none";
	}

	if (start >= sliders.length)
	{
		start = 0;
	}

	sliders[start].style.display = "block";
	console.log("gambar ke" +start);
	start++;

	setTimeout(otomatis, 1000);
}
// // 
// $(".form")
//   .find("input, textarea")
//   .on("keyup blur focus", function (e) {
//     var $this = $(this),
//       label = $this.prev("label");

//     if (e.type === "keyup") {
//       if ($this.val() === "") {
//         label.removeClass("active highlight");
//       } else {
//         label.addClass("active highlight");
//       }
//     } else if (e.type === "blur") {
//       if ($this.val() === "") {
//         label.removeClass("active highlight");
//       } else {
//         label.removeClass("highlight");
//       }
//     } else if (e.type === "focus") {
//       if ($this.val() === "") {
//         label.removeClass("highlight");
//       } else if ($this.val() !== "") {
//         label.addClass("highlight");
//       }
//     }
//   });

// $(".tab a").on("click", function (e) {
//   e.preventDefault();

//   $(this).parent().addClass("active");
//   $(this).parent().siblings().removeClass("active");

//   target = $(this).attr("href");

//   $(".tab-content > div").not(target).hide();

//   $(target).fadeIn(600);
// });