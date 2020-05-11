function play_pause() {
  let inp = document.querySelector("input");
  let btn = document.querySelector("button");
  let audio = document.querySelector("audio");
  let ClassImgBackFace = document.getElementsByClassName("imgBackFace");
  let ClassImgFrontFace = document.getElementsByClassName("imgFrontFace");
  let element = document.getElementsByClassName("card");
  let elements = [];
  let urlList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61];
  let frontFaceOwnProperties = [];
  let cont = 0;

  inp.onclick = start_Play;
  btn.onclick = start_animation;

  function start_Play() {
    return audio.paused
      ? (audio.play(), (inp.value = "MUSIC off"))
      : (audio.pause(), (inp.value = "MUSIC on"));
  }

  function start_animation() {
    btn.setAttribute("disabled", "");
    audio.played.length === 0 ? (audio.play(), (inp.value = "MUSIC off")) : "";
        setFrontImg();

    setTimeout(() => {
      start_animation();
      console.log("restart");
    }, 50000);

    for (key in element) {
      if (element.hasOwnProperty(key)) {
        elements.push(element[key]);

        setTimeout(() => {
          elements[cont].classList.add("autoTransform");
          cont++;
        }, key * 3500);
      }
    }

    setTimeout(() => {
      interval2 = setInterval(() => {
        cont--;
        elements[cont].classList.remove("autoTransform");
        cont === 0 ? clearInterval(interval2) : "";
      }, 2500);
    }, 25000);
  }

  (function setBackImg() {
    for (key in ClassImgBackFace)
      ClassImgBackFace.hasOwnProperty(key)
        ? ClassImgBackFace[key].setAttribute("src", "./img/back_3.png")
        : "";
  })();

  function setFrontImg() {
    (function getUrlPart() {
      for (let i = 0; i <= 4; i++) {
        urlList = urlList.sort(function () {
          return Math.random() - 0.5;
        });
      }
    })();

    for (key in ClassImgFrontFace) {
      if (ClassImgFrontFace.hasOwnProperty(key)) {
        frontFaceOwnProperties.push(ClassImgFrontFace[key]);
      }
    }

    for (let i = 0; i < frontFaceOwnProperties.length; i++) {
      frontFaceOwnProperties[i].setAttribute(
        "src",
        "./img/imgJPG/" + urlList[i] + ".jpg"
      );
    }
  }
}

window.onload = play_pause;
