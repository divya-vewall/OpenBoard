let sticky = document.querySelector("#sticky");
// let body = document.querySelector("body");
sticky.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `<div class="sticky">
                                  <div class="navbar">
                                    <div class="close"></div>
                                    <div class="minimize"></div>
                                    </div>
                                <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea>
                               </div>`
    body.appendChild(sticky);
    let minimize = sticky.querySelector(".minimize");
    let close = sticky.querySelector(".close");
    let textarea = sticky.querySelector("textarea");
    let isClosed = false;
    minimize.addEventListener("click", function (e) {

        if (isClosed == false) {
            textarea.style.display = "none";
        } else {
            textarea.style.display = "block";
        }
        isClosed = !isClosed
    })
    close.addEventListener("click", function (e) {
        sticky.remove();
    })
})