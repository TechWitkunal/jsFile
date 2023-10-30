function blockInspect(execute) {
    if (execute == false && execute != undefined) return;
    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Permisition not allowed")
    })

    document.addEventListener("keydown", function (e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            alert("Permisition not allowed");
        }
    });
}

function checkOffline() {
    window.addEventListener("offline", () => {
        alert("You are offline we can't move further");
    })
}


function transformBody(noOFBoxes) {
    let hideStyle = `opacity: 0; pointer-events: none; transform: scale(1);`;
    let showStyle = `opacity: 1; pointer-events: auto; transform: scale(1);`;
    for (let i = 1; i <= noOFBoxes; i++) {
        if (i == 1) {
            document.querySelector(`.tansform-body-section-${i}`).style.cssText = `
            position: absolute;
            transform: scale(0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.7rem;
            opacity: 1;
            pointer-events: auto;
            transition: all 0.3s ease-in-out;
            `;
            document.querySelectorAll(`.tansform-body-section-${i} .next-btn`).forEach(function (element) {
                element.addEventListener("click", () => {
                    document.querySelector(`.tansform-body-section-${i}`).style.cssText = hideStyle;
                    document.querySelector(`.tansform-body-section-${i + 1}`).style.cssText += showStyle;
                });
            });
        } else {
            document.querySelector(`.tansform-body-section-${i}`).style.cssText = `
            border-radius: 0.7rem;
            position: absolute;
            transform: scale(0.9);
            border-radius: 0.7rem;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease-in-out;
        `
            if (i != noOFBoxes) {
                document.querySelectorAll(`.tansform-body-section-${i} .next-btn`).forEach(function (element) {
                    element.addEventListener("click", () => {
                        document.querySelector(`.tansform-body-section-${i}`).style.cssText = hideStyle;
                        document.querySelector(`.tansform-body-section-${i + 1}`).style.cssText += showStyle;
                    });
                })
            }
        }

        if (document.querySelector(".tansform-body")) {
            document.querySelector(".tansform-body").style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%
    
    `;
        }
        // if (document.querySelector(".tansform-body-section-1")) {
        //     document.querySelector(".tansform-body-section-1").style.cssText = `
        // position: absolute;
        // transform: scale(0.9);
        // width: 10rem;
        // height: 5rem;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // border-radius: 0.7rem;
        // opacity: 1;
        // pointer-events: auto;
        // transition: all 0.3s ease-in-out;
        // `;
        // }
        // if (document.querySelector(".tansform-body-section-2")) {
        //     document.querySelector(".tansform-body-section-2").style.cssText = `
        // position: absolute;
        // transform: scale(0.9);
        // background-color: white;
        // padding: 0.5rem 1.2rem 1.2rem 1.2rem;
        // border-radius: 0.9rem;
        // opacity: 0;
        // pointer-events: none;
        // transition: all 0.3s ease-in-out;
        // `;
        // }
        // if (document.querySelector(".tansform-body-section-3")) {
        //     document.querySelector(".tansform-body-section-3").style.cssText = `
        // position: absolute;
        // transform: scale(0.9);
        // background-color: white;
        // width: 35rem;
        // border-radius: 0.7rem;
        // opacity: 0;
        // pointer-events: none;
        // transition: all 0.3s ease-in-out;
        // `;
        // }
        // if (document.querySelector(".tansform-body-section-4")) {
        //     document.querySelector(".tansform-body-section-4").style.cssText = `
        // position: absolute;
        // transform: scale(0.9);
        // background-color: white;
        // width: 25rem;
        // border-radius: 0.7rem;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // flex-direction: column;
        // line-height: 1.8rem;
        // padding: 1rem 0;
        // opacity: 0;
        // pointer-events: none;
        // transition: all 0.3s ease-in-out;
        // `;
        // }


        // if (document.querySelectorAll(".tansform-body-section-2 .next-btn").length > 0 || document.querySelectorAll(".tansform-body-section-3 .next-btn").length > 0) {
        //     document.querySelectorAll(".tansform-body-section-2 .next-btn").forEach(function (element) {
        //         element.addEventListener("click", () => {
        //             document.querySelector(".tansform-body-section-2").style.cssText = hideStyle;
        //             document.querySelector(".tansform-body-section-3").style.cssText = showStyle;
        //         });
        //     });

        //     document.querySelectorAll(".tansform-body-section-3 .next-btn").forEach(function (element) {
        //         element.addEventListener("click", () => {
        //             document.querySelector(".tansform-body-section-3").style.cssText = hideStyle;
        //             document.querySelector(".tansform-body-section-4").style.cssText = showStyle;
        //         });
        //     });
        // }

    }
}
