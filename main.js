let images = [
    {
        url: "C:/Users/denis/Documents/skillfactory/js/slider/images/block2_1.jpg",
        title: "Rostov-on-Don, Admiral",
        area: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request"
    }, {
        url: "C:/Users/denis/Documents/skillfactory/js/slider/images/block2_2.jpg",
        title: "Sochi Thieves",
        area: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request"
    }, {
        url: "C:/Users/denis/Documents/skillfactory/js/slider/images/block2_3.jpg",
        title: "Rostov-on-Don Patriotic",
        area: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request"
    }];


function initslider(options) {
    if (!images || !images.length) return;

    options = options || {
        dots: true,
        titles: false
    };

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitle = document.querySelector(".slider__titles");
    let contentTitle = document.querySelector(".title-content");
    let contentArea = document.querySelector(".area-content");
    let contentRepairTime = document.querySelector(".repairTime-content");
    let contentRepairCost = document.querySelector(".repairCost-content");

    initImages();
    initArrows();
    initContent();

    if (options.dots) {
        initDots();
    }

    if (options.titles) {
        initTitles();
    }

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
            let nextNumber;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".active").classList.remove("active");
                this.classList.add("active");
            })
        })
    }

    function initTitles() {
        images.forEach((image, index) => {
            let title = `<li class="slider__title n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</li>`;
            sliderTitle.innerHTML += title;
        });
        sliderTitle.querySelectorAll(".slider__title").forEach(title => {
            title.addEventListener("click", function () {
                moveSlider(this.dataset.index);
                sliderTitle.querySelector(".active").classList.remove("active");
                this.classList.add("active");
            });
        });
    }

    function initContent() {
        images.forEach((image, index) => {            
            contentTitle.innerText = images[index].title;
            contentArea.innerText = images[index].area;
            contentRepairTime.innerText = images[index].repairTime;
            contentRepairCost.innerText = images[index].repairCost;
        });
    }

    function changeTitle(num) {
        contentTitle.innerText = images[num].title;
        contentArea.innerText = images[num].area;
        contentRepairTime.innerText = images[num].repairTime;
        contentRepairCost.innerText = images[num].repairCost;
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }

        if (options.titles) {
            sliderTitle.querySelector(".active").classList.remove("active");
            sliderTitle.querySelector(".n" + num).classList.add("active");
        }

        if (options.titles) changeTitle(num);
    }
}

let sliderOptoins = {
    dots: true,
    titles: true
};

document.addEventListener("DOMContentLoaded", function () {
    initslider(sliderOptoins);
})