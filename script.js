document.addEventListener("DOMContentLoaded", function () {

  const navButtons = document.querySelectorAll(".nav-button");

  const homePage = document.getElementById("home-page");
  const dummyPage = document.getElementById("dummy-page");
  const donationPage = document.getElementById("donation-page");
  const jumpscarePage = document.getElementById("jumpscare-page");

  const donationButton = document.getElementById("donation-button");
  const jumpscareButton = document.getElementById("jumpscare-button");

  const jumpscareVideo = document.getElementById("jumpscare-video");
  const backgroundVideo = document.querySelector(".background-video");


 let isTransitioning = false;

function showPage(page) {

  if (isTransitioning) {
    return;
  }

  isTransitioning = true;

  document.body.classList.add("page-transition-out");

  setTimeout(function () {

    homePage.classList.remove("active-page");
    dummyPage.classList.remove("active-page");
    donationPage.classList.remove("active-page");
    jumpscarePage.classList.remove("active-page");

    page.classList.add("active-page");

    window.scrollTo(0, 0);

    document.body.classList.remove("page-transition-out");
    document.body.classList.add("page-transition-in");

    setTimeout(function () {
      document.body.classList.remove("page-transition-in");
      isTransitioning = false;
    }, 300);

  }, 250);

}


  function setActive(button) {

    navButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

  }


  /* HOME */

  navButtons[0].addEventListener("click", function () {

    setActive(navButtons[0]);

    showPage(homePage);

    jumpscareVideo.pause();
    jumpscareVideo.currentTime = 0;

    backgroundVideo.play().catch(function () {});

  });


  /* 상품 / 장바구니 / 결제수단 / 설정 */

  navButtons.forEach(function (button, index) {

    if (index === 0) {
      return;
    }

    button.addEventListener("click", function () {

      setActive(button);

      showPage(dummyPage);

      jumpscareVideo.pause();
      jumpscareVideo.currentTime = 0;

    });

  });


  /* 기부 */

  donationButton.addEventListener("click", function () {

    showPage(donationPage);

    navButtons.forEach(function (button) {
      button.classList.remove("active");
    });

  });


  /* 점프스케어 */

  jumpscareButton.addEventListener("click", function () {

    showPage(jumpscarePage);

    navButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    jumpscareVideo.currentTime = 0;

    /*
      버튼을 직접 클릭한 순간 실행하므로
      모바일에서도 자동재생을 시도할 수 있음.
    */
    jumpscareVideo.play().catch(function (error) {
      console.log("영상 자동재생이 차단되었습니다.", error);
    });

  });

});
