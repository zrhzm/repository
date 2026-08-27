document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =====================================
           기부 버튼
        ===================================== */

        const donationButton =
            document.getElementById(
                "donationButton"
            );

        const donationSection =
            document.getElementById(
                "donationSection"
            );


        if (
            donationButton &&
            donationSection
        ) {

            donationButton.addEventListener(
                "click",
                () => {

                    donationSection.hidden =
                        false;

                    document.body.style.overflow =
                        "hidden";

                }
            );

        }


        /* =====================================
           점프스케어 버튼
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


        if (
            jumpscareButton &&
            jumpscareSection
        ) {

            jumpscareButton.addEventListener(
                "click",
                () => {

                    jumpscareSection.hidden =
                        false;

                    document.body.style.overflow =
                        "hidden";

                }
            );

        }


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


                        overlay.hidden =
                            true;


                        document.body.style.overflow =
                            "";


                        /*
                         * 점프스케어 영상을 닫으면
                         * 처음부터 다시 재생되도록 초기화
                         */

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
           ESC로 Overlay 닫기
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

                        overlay.hidden =
                            true;

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
           
           네 메뉴 모두 클릭하면
           헤더는 그대로 두고
           아래 화면에 ㅗ 표시
        ===================================== */

        const menuButtons =
            document.querySelectorAll(
                ".menu-button"
            );


        menuButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        /*
                         * 이미 ㅗ 화면이 있으면
                         * 새로 만들지 않음
                         */

                        const existingMessage =
                            document.querySelector(
                                ".menu-message"
                            );


                        if (
                            existingMessage
                        ) {
                            return;
                        }


                        const message =
                            document.createElement(
                                "div"
                            );


                        message.className =
                            "menu-message";


                        message.textContent =
                            "ㅗ";


                        document.body.appendChild(
                            message
                        );


                        /*
                         * ㅗ 화면만 스크롤 가능하게
                         * 만들기 위해 body 스크롤 방지
                         */

                        document.body.style.overflow =
                            "hidden";


                        /*
                         * ㅗ 화면 클릭 시 닫기
                         */

                        message.addEventListener(
                            "click",
                            () => {

                                message.remove();

                                document.body.style.overflow =
                                    "";

                            }
                        );

                    }
                );

            }
        );

    }
);
