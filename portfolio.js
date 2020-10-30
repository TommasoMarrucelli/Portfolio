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


//---------------------------MOBILE VERSION-----------------------------------


let mob_cat_btn = document.querySelectorAll('.mob_cat_btn');


for (let index = 0; index < mob_cat_btn.length; index++) {

  
  
  mob_cat_btn[index].addEventListener('touchstart', function(){

    
    let target_cat_box = document.getElementById(this.getAttribute('data-target'));

    if(target_cat_box.classList.contains("activated")){
      return
    }

    if(target_cat_box.classList.length == 0){
      
      for (let index = 0; index < mob_cat_btn.length; index++) {

        mob_cat_btn[index].classList.remove("activated");

        let target = document.getElementById( mob_cat_btn[index].getAttribute("data-target"));

        if(target.classList.contains("activated")){
          
          target.classList.remove("activated");
          target.classList.add("deactivated");

          setTimeout(() => {
            target.classList.remove("deactivated");
          }, 1500);
        }
      }
      
      target_cat_box.classList.add("activated");
      
    }

    this.classList.add("activated");
  })
  
}




let cv_menu_btn = document.getElementById("mob_cv_svg");
let mob_cv_menu = document.getElementById("mob_cv_menu");

  cv_menu_btn.addEventListener("touchstart", function () {

    cv_menu_btn.setAttribute('pointer-events' , 'none');

    setTimeout(() => {
      cv_menu_btn.setAttribute('pointer-events' , 'initial');
    }, 1500);

    
    if( mob_cv_menu.classList.contains("closed") || mob_cv_menu.classList.length == 0){
      prevent_page_scroll();
    }
    else{
      enable_page_scroll();
    }
    
    if(mob_cv_menu.classList.contains("open") || mob_cv_menu.classList.contains("closed")){
      mob_cv_menu.classList.toggle("open");
      mob_cv_menu.classList.toggle("closed");
    }
    else{
      mob_cv_menu.classList.add("open");
    }

    
    if (anime_c.completed) {
      anime_cv_menu.reverse();
      anime_c.reverse();
      anime_v.reverse();
      anime_cv_menu.play();
      anime_c.play();
      anime_v.play();
      
    }
    else{
      anime_cv_menu.play();
      anime_c.play();
      anime_v.play();
      
    }
    
    
  });
  

  var anime_cv_menu= anime({
    targets: '#mob_cv_menu',
    height: '95vh',
    duration: 100,
    autoplay: false,
    easing: 'linear',
    loop:1,
    delay: 0
  
  });

var c_shapes = [
  {
      d: "M60 10 L25 10 L10,25 L10 75 L25 90 L60 90"
  },
  {
      d: "M15 0 L75 50 L75 50  L75 50 L135 100 L135 100"
  }
]

 var anime_c = anime({
  targets: '#c',
  d: [
      {value: c_shapes[0].d},
      {value: c_shapes[1].d}
  ],
  duration: 1000,
  direction: 'normal',
  autoplay: false,
  easing: 'linear',
  loop: 1

});

var v_shapes = [
  {
      d: "M105 60 L140 136 L175 60"
  },
  {
      d: "M45 150 L105 100 L165 50" 
  }
]

var anime_v = anime({
  targets: '#v',
  d: [
      {value: v_shapes[0].d},
      {value: v_shapes[1].d}
  ],
  duration: 1000,
  direction: 'normal',
  autoplay: false,
  easing: 'linear',
  loop: 1

});


