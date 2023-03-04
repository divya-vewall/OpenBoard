let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let ix, iy, fx, fy;

let drawingMode = false;
body.addEventListener("mousedown", function (e) {
    ix = e.clientX - boardLeft;
    iy = e.clientY - boardTop;
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(ix, iy);
    }
})
body.addEventListener("mouseup", function (e) {
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = false;
    } else if (cTool == "rect" || cTool == "line") {
        fx = e.clientX + boardLeft;
        fy = e.clientY - boardTop;
        let width = fx - ix;
        let height = fy - iy;
        if (cTool == "rect") {
            tool.strokeRect(ix, iy, width, height);
        } else if (cTool == "line") {
            tool.beginPath();
            tool.moveTo(ix, iy);
            tool.lineTo(fx, fy);
            tool.stroke();
            // console.log("line tool is pending");
        }
    }
})
body.addEventListener("mousemove", function (e) {
    if (drawingMode == false) {
        return;
    }
    if (cTool == "pencil" || cTool =="eraser") {
        fx = e.clientX - boardLeft;
        fy = e.clientY - boardTop;

        tool.lineTo(fx, fy);
        tool.stroke();
        ix = fx;
        iy = fy;
    }
})