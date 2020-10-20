let cv_btn = document.getElementById("outer_cv");
let cv_menu = document.getElementById("left_menu");
let cv_span_open = document.getElementById("outer_cv_span_open");
let cv_span_close = document.getElementById("outer_cv_span_close");
let cv_svg_open = document.getElementById("left_menu_open");
let cv_svg_close = document.getElementById("left_menu_close");
let every_cv_category = document.querySelectorAll(".cv_cat");
let scroll_arrow_land_page = document.getElementById("outer_scroll");
let every_zoom_btn = document.querySelectorAll(".zoom_btn");
let every_close_zoom_btn = document.querySelectorAll(".close_zoom_btn");



//open left menu containing the cv
cv_span_open.addEventListener("click", function () {

        prevent_page_scroll();

        scroll_arrow_land_page.classList.add("hidden");

        cv_span_open.style.display = "none";
        cv_svg_open.style.display = "none";

        cv_span_close.style.display = "flex";
        cv_svg_close.style.display = "flex";

        cv_btn.classList.remove("closed");
        cv_menu.classList.remove("closed");

        cv_btn.classList.add("open");
        cv_menu.classList.add("open");
       
  });

  //close left menu containing the cv
  cv_span_close.addEventListener("click", function () {

    enable_page_scroll();
    show_elemnt_after(scroll_arrow_land_page);

    cv_span_close.style.display = "none";
    cv_svg_close.style.display = "none";

    cv_span_open.style.display = "flex";
    cv_svg_open.style.display = "flex";

    cv_btn.classList.add("closed");
    cv_menu.classList.add("closed");
   
});



// manages transition between cv sections
for (i = 0; i < every_cv_category.length; i++) {

  every_cv_category[i].addEventListener("click", function () {

    if (this.classList.contains("activated")){return};
    let cat_name = this.getAttribute("data-cat-type");
    let all_cat_elmnt = document.querySelectorAll("."+ cat_name);
    let all_cat_article = document.querySelectorAll(".cat_article");


    for (i = 0; i < every_cv_category.length; i++) {
      if (all_cat_article[i].classList.contains("activated")) {
        all_cat_article[i].classList.add("closed");
       hide_elemnt_after(all_cat_article[i]);
      }
      every_cv_category[i].classList.remove("activated");
      all_cat_article[i].classList.remove("activated");
      
    }

    for (let index = 0; index < all_cat_elmnt.length; index++) {
      
      all_cat_elmnt[index].classList.remove("closed");
      all_cat_elmnt[index].classList.remove("hidden");
      all_cat_elmnt[index].classList.add("activated");
      
    }  
  });
}


//zoom university projects images
for (i = 0; i < every_zoom_btn.length; i++) {
  every_zoom_btn[i].addEventListener("click", function () {
    zoom_img(this);
  });
}

//close zoom university projects images
for (i = 0; i < every_close_zoom_btn.length; i++) {
  every_close_zoom_btn[i].addEventListener("click", function () {
    close_zoom_img(this);  
  });
}



function prevent_page_scroll(){
  document.body.classList.add("no_scroll");
}
function enable_page_scroll(){
  document.body.classList.remove("no_scroll");
}

function hide_elemnt_after(elmnt){
  setTimeout(() => {
    elmnt.classList.add("hidden");
  }, 500);
}
function show_elemnt_after(elmnt){
  setTimeout(() => {
    elmnt.classList.remove("hidden");
  }, 500);
}


function check_if_page_scrolled(){
  
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {

      document.body.classList.add("page_scrolled");

      document.getElementById('page_has_been_scrolled').value = "yes";

      if(document.body.classList.contains("page_back_to_top")){
        document.body.classList.remove("page_back_to_top");
      }

    } else {
      document.body.classList.remove("page_scrolled");
      if(document.getElementById('page_has_been_scrolled').value == "yes"){document.body.classList.add("page_back_to_top");}
      
    }
  });
  observer.observe(document.querySelector("#scroll_check"));
  }
}

function zoom_img(zoom_btn){
  let target_img = document.getElementById(zoom_btn.getAttribute("data-target_img"));
  target_img.classList.remove("closed");
  target_img.classList.add("zoomed");
}
function close_zoom_img(close_zoom_btn){
  let target_img = document.getElementById(close_zoom_btn.getAttribute("data-target_img"));
  target_img.classList.add("closed");
}

  

  



