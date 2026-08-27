document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       기부
    ===================================== */

    const donationButton =
        document.getElementById(
            "donationButton"
        );

    const donationSection =
        document.getElementById(
            "donationSection"
        );


    donationButton.addEventListener(
        "click",
        () => {

            donationSection.hidden = false;

            document.body.style.overflow =
                "hidden";

        }
    );


    /* =====================================
       점프스케어
    ===================================== */

    const jumpscareButton =
        document.getElementById(
            "jumpscareButton"
        );

    const jumpscareSection =
        document.getElementById(
            "jumpscareSection"
        );

    const jumpscareVideo =
        document.querySelector(
            ".jumpscare-video"
        );


    jumpscareButton.addEventListener(
        "click",
        () => {

            jumpscareSection.hidden = false;

            document.body.style.overflow =
                "hidden";

        }
    );


    /* =====================================
       닫기 버튼
    ===================================== */

    const closeButtons =
        document.querySelectorAll(
            ".close-button"
        );


    closeButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const overlay =
                        button.closest(
                            ".fullscreen-overlay"
                        );


                    if (!overlay) {
                        return;
                    }


                    overlay.hidden = true;


                    document.body.style.overflow =
                        "";


                    /* 영상 정지 */

                    if (
                        overlay.id ===
                        "jumpscareSection" &&
                        jumpscareVideo
                    ) {

                        jumpscareVideo.pause();

                        jumpscareVideo.currentTime =
                            0;

                    }

                }
            );

        }
    );


    /* =====================================
       ESC로 닫기
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            const overlays =
                document.querySelectorAll(
                    ".fullscreen-overlay"
                );


            overlays.forEach(
                (overlay) => {

                    overlay.hidden = true;

                }
            );


            document.body.style.overflow =
                "";


            if (jumpscareVideo) {

                jumpscareVideo.pause();

                jumpscareVideo.currentTime =
                    0;

            }

        }
    );


    /* =====================================
       상단 메뉴
       
       네 메뉴 전부 동일하게
       ㅗ 표시
    ===================================== */

    const menuButtons =
        document.querySelectorAll(
            ".menu-button"
        );

    const menuMessage =
        document.getElementById(
            "menuMessage"
        );


    menuButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    menuMessage.hidden =
                        false;

                    document.body.style.overflow =
                        "hidden";

                }
            );

        }
    );


    /* =====================================
       ㅗ 화면 클릭하면 홈으로 돌아오기
    ===================================== */

    menuMessage.addEventListener(
        "click",
        () => {

            menuMessage.hidden =
                true;

            document.body.style.overflow =
                "";

        }
    );

});
