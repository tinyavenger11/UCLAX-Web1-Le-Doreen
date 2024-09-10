import { LightboxData } from "./LightboxData"


// <!-- Images used to open the lightbox -->
<div class="row">
  <div class="column">
    <img src="../img/1_Chipotle.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/2_Coca-Cola.jpg" onclick="openModal();currentSlide(5)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/3_Depeche Mode.jpg" onclick="openModal();currentSlide(12)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/4_Immersive Monet.jpg" onclick="openModal();currentSlide(18)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/5_LA Metro Rail.jpg" onclick="openModal();currentSlide(31)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/6_MacArthur Park.jpg" onclick="openModal();currentSlide(36)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/7_Minority Report.jpg" onclick="openModal();currentSlide(42)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/8_PatchWorks.jpg" onclick="openModal();currentSlide(46)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/9_Paula Scher.jpg" onclick="openModal();currentSlide(56)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/10_reBookit.jpg" onclick="openModal();currentSlide(61)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="../img/11_Photography.jpg" onclick="openModal();currentSlide(65)" class="hover-shadow">
  </div>
</div>

//* <!-- The Modal/Lightbox --> */
<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 68</div>
      <img src="./img/1_@0.25x.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 68</div>
      <img src="./img/2@0.25x.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 68</div>
      <img src="./img/3@0.25x.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">4 / 68</div>
      <img src="./img/4@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">5 / 68</div>
      <img src="./img/5_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">6 / 68</div>
      <img src="./img/6@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">7 / 68</div>
      <img src="./img/7@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">8 / 68</div>
      <img src="./img/8@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">9 / 68</div>
      <img src="./img/9@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">10 / 68</div>
      <img src="./img/10@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">11 / 68</div>
      <img src="./img/11@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">12 / 68</div>
      <img src="./img/12_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">13 / 68</div>
      <img src="./img/13@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">14 / 68</div>
      <img src="./img/14@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">15 / 68</div>
      <img src="./img/15@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">16 / 68</div>
      <img src="./img/16@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">17 / 68</div>
      <img src="./img/17@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">18 / 68</div>
      <img src="./img/18_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">19 / 68</div>
      <img src="./img/19@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">20 / 68</div>
      <img src="./img/20@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">21 / 68</div>
      <img src="./img/21@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">22 / 68</div>
      <img src="./img/22@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">23 / 68</div>
      <img src="./img/23@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">24 / 68</div>
      <img src="./img/24@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">25 / 68</div>
      <img src="./img/25@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">26 / 68</div>
      <img src="./img/26@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">27 / 68</div>
      <img src="./img/27@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">28 / 68</div>
      <img src="./img/28@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">29 / 68</div>
      <img src="./img/29@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">30 / 68</div>
      <img src="./img/30@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">31 / 68</div>
      <img src="./img/31_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">32 / 68</div>
      <img src="./img/32@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">33 / 68</div>
      <img src="./img/33@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">34 / 68</div>
      <img src="./img/34@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">35 / 68</div>
      <img src="./img/35@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">36 / 68</div>
      <img src="./img/36_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">37 / 68</div>
      <img src="./img/37@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">38 / 68</div>
      <img src="./img/38@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">39 / 68</div>
      <img src="./img/39@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">40 / 68</div>
      <img src="./img/40@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">41 / 68</div>
      <img src="./img/41@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">42 / 68</div>
      <img src="./img/42_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">43 / 68</div>
      <img src="./img/43@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">44 / 68</div>
      <img src="./img/44@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">45 / 68</div>
      <img src="./img/45@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">46 / 68</div>
      <img src="./img/46_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">47 / 68</div>
      <img src="./img/47@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">48 / 68</div>
      <img src="./img/48@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">49 / 68</div>
      <img src="./img/49@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">50 / 68</div>
      <img src="./img/50@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">51 / 68</div>
      <img src="./img/51@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">52 / 68</div>
      <img src="./img/52@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">53 / 68</div>
      <img src="./img/53@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">54 / 68</div>
      <img src="./img/54@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">55 / 68</div>
      <img src="./img/55@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">56 / 68</div>
      <img src="./img/56_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">57 / 68</div>
      <img src="./img/57@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">58 / 68</div>
      <img src="./img/58@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">59 / 68</div>
      <img src="./img/59@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">60 / 68</div>
      <img src="./img/60@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">61 / 68</div>
      <img src="./img/61_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">62 / 68</div>
      <img src="./img/62@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">63 / 68</div>
      <img src="./img/63@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">64 / 68</div>
      <img src="./img/64@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">65 / 68</div>
      <img src="./img/65_@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">66 / 68</div>
      <img src="./img/66@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">67 / 68</div>
      <img src="./img/67@0.25x.jpg" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">68 / 68</div>
      <img src="./img/68@0.25x.jpg" style="width:100%">
    </div>

//* <!-- Next/previous controls --> */
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

//* <!-- Caption text --
    <div class="caption-container">
      <p id="caption"></p>
    </div> */}

    {/* <!-- Thumbnail image controls -->
    <div class="column">
      <img class="demo" src="img1.jpg" onclick="currentSlide(1)" alt="Nature">
    </div>

    <div class="column">
      <img class="demo" src="img2.jpg" onclick="currentSlide(2)" alt="Snow">
    </div>

    <div class="column">
      <img class="demo" src="img3.jpg" onclick="currentSlide(3)" alt="Mountains">
    </div>

    <div class="column">
      <img class="demo" src="img4.jpg" onclick="currentSlide(4)" alt="Lights">
    </div>
  </div>
</div> */}

.row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

//* Create four equal columns that floats next to eachother */
.column {
  float: left;
  width: 25%;
}

//* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
}

//* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

//* The Close Button */
.close {
  color: #2064b2;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

//* Hide the slides by default */
.mySlides {
  display: none;
}

//* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

//* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

//* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

//* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

//* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

<script>
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

{/* // Close the Modal */}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>
