const drawButton = document.getElementById("draw");
drawButton.addEventListener("click", function() {
  console.log("clicked");
  const imageData = document.getElementById("imageData").value;

  const image = new Image();
  image.src = imageData;
  // 拡大縮小率を計算するために横幅を取得する必要があるが、
  // 画像を読み込み終わってからでないと読み込めないのでonloadイベントを設定する。
  image.onload = loaded;
})

function loaded() {

  const coordinatesStr = document.getElementById("coordinate").value;
  const coordinates = eval(coordinatesStr);

  const imageSet = document.createElement("div");
  imageSet.className = "image-item"

  // 描画する横幅。.imageのcssのwidthと合わせる。
  const IMAGE_DOM_WIDTH = 300;
  const scaling = IMAGE_DOM_WIDTH / this.width;
  const imageWidth = this.width;
  this.className = "image";
  imageSet.appendChild(this);

  const COLORS = ["red", "blue", "#0f0"]
  let colorsCount = 0;

  if (coordinates) {
    for (const coordinate of coordinates) {
      const rectDom = document.createElement("div");
      // rectDom.className = "rectangle"
      rectDom.style.position = "absolute"
      rectDom.style.border = "2px solid " + COLORS[colorsCount]
      rectDom.style.left = coordinate[0] * scaling + "px";
      rectDom.style.top = coordinate[1] * scaling + "px";
      rectDom.style.width = (coordinate[2] * scaling) - (coordinate[0] * scaling) + "px";
      rectDom.style.height = (coordinate[3] * scaling) - (coordinate[1] * scaling) + "px";
      imageSet.appendChild(rectDom)

      colorsCount++;
    }
    // [877, 136,1061, 270]
    // [811, 877, 943, 1059]
    // [400, 125, 560, 350]
    // [130, 40, 540, 570]
    // [[400, 125, 560, 350],[877, 136,1061, 270],[811, 877, 943, 1059]]
  }

  const containerDom = document.querySelector(".image-set");
  containerDom.appendChild(imageSet)

  const memoDom = document.createElement("input")
  memoDom.value = document.getElementById("memo").value;
  memoDom.className = "memo";
  imageSet.appendChild(memoDom)
}
