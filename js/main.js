
// active navbar
let nav = document.querySelector(".navigation-wrap");
let navLinks = document.querySelectorAll('.nav-link');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
        navLinks.forEach(function(navLink) {
            navLink.classList.add("scroll-on");
        });
    } else {
        nav.classList.remove("scroll-on");
        navLinks.forEach(function(navLink) {
            navLink.classList.remove("scroll-on");
        });
    }
}
// scroll on click

// nav hide
let navBar = document.querySelectorAll(`.nav-link`);
let navCollapse = document.querySelector('.navbar-collapse.collapse')
navBar.forEach((a) => {
    // a.classList.remove('active')
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if(targetSection){
            targetSection.scrollIntoView({behavior:'smooth', block:'start'})
            // this.classList.add('active')
        }
    })
})


//hero-section
const htmlContent = `
<div class="container ">
    <div class="row  justify-content-right">
       <div class="col-lg-5 col-md-6">
            <h1 class="slogan ">
                Photography For Adventurous Souls & Rebels At Heart
            </h1>
            <div class="text-center">
                <button class="btn btn-color">read more</button>
            </div>
        </div>
    </div>
</div>  
`;

// Select all carousel caption elements
const carouselCaptions = document.querySelectorAll('.carousel-item .carousel-caption');

// Loop through each carousel caption and add the HTML content
carouselCaptions.forEach(function (caption) {
    caption.innerHTML = htmlContent;
});

// popup-image

const galleryImgs = document.querySelectorAll('.center_div img');
console.log(galleryImgs)

    galleryImgs.forEach(img => {
        img.addEventListener("click",(e)=>{
          const src = e.target.getAttribute("src");
          console.log(document.querySelector(".modal-img").src);
         document.querySelector(".modal-img").src=src;
         const myModal =new bootstrap.Modal(document.getElementById('gallary-popup'))
         myModal.show();
        })
    });


