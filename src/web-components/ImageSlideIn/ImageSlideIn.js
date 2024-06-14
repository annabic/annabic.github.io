const template = `
  <style>
  .align-left {
    float: left;
    margin-right: 20px;
  }

  .align-right {
    float: right;
    margin-left: 20px;
  }

  .slide-in {
    opacity: 0;
    transition: all 0.5s;
  }

  .align-left.slide-in {
    transform: translateX(-30%) scale(0.95);
  }

  .align-right.slide-in {
    transform: translateX(30%) scale(0.95);
  }

  .slide-in.active {
    opacity: 1;
    transform: translateX(0%) scale(1);
  }

  @keyframes reveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(0%) scale(1);
    }
  }

  .slide-in-css {
    /* Create View Timeline */
    view-timeline-name: --revealing-image;
    view-timeline-axis: block;

    /* Attach animation, linked to the  View Timeline */
    animation: ease-in-out reveal both;
    animation-timeline: --revealing-image;

    /* Tweak range when effect should run*/
    animation-range: entry 25% cover 10%;
  }
  </style>
  <div class="rounded-md text-sm md:text-base">
    <h4>CSS</h4>
    <p class="hidden sm:block">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate porro perferendis eaque
      quia repudiandae velit maxime quidem beatae! laudantium iure!
    </p>
    <img src="http://unsplash.it/100/100" class="align-left slide-in" />
    <p>
      Similique sequi inventore quas doloremque odit nemo itaque consequatur, praesentium tempora
      nam eos exercitationem amet minima consequuntur at, cupiditate porro perferendis eaque quia
      repudiandae velit maxime quidem beatae! laudantium iure!
    </p>
    <img src="http://unsplash.it/100/100" class="align-right slide-in" />
    <p>
      Similique sequi inventore quas doloremque odit nemo itaque consequatur, praesentium tempora
      nam eos exercitationem amet minima consequuntur at, cupiditate porro perferendis eaque quia
      repudiandae velit maxime quidem beatae! laudantium iure!
    </p>
    <p class="hidden sm:block">
      Similique sequi inventore quas doloremque odit nemo itaque consequatur, praesentium tempora
      nam eos exercitationem amet minima consequuntur at, cupiditate porro perferendis eaque quia
      repudiandae velit maxime quidem beatae! laudantium iure!
    </p>
  </div>
`;

export default class ImageSlideIn extends HTMLElement {
  constructor() {
    super();

    const elem = document.createElement("template");
    elem.innerHTML = template;

    const shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.appendChild(elem.content.cloneNode(true));

    const variant = this.getAttribute("variant");

    shadowDom.querySelector("h4").innerHTML = variant;
    shadowDom.querySelectorAll(".slide-in").forEach((image) => {
      image.classList.add(`slide-in-${variant.toLocaleLowerCase()}`);
    });

    window.addEventListener("scroll", debounce(checkSlide));

    function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function (newFunc) {
        const args = arguments;
        const later = function () {
          timeout = undefined;
          if (!immediate) func.apply(newFunc, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(newFunc, args);
      };
    }

    function checkSlide() {
      const sliderImages = shadowDom.querySelectorAll(".slide-in-js");
      console.log(sliderImages);

      sliderImages.forEach((sliderImage) => {
        // half way through the image
        const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add("active");
        } else {
          sliderImage.classList.remove("active");
        }
      });
    }
  }

  // connectedCallback() {
  //   this.shadowRoot.getElementById("inc").onclick = () => {
  //     this.inc();
  //   };
  //   this.shadowRoot.getElementById("dec").onclick = () => {
  //     this.dec();
  //   };
  //   this.update(this.count);
  // }

  // inc() {
  //   this.update(++this.count);
  // }

  // dec() {
  //   this.update(--this.count);
  // }

  // update(count) {
  //   this.shadowRoot.getElementById("count").innerHTML = count;
  // }
}

customElements.define("image-slide-in", ImageSlideIn);
