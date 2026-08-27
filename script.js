document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       기부 버튼
    ===================================== */

    const donationButton =
        document.getElementById("donationButton");

    const donationSection =
        document.getElementById("donationSection");


    if (donationButton && donationSection) {

        donationButton.addEventListener(
            "click",
            () => {

                donationSection.hidden = false;

                donationSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

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


    if (
        jumpscareButton &&
        jumpscareSection
    ) {

        jumpscareButton.addEventListener(
            "click",
            () => {

                jumpscareSection.hidden = false;

                jumpscareSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

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

                    const section =
                        button.closest(
                            ".popup-section"
                        );

                    if (!section) {
                        return;
                    }

                    section.hidden = true;

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );

        }
    );


    /* =====================================
       페이지 이동 Fade 효과
    ===================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href$=".html"]'
        );


    internalLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const destination =
                        link.href;

                    if (
                        !destination ||
                        destination.startsWith("#")
                    ) {
                        return;
                    }


                    event.preventDefault();


                    document.body.classList.add(
                        "fade-out"
                    );


                    setTimeout(
                        () => {
                            window.location.href =
                                destination;
                        },
                        400
                    );

                }
            );

        }
    );

});
