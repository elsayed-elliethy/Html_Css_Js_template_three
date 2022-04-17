let section = document.querySelector(".skills");
let progressSpan = document.querySelectorAll(".progress span");

let section2 = document.querySelector(".stats");
let statsSpan = document.querySelectorAll(".stats .num");
let started = false;
console.log(section2);
console.log(statsSpan);

console.log(section);

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 100) {
    // console.log("yes");
    progressSpan.forEach(function (ele) {
      ele.style.width = `${ele.dataset.width}`;
    });
  }

  if (window.scrollY >= section2.offsetTop - 100) {
    // console.log("yes");
    if (started != true) {
      statsSpan.forEach(function (ele) {
        startCount(ele);
      });
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.number;
  let count = setInterval(function () {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
  let dateNow = new Date().getTime(); //ms
  let dateDiff = countDownDate - dateNow; // ms
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours;
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;
  console.log();
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
    document.querySelector(".time").innerHTML = "The Day Of Event";
  }
}, 1000);

let mySpan = document.querySelector(".up");

console.log(mySpan);

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    mySpan.classList.add("show");
  } else {
    mySpan.classList.remove("show");
  }
};

mySpan.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

////////////////////////////////////
let galleryFilter = document.querySelector(".filter");
let filterField = document.querySelectorAll(".filter li");
let boxs = document.querySelectorAll(".gallery-box");
let galleryContainer = document.querySelector(".gallery .container");

console.log(galleryFilter);

console.log(filterField);
console.log("************");
console.log(boxs);
console.log("************");
filterField.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    filtration(e.target);
    manageBoxs(e.target);
  });
});

function filtration(filterParam) {
  filterField.forEach(function (el) {
    el.classList.remove("active");
    filterParam.classList.add("active");
  });
}
function manageBoxs(filterParam) {
  boxs.forEach(function (elem) {
    elem.style.display = "none";
    if (elem.classList.contains(filterParam.dataset.cat)) {
      elem.style.display = "block";
    }
  });
}

// ///////////////darkTheme///////////////

let nightBtn = document.querySelector(".theme1");
let dafaultStyle = document.getElementById("pagestyle");

nightBtn.addEventListener("click", function () {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    localStorage.removeItem("themeColor");
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem("themeColor", "dark");
  }
});

if (localStorage.getItem("themeColor")) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

///////////////////////////////////

////////////multiLanguages///////////////

let arBtn = document.querySelector("#ar");
let enBtn = document.querySelector("#en");
let bodyStyle = document.querySelector("#pagestyle");

if (localStorage.getItem("language")) {
  bodyStyle.href = "css/arabic.css";
  translateAr();
}

arBtn.addEventListener("click", function () {
  bodyStyle.href = "css/arabic.css";
  translateAr();
  localStorage.setItem("language", "Arabic");
});
enBtn.addEventListener("click", function () {
  bodyStyle.href = "css/main.css";
  translateEn();
  localStorage.removeItem("language", "Arabic");
});

function translateAr() {
  // arBtn.textContent = "En";
  ///header///////////
  document.querySelector("#pagetitle").textContent = "التصميم الثالث";
  document.querySelector(".logo").textContent = "الزيرو";
  document.querySelectorAll(".links li a")[0].textContent = "المقالات";
  document.querySelectorAll(".links li a")[1].textContent = "معرض الاعمال";
  document.querySelectorAll(".links li a")[2].textContent = "المميزات";
  document.querySelectorAll(".links li a")[3].textContent = "روابط اخري";
  document.querySelectorAll("header .mega-menu .links1 li a")[0].textContent =
    "المؤسسين";
  document.querySelectorAll("header .mega-menu .links1 li a")[1].textContent =
    "اعضاء الفريق";
  document.querySelectorAll("header .mega-menu .links1 li a")[2].textContent =
    "الخدمات";
  document.querySelectorAll("header .mega-menu .links1 li a")[3].textContent =
    "مهاراتنا";
  document.querySelectorAll("header .mega-menu .links1 li a")[4].textContent =
    "كيف نعمل";
  document.querySelectorAll("header .mega-menu .links1 li a")[5].textContent =
    "المؤتمرات الاخيرة";
  document.querySelectorAll("header .mega-menu .links1 li a")[6].textContent =
    "خطط الاسعار";
  document.querySelectorAll("header .mega-menu .links1 li a")[7].textContent =
    "الفيدوهات الاكثر انتشارا";
  document.querySelectorAll("header .mega-menu .links1 li a")[8].textContent =
    "الاحصائيات";
  document.querySelectorAll("header .mega-menu .links1 li a")[9].textContent =
    " طلب خصومات";

  ///////landing//////
  document.querySelector(".landing .container .text h1").textContent =
    "مرحبا بك في عالم الزيرو";
  document.querySelector(".landing .container .text p").textContent =
    "انا هنا سأشارك كل شيء عن حياتي.الكتب التي اقراها والالعاب والقصص والاحداث";

  /////articles/////////
  document.querySelector(".articles .main-title").textContent = "المقالات";
  document.querySelectorAll(".articles .content h3")[0].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[1].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[2].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[3].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[4].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[5].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[6].textContent =
    "عنوان للتجربة";
  document.querySelectorAll(".articles .content h3")[7].textContent =
    "عنوان للتجربة";

  document.querySelectorAll(".articles .content p")[0].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[1].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[2].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[3].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[4].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[5].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[6].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .content p")[7].textContent =
    "نص لتوضيح الفكرة";
  document.querySelectorAll(".articles .info a")[0].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[1].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[2].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[3].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[4].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[5].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[6].textContent =
    "المزيد من التفاصيل";
  document.querySelectorAll(".articles .info a")[7].textContent =
    "المزيد من التفاصيل";

  let articlesI = document.querySelectorAll(".articles .info i");
  articlesI.forEach(function (ele) {
    ele.classList.remove("fa-long-arrow-alt-right");
    ele.classList.add("fa-long-arrow-alt-left");
  });

  //////////gallery////////
  document.querySelector(".gallery .main-title").textContent = "معرض الاعمال";
  document.querySelectorAll(".gallery .filter li")[0].textContent = "الكل";
  document.querySelectorAll(".gallery .filter li")[1].textContent = " الويب";
  document.querySelectorAll(".gallery .filter li")[2].textContent = " الجرافيك";
  document.querySelectorAll(".gallery .filter li")[3].textContent = " التسويق";
  /////////////features///////////////
  document.querySelector(".features .main-title").textContent = "المميزات";
  document.querySelectorAll(".features .feat-content h2")[0].textContent =
    "الدقة";
  document.querySelectorAll(".features .feat-content h2")[1].textContent =
    "الوقت";
  document.querySelectorAll(".features .feat-content h2")[2].textContent =
    "الشغف";

  document.querySelectorAll(".features .feat-content p")[0].textContent =
    "دقة ف الاداء";
  document.querySelectorAll(".features .feat-content p")[1].textContent =
    "سرعة ف العمل";
  document.querySelectorAll(".features .feat-content p")[2].textContent =
    "شغف وحب للعمل";
  document.querySelectorAll(".features .feat-content a")[0].textContent =
    "اقرا اكثر";
  document.querySelectorAll(".features .feat-content a")[1].textContent =
    "اقرا اكثر";
  document.querySelectorAll(".features .feat-content a")[2].textContent =
    "اقرا اكثر";
  //////////testimonials//////////
  document.querySelector(".testimonials .main-title").textContent = "المؤسسين";
  document.querySelectorAll(".testimonials .testi-box h3")[0].textContent =
    "محمد فرج";
  document.querySelectorAll(".testimonials .testi-box h3")[1].textContent =
    "محمد ابراهيم";
  document.querySelectorAll(".testimonials .testi-box h3")[2].textContent =
    "شادي نبيل";
  document.querySelectorAll(".testimonials .testi-box h3")[3].textContent =
    "عمرو هنداوي";
  document.querySelectorAll(".testimonials .testi-box h3")[4].textContent =
    "شريف اشرف";
  document.querySelectorAll(".testimonials .testi-box h3")[5].textContent =
    "اسامة محمد";
  document.querySelectorAll(".testimonials .testi-box .title")[0].textContent =
    "مطور واجهات الويب الامامية والخلفية";
  document.querySelectorAll(".testimonials .testi-box .title")[1].textContent =
    "مطور واجهات الويب الامامية والخلفية";
  document.querySelectorAll(".testimonials .testi-box .title")[2].textContent =
    "مطور واجهات الويب الامامية والخلفية";
  document.querySelectorAll(".testimonials .testi-box .title")[3].textContent =
    "مطور واجهات الويب الامامية والخلفية";
  document.querySelectorAll(".testimonials .testi-box .title")[4].textContent =
    "مطور واجهات الويب الامامية والخلفية";
  document.querySelectorAll(".testimonials .testi-box .title")[5].textContent =
    "مطور واجهات الويب الامامية والخلفية";
  document.querySelectorAll(".testimonials .testi-box p")[0].textContent =
    "نص لتوضيح الوظيفة";
  document.querySelectorAll(".testimonials .testi-box p")[1].textContent =
    "نص لتوضيح الوظيفة";
  document.querySelectorAll(".testimonials .testi-box p")[2].textContent =
    "نص لتوضيح الوظيفة";
  document.querySelectorAll(".testimonials .testi-box p")[3].textContent =
    "نص لتوضيح الوظيفة";
  document.querySelectorAll(".testimonials .testi-box p")[4].textContent =
    "نص لتوضيح الوظيفة";
  document.querySelectorAll(".testimonials .testi-box p")[5].textContent =
    "نص لتوضيح الوظيفة";
  //////////team-members//////////
  document.querySelector(".team .main-title").textContent = "اعضاء الفريق";
  document.querySelectorAll(".team .info h3")[0].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[1].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[2].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[3].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[4].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[5].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[6].textContent = "الاسم";
  document.querySelectorAll(".team .info h3")[7].textContent = "الاسم";

  document.querySelectorAll(".team .info p")[0].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[1].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[2].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[3].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[4].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[5].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[6].textContent = "وصف قصير";
  document.querySelectorAll(".team .info p")[7].textContent = "وصف قصير";

  //////////services//////////
  document.querySelector(".services .main-title").textContent = "الخدمات";
  document.querySelectorAll(".services .serv-box h3")[0].textContent =
    "التوجيه";
  document.querySelectorAll(".services .serv-box h3")[1].textContent =
    "حل المشاكل";
  document.querySelectorAll(".services .serv-box h3")[2].textContent =
    "امن المعلومات";
  document.querySelectorAll(".services .serv-box h3")[3].textContent =
    "التسويق";
  document.querySelectorAll(".services .serv-box h3")[4].textContent =
    "امن المعلومات";
  document.querySelectorAll(".services .serv-box h3")[5].textContent =
    "كتابة الاكواد";
  document.querySelectorAll(".services .serv-box .info a")[0].textContent =
    "تفاصيل";
  document.querySelectorAll(".services .serv-box .info a")[1].textContent =
    "تفاصيل";
  document.querySelectorAll(".services .serv-box .info a")[2].textContent =
    "تفاصيل";
  document.querySelectorAll(".services .serv-box .info a")[3].textContent =
    "تفاصيل";
  document.querySelectorAll(".services .serv-box .info a")[4].textContent =
    "تفاصيل";
  document.querySelectorAll(".services .serv-box .info a")[5].textContent =
    "تفاصيل";

  ////////////skills///////////
  document.querySelector(".skills .main-title").textContent = "مهاراتنا";
  ////////////how it works///////////
  document.querySelector(".how .main-title").textContent = "كيف نعمل";
  document.querySelectorAll(".how .text h3")[0].textContent = "تحليل الاعمال";
  document.querySelectorAll(".how .text h3")[1].textContent = "بناء الموقع";
  document.querySelectorAll(".how .text h3")[2].textContent = "التطوير";
  document.querySelectorAll(".how .text p")[0].textContent =
    "نص لتوضيح الفكرة اكثر واكثر واكثر واكثر واكثر زاكثر زاكثر واكثر";
  document.querySelectorAll(".how .text p")[1].textContent =
    "نص لتوضيح الفكرة اكثر واكثر واكثر واكثر واكثر زاكثر زاكثر واكثر";
  document.querySelectorAll(".how .text p")[2].textContent =
    "نص لتوضيح الفكرة اكثر واكثر واكثر واكثر واكثر زاكثر زاكثر واكثر";

  //////////events//////////
  document.querySelector(".events .main-title").textContent =
    "المؤتمرات الاخيرة";
  document.querySelector(".events .d").textContent = "الايام";
  document.querySelector(".events .unit .h").textContent = "الساعات";
  document.querySelector(".events .unit .m").textContent = "الدقائق";
  document.querySelector(".events .unit .s").textContent = "الثواني";
  document.querySelector(".events .text h2").textContent =
    "مؤتمر اساتذة التكنولوجيا 2021";
  document.querySelector(".events .text p").textContent =
    "نص لتوضيح الفكرة اكثر واكثر واكثر واكثر واكثر زاكثر زاكثر واكثر";
  document.querySelector(".subscribe form .input1").placeholder = "ادخل ايميلك";
  document.querySelector(".subscribe .input2").value = "اشترك";
  /////price//////////
  document.querySelector(".pricing .main-title").textContent = "خطط الاسعار";
  document.querySelectorAll(".pricing .box h3")[0].textContent = "الاساسي";
  document.querySelectorAll(".pricing .box h3")[1].textContent = "المتقدم";
  document.querySelectorAll(".pricing .box h3")[2].textContent = "المحترف";
  document.querySelectorAll(".pricing .box .per-m")[0].textContent = "شهريا";
  document.querySelectorAll(".pricing .box .per-m")[1].textContent = "شهريا";
  document.querySelectorAll(".pricing .box .per-m")[2].textContent = "شهريا";

  document.querySelectorAll(".pricing .box .ul-basic li")[0].textContent =
    "10جيجابايت مساحة";
  document.querySelectorAll(".pricing .box .ul-basic li")[1].textContent =
    "5 ايميل";
  document.querySelectorAll(".pricing .box .ul-basic li")[2].textContent =
    "2 دومين";
  document.querySelectorAll(".pricing .box .ul-basic li")[3].textContent =
    "4 قاعدة بيانات";
  document.querySelectorAll(".pricing .box .ul-basic li")[4].textContent =
    "دعم اساسي";
  document.querySelectorAll(".pricing .box .ul-advanced li")[0].textContent =
    "20جيجابايت مساحة";
  document.querySelectorAll(".pricing .box .ul-advanced li")[1].textContent =
    "10 ايميل";
  document.querySelectorAll(".pricing .box .ul-advanced li")[2].textContent =
    "5 دومين";
  document.querySelectorAll(".pricing .box .ul-advanced li")[3].textContent =
    "8 قاعدة بيانات";
  document.querySelectorAll(".pricing .box .ul-advanced li")[4].textContent =
    "دعم منقدم";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[0].textContent = "50جيجابايت مساحة";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[1].textContent = "20 ايميل";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[2].textContent = "10 دومين";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[3].textContent = "20 قاعدة بيانات";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[4].textContent = "دعم احترافي";

  document.querySelectorAll(".pricing .box a")[0].textContent = "اختر خطة";
  document.querySelectorAll(".pricing .box a")[1].textContent = "اختر خطة";
  document.querySelectorAll(".pricing .box a")[2].textContent = "اختر خطة";
  document.querySelector(".pricing .special").textContent = "الاكثر انتشارا";
  ///////videos////////
  document.querySelector(".videos .main-title").textContent =
    "الفيديوهات الاكثر مشاهدة";
  document.querySelector(".videos .title h3").textContent =
    "الفيديوهات الاكثر مشاهدة";
  ///////////stats///////
  document.querySelector(".stats h2").textContent = "الاحصائيات";
  document.querySelector(".stats .box .c").textContent = "العملاء";
  document.querySelector(".stats .box .p").textContent = "المشاريع";
  document.querySelector(".stats .box .co").textContent = "الدول";
  document.querySelector(".stats .box .mo").textContent = "الاموال";

  ///////////discount///////
  document.querySelector(".discount .disc1 h2").textContent = "لدينا خصومات";
  document.querySelector(".discount .disc1 p").textContent =
    " نص لتوضيح الفكرة ";
  document.querySelector(".discount .disc2 h2").textContent = " طلب الخصومات";
  document.querySelectorAll(".discount .disc2 input")[0].placeholder = "الاسم";
  document.querySelectorAll(".discount .disc2 input")[1].placeholder =
    "الايميل";
  document.querySelectorAll(".discount .disc2 input")[2].placeholder =
    "رقم التليفون";
  document.querySelectorAll(".discount .disc2 input")[3].value = "ارسال";
  document.querySelector(".discount .disc2 textarea").placeholder =
    "ماهي طلباتك";
  ////////footer///////
  document.querySelector("footer .box1 h2").textContent = "الزيرو";
  document.querySelector("footer .box1 p").textContent = "نص لتوضيح الفكرة";
  document.querySelectorAll("footer .box2 ul li a")[0].textContent = "رابط 1";
  document.querySelectorAll("footer .box2 ul li a")[1].textContent = "رابط 2";
  document.querySelectorAll("footer .box2 ul li a")[2].textContent = "رابط 3";
  document.querySelectorAll("footer .box2 ul li a")[3].textContent = "رابط 4";
  document.querySelectorAll("footer .box2 ul li a")[4].textContent = "رابط 5";
  document.querySelectorAll("footer .box3 .info")[0].textContent =
    "الجيزة بداخل ابوالهول غرفة رقم 220";
  document.querySelectorAll("footer .box3 .info")[1].textContent =
    "ساعات العمل من 10صباحا الي 6 مساء";
  document.querySelector("footer .copyRight").textContent =
    "الزيرو /جميع الحقوق محفوظة";
}

function translateEn() {
  // arBtn.textContent = "Ar";
  ///header///////////
  document.querySelector("#pagetitle").textContent = "Template 3";

  document.querySelector(".logo").textContent = "Elzero";
  document.querySelectorAll(".links li a")[0].textContent = "Articles";
  document.querySelectorAll(".links li a")[1].textContent = "Gallery";
  document.querySelectorAll(".links li a")[2].textContent = "Features";
  document.querySelectorAll(".links li a")[3].textContent = "Other Links";

  document.querySelectorAll("header .mega-menu .links1 li a")[0].textContent =
    "Testimonials";
  document.querySelectorAll("header .mega-menu .links1 li a")[1].textContent =
    "Team Members";
  document.querySelectorAll("header .mega-menu .links1 li a")[2].textContent =
    "Services";
  document.querySelectorAll("header .mega-menu .links1 li a")[3].textContent =
    "Our Skills";
  document.querySelectorAll("header .mega-menu .links1 li a")[4].textContent =
    "Hoe It Work?";
  document.querySelectorAll("header .mega-menu .links1 li a")[5].textContent =
    "Latest Events";
  document.querySelectorAll("header .mega-menu .links1 li a")[6].textContent =
    "Pricing Plane";
  document.querySelectorAll("header .mega-menu .links1 li a")[7].textContent =
    "Top Videos";
  document.querySelectorAll("header .mega-menu .links1 li a")[8].textContent =
    "Stats";
  document.querySelectorAll("header .mega-menu .links1 li a")[9].textContent =
    "Request A Discount";
  ///////landing//////
  document.querySelector(".landing .container .text h1").textContent =
    "Welcome, To Elzero World";
  document.querySelector(".landing .container .text p").textContent =
    "Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events";

  /////articles/////////
  document.querySelector(".articles .main-title").textContent = "Articles";
  document.querySelectorAll(".articles .content h3")[0].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[1].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[2].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[3].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[4].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[5].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[6].textContent =
    "Test Title";
  document.querySelectorAll(".articles .content h3")[7].textContent =
    "Test Title";

  document.querySelectorAll(".articles .content p")[0].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[1].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[2].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[3].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[4].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[5].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[6].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .content p")[7].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
  document.querySelectorAll(".articles .info a")[0].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[1].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[2].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[3].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[4].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[5].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[6].textContent = "Read More";
  document.querySelectorAll(".articles .info a")[7].textContent = "Read More";

  let articlesI = document.querySelectorAll(".articles .info i");
  articlesI.forEach(function (ele) {
    ele.classList.remove("fa-long-arrow-alt-left");
    ele.classList.add("fa-long-arrow-alt-right");
  });
  //////////gallery////////
  document.querySelector(".gallery .main-title").textContent = "GALLERY";
  document.querySelectorAll(".gallery .filter li")[0].textContent = "All";
  document.querySelectorAll(".gallery .filter li")[1].textContent = " Web";
  document.querySelectorAll(".gallery .filter li")[2].textContent = " Graphic";
  document.querySelectorAll(".gallery .filter li")[3].textContent =
    " Marketing";
  /////////////features///////////////
  document.querySelector(".features .main-title").textContent = "FEATURES";
  document.querySelectorAll(".features .feat-content h2")[0].textContent =
    "Quality";
  document.querySelectorAll(".features .feat-content h2")[1].textContent =
    "Time";
  document.querySelectorAll(".features .feat-content h2")[2].textContent =
    "Passion";

  document.querySelectorAll(".features .feat-content p")[0].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima";
  document.querySelectorAll(".features .feat-content p")[1].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima";
  document.querySelectorAll(".features .feat-content p")[2].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima";
  document.querySelectorAll(".features .feat-content a")[0].textContent =
    "More";
  document.querySelectorAll(".features .feat-content a")[1].textContent =
    "More";
  document.querySelectorAll(".features .feat-content a")[2].textContent =
    "More";
  //////////testimonials//////////
  document.querySelector(".testimonials .main-title").textContent =
    "TESTIMONIALS";
  document.querySelectorAll(".testimonials .testi-box h3")[0].textContent =
    "Mohamed Farag";
  document.querySelectorAll(".testimonials .testi-box h3")[1].textContent =
    "Mohamed Ibrahim";
  document.querySelectorAll(".testimonials .testi-box h3")[2].textContent =
    "Shady Nabil";
  document.querySelectorAll(".testimonials .testi-box h3")[3].textContent =
    "Amr Hendawy";
  document.querySelectorAll(".testimonials .testi-box h3")[4].textContent =
    "Sherief Ashraf";
  document.querySelectorAll(".testimonials .testi-box h3")[5].textContent =
    "Osama Mohamed";
  document.querySelectorAll(".testimonials .testi-box .title")[0].textContent =
    "Full Stack Developer";
  document.querySelectorAll(".testimonials .testi-box .title")[1].textContent =
    "Full Stack Developer";
  document.querySelectorAll(".testimonials .testi-box .title")[2].textContent =
    "Full Stack Developer";
  document.querySelectorAll(".testimonials .testi-box .title")[3].textContent =
    "Full Stack Developer";
  document.querySelectorAll(".testimonials .testi-box .title")[4].textContent =
    "Full Stack Developer";
  document.querySelectorAll(".testimonials .testi-box .title")[5].textContent =
    "Full Stack Developer";
  document.querySelectorAll(".testimonials .testi-box p")[0].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
  document.querySelectorAll(".testimonials .testi-box p")[1].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
  document.querySelectorAll(".testimonials .testi-box p")[2].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
  document.querySelectorAll(".testimonials .testi-box p")[3].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
  document.querySelectorAll(".testimonials .testi-box p")[4].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
  document.querySelectorAll(".testimonials .testi-box p")[5].textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
  //////////team-members//////////
  document.querySelector(".team .main-title").textContent = "TEAM MEMBERS";
  document.querySelectorAll(".team .info h3")[0].textContent = "Name";
  document.querySelectorAll(".team .info h3")[1].textContent = "Name";
  document.querySelectorAll(".team .info h3")[2].textContent = "Name";
  document.querySelectorAll(".team .info h3")[3].textContent = "Name";
  document.querySelectorAll(".team .info h3")[4].textContent = "Name";
  document.querySelectorAll(".team .info h3")[5].textContent = "Name";
  document.querySelectorAll(".team .info h3")[6].textContent = "Name";
  document.querySelectorAll(".team .info h3")[7].textContent = "Name";

  document.querySelectorAll(".team .info p")[0].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[1].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[2].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[3].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[4].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[5].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[6].textContent =
    "Simple Short Description";
  document.querySelectorAll(".team .info p")[7].textContent =
    "Simple Short Description";

  //////////services//////////
  document.querySelector(".services .main-title").textContent = "SERVICES";
  document.querySelectorAll(".services .serv-box h3")[0].textContent =
    "Security";
  document.querySelectorAll(".services .serv-box h3")[1].textContent =
    "Fixing Issues";
  document.querySelectorAll(".services .serv-box h3")[2].textContent =
    "Location";
  document.querySelectorAll(".services .serv-box h3")[3].textContent = "Coding";
  document.querySelectorAll(".services .serv-box h3")[4].textContent =
    "Security ";
  document.querySelectorAll(".services .serv-box h3")[5].textContent =
    "Marketing";
  document.querySelectorAll(".services .serv-box .info a")[0].textContent =
    "Design";
  document.querySelectorAll(".services .serv-box .info a")[1].textContent =
    "Design";
  document.querySelectorAll(".services .serv-box .info a")[2].textContent =
    "Design";
  document.querySelectorAll(".services .serv-box .info a")[3].textContent =
    "Design";
  document.querySelectorAll(".services .serv-box .info a")[4].textContent =
    "Design";
  document.querySelectorAll(".services .serv-box .info a")[5].textContent =
    "Design";

  ////////////skills///////////
  document.querySelector(".skills .main-title").textContent = "OUR SKILLS";
  ////////////how it works///////////
  document.querySelector(".how .main-title").textContent = "HOW IT WORKS ?";
  document.querySelectorAll(".how .text h3")[0].textContent =
    "Business Analysis";
  document.querySelectorAll(".how .text h3")[1].textContent = "Architecture";
  document.querySelectorAll(".how .text h3")[2].textContent = "Developement";
  document.querySelectorAll(".how .text p")[0].textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel";
  document.querySelectorAll(".how .text p")[1].textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel";
  document.querySelectorAll(".how .text p")[2].textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel";

  //////////events//////////
  document.querySelector(".events .main-title").textContent = "LATEST EVENTS";
  document.querySelector(".events .d").textContent = "Days";
  document.querySelector(".events .unit .h").textContent = "Hours";
  document.querySelector(".events .unit .m").textContent = "Minutes";
  document.querySelector(".events .unit .s").textContent = "Seconds";
  document.querySelector(".events .text h2").textContent =
    "Tech Masters Event 2021";
  document.querySelector(".events .text p").textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro";
  document.querySelector(".subscribe form .input1").placeholder =
    "Enter Your Email ";
  document.querySelector(".subscribe .input2").value = "Subscribe";
  /////price//////////
  document.querySelector(".pricing .main-title").textContent = "PRICING PLANS";
  document.querySelectorAll(".pricing .box h3")[0].textContent = "Basic";
  document.querySelectorAll(".pricing .box h3")[1].textContent = "Advanced";
  document.querySelectorAll(".pricing .box h3")[2].textContent = "Professional";
  document.querySelectorAll(".pricing .box .per-m")[0].textContent =
    "Per Month";
  document.querySelectorAll(".pricing .box .per-m")[1].textContent =
    "Per Month";
  document.querySelectorAll(".pricing .box .per-m")[2].textContent =
    "Per Month";

  document.querySelectorAll(".pricing .box .ul-basic li")[0].textContent =
    "10GB HDD Space";
  document.querySelectorAll(".pricing .box .ul-basic li")[1].textContent =
    "5 Email Addresses";
  document.querySelectorAll(".pricing .box .ul-basic li")[2].textContent =
    "2 Subdomains";
  document.querySelectorAll(".pricing .box .ul-basic li")[3].textContent =
    "4 Databases";
  document.querySelectorAll(".pricing .box .ul-basic li")[4].textContent =
    "Basic Support";
  document.querySelectorAll(".pricing .box .ul-advanced li")[0].textContent =
    "20GB HDD Space";
  document.querySelectorAll(".pricing .box .ul-advanced li")[1].textContent =
    "10 Email Addresses";
  document.querySelectorAll(".pricing .box .ul-advanced li")[2].textContent =
    "5 Subdomains";
  document.querySelectorAll(".pricing .box .ul-advanced li")[3].textContent =
    "8 Databases";
  document.querySelectorAll(".pricing .box .ul-advanced li")[4].textContent =
    "Advanced Support";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[0].textContent = "50GB HDD Space";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[1].textContent = "20 Email Addresses";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[2].textContent = "10 Subdomains";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[3].textContent = "20 Databases";
  document.querySelectorAll(
    ".pricing .box .ul-professional li"
  )[4].textContent = "Professional Support";

  document.querySelectorAll(".pricing .box a")[0].textContent = "Choose Plan";
  document.querySelectorAll(".pricing .box a")[1].textContent = "Choose Plan";
  document.querySelectorAll(".pricing .box a")[2].textContent = "Choose Plan";
  document.querySelector(".pricing .special").textContent = "Most Popular";
  ///////videos////////
  document.querySelector(".videos .main-title").textContent = "TOP VIDEOS";
  document.querySelector(".videos .title h3").textContent = "TOP VIDEOS";
  ///////////stats///////
  document.querySelector(".stats h2").textContent = "Our Awesome Stats";
  document.querySelector(".stats .box .c").textContent = "Clients";
  document.querySelector(".stats .box .p").textContent = "Projects";
  document.querySelector(".stats .box .co").textContent = "Countries";
  document.querySelector(".stats .box .mo").textContent = "Money";

  ///////////discount///////
  document.querySelector(".discount .disc1 h2").textContent =
    "We Have A Discount";
  document.querySelector(".discount .disc1 p").textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis.";

  document.querySelector(".discount .disc2 h2").textContent =
    "Request A Discount";
  document.querySelectorAll(".discount .disc2 input")[0].placeholder =
    "Your Name";
  document.querySelectorAll(".discount .disc2 input")[1].placeholder =
    "Your Email";
  document.querySelectorAll(".discount .disc2 input")[2].placeholder =
    "Your Phone";
  document.querySelectorAll(".discount .disc2 input")[3].value = "ارسال";
  document.querySelector(".discount .disc2 textarea").placeholder =
    "Tell Us About Your Needs";
  ////////footer///////
  document.querySelector("footer .box1 h2").textContent = "ELzero";
  document.querySelector("footer .box1 p").textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur";
  document.querySelectorAll("footer .box2 ul li a")[0].textContent =
    "Important Link 1";
  document.querySelectorAll("footer .box2 ul li a")[1].textContent =
    "Important Link 2";
  document.querySelectorAll("footer .box2 ul li a")[2].textContent =
    "Important Link 3";
  document.querySelectorAll("footer .box2 ul li a")[3].textContent =
    "Important Link 4";
  document.querySelectorAll("footer .box2 ul li a")[4].textContent =
    "Important Link 5";
  document.querySelectorAll("footer .box3 .info")[0].textContent =
    "Egypt, Giza, Inside The Sphinx, Room Number 220";
  document.querySelectorAll("footer .box3 .info")[1].textContent =
    "Business Hours: From 10:00 To 18:00";
  document.querySelector("footer .copyRight").textContent =
    "Made With <3 By Elzero";
}
