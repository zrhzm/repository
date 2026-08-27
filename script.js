document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     ELEMENTS
     ========================================= */

  const navButtons =
    document.querySelectorAll(".nav-button");

  const homePage =
    document.getElementById("home-page");

  const dummyPage =
    document.getElementById("dummy-page");

  const donationPage =
    document.getElementById("donation-page");

  const jumpscarePage =
    document.getElementById("jumpscare-page");

  const donationButton =
    document.getElementById("donation-button");

  const jumpscareButton =
    document.getElementById("jumpscare-button");

  const jumpscareVideo =
    document.getElementById("jumpscare-video");


  /* =========================================
     PAGE LIST
     ========================================= */

  const pages = [
    homePage,
    dummyPage,
    donationPage,
    jumpscarePage
  ];


  /* =========================================
     CHANGE PAGE
     ========================================= */

  function showPage(pageToShow) {

    pages.forEach((page) => {

      page.classList.remove("active-page");

    });


    pageToShow.classList.add("active-page");


    /*

      When leaving the jumpscare page,
      stop and reset the video.

    */

    if (pageToShow !== jumpscarePage) {

      jumpscareVideo.pause();

      jumpscareVideo.currentTime = 0;

    }


    /*
      Start the background again when
      returning to Home.
    */

    if (pageToShow === homePage) {

      const backgroundVideo =
        document.querySelector(".background-video");

      backgroundVideo.play().catch(() => {});

    }


    /*
      Always return the page to the top.
    */

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* =========================================
     ACTIVE NAV
     ========================================= */

  function setActiveNav(clickedButton) {

    navButtons.forEach((button) => {

      button.classList.remove("active");

    });


    clickedButton.classList.add("active");

  }


  /* =========================================
     TOP NAVIGATION
     ========================================= */

  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const page =
        button.dataset.page;


      setActiveNav(button);


      /*
        HOME
      */

      if (page === "home") {

        showPage(homePage);

        return;

      }


      /*
        상품 / 장바구니 / 결제수단 / 설정

        전부 동일하게 ㅗ 표시
      */

      if (page === "dummy") {

        showPage(dummyPage);

      }

    });

  });


  /* =========================================
     DONATION BUTTON
     ========================================= */

  donationButton.addEventListener(
    "click",
    () => {

      /*
        중앙 버튼은 이제
        새로운 화면으로 전환한다.
      */

      showPage(donationPage);


      /*
        Home 메뉴가 아니라 별도의 중앙 기능이므로
        상단 메뉴의 active 상태는 Home에 남겨둔다.
      */

      navButtons.forEach((button) => {

        button.classList.remove("active");

      });

      navButtons[0].classList.add("active");

    }
  );


  /* =========================================
     JUMPSCARE BUTTON
     ========================================= */

  jumpscareButton.addEventListener(
  "click",
  async () => {

    showPage(jumpscarePage);

    navButtons.forEach((button) => {
      button.classList.remove("active");
    });

    navButtons[0].classList.add("active");

    try {
      jumpscareVideo.currentTime = 0;
      await jumpscareVideo.play();
    } catch (error) {
      console.log("자동재생이 차단되었습니다.", error);
    }

  }
);
