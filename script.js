document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       요소 찾기
    ========================================= */

    const donationButton =
        document.getElementById("donationButton");

    const donationSection =
        document.getElementById("donationSection");

    const jumpscareButton =
        document.getElementById("jumpscareButton");

    const jumpscareSection =
        document.getElementById("jumpscareSection");

    const jumpscareVideo =
        document.querySelector(".jumpscare-video");

    const closeButtons =
        document.querySelectorAll(".close-button");

    const menuButtons =
        document.querySelectorAll(".menu-button");


    /* =========================================
       기부
    ========================================= */

    donationButton.addEventListener("click", () => {

        donationSection.hidden = false;

        document.body.style.overflow = "hidden";

    });


    /* =========================================
       점프스케어
    ========================================= */

    jumpscareButton.addEventListener("click", () => {

        jumpscareSection.hidden = false;

        document.body.style.overflow = "hidden";

    });


    /* =========================================
       닫기 버튼
    ========================================= */

    closeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const overlay =
                button.closest(".fullscreen-overlay");


            if (!overlay) {
                return;
            }


            overlay.hidden = true;

            document.body.style.overflow = "";


            if (
                overlay.id === "jumpscareSection" &&
                jumpscareVideo
            ) {

                jumpscareVideo.pause();

                jumpscareVideo.currentTime = 0;

            }

        });

    });


    /* =========================================
       ESC
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }


        const overlays =
            document.querySelectorAll(
                ".fullscreen-overlay"
            );


        overlays.forEach((overlay) => {

            overlay.hidden = true;

        });


        document.body.style.overflow = "";


        if (jumpscareVideo) {

            jumpscareVideo.pause();

            jumpscareVideo.currentTime = 0;

        }


        const menuMessage =
            document.querySelector(".menu-message");


        if (menuMessage) {

            menuMessage.remove();

        }

    });


    /* =========================================
       상단 메뉴
       
       클릭하면 헤더는 그대로 두고
       그 아래 영역에 ㅗ 표시
    ========================================= */

    menuButtons.forEach((button) => {

        button.addEventListener("click", () => {

            /*
             * 이미 표시되어 있으면 새로 만들지 않음
             */

            if (
                document.querySelector(".menu-message")
            ) {
                return;
            }


            const message =
                document.createElement("div");


            message.className =
                "menu-message";


            message.textContent =
                "ㅗ";


            document.body.appendChild(message);


            document.body.style.overflow =
                "hidden";


            /*
             * ㅗ 화면을 클릭하면 닫음
             */

            message.addEventListener(
                "click",
                () => {

                    message.remove();

                    document.body.style.overflow = "";

                }
            );

        });

    });

});
