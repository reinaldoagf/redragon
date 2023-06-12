let circle = document.getElementById("circle");
        let upControl = document.getElementById("up-control");
        let downControl = document.getElementById("down-control");
        let slideCaptions = document.getElementsByClassName("slide__caption");
  
  
        let rotateValue = circle.style.transform;
        let rotateSum;
  
        let index = 0;
  
        const getSrc = () => {
           switch (index) {
              case 1:
                 return "./img/earphones.png";
              case 2:
                 return "./img/mouse.png";
              case 3:
                 return "./img/controls.png";
              default:
                 return "./img/camera.png";
           }
        }
        upControl.onclick = function () {
           rotateSum = rotateValue + "rotate(-90deg)";
           circle.style.transform = rotateSum;
           rotateValue = rotateSum;
           index = index < 3 ? index + 1 : 0;
           document.getElementById("info-img").classList.remove("rotate-up")
           document.getElementById("info-img").classList.remove("rotate-down")
           setTimeout(() => {
                document.getElementById("info-img").src = getSrc();
               document.getElementById("info-img").classList.add("rotate-up")
           }, 100);
           for (const slideCaption of slideCaptions) {
              slideCaption.classList.remove("slide__caption--active")
           }
           let slideCaption = document.getElementById("slide__caption--" + index);
           if (slideCaption) {
              slideCaption.classList.add("slide__caption--active")
           }
        }
        downControl.onclick = function () {
           rotateSum = rotateValue + "rotate(90deg)";
           circle.style.transform = rotateSum;
           rotateValue = rotateSum;
           index = index > 0 ? index - 1 : 3;
           document.getElementById("info-img").classList.remove("rotate-up")
           document.getElementById("info-img").classList.remove("rotate-down")
           setTimeout(() => {
                document.getElementById("info-img").src = getSrc();
               document.getElementById("info-img").classList.add("rotate-down")
           }, 100);
           for (const slideCaption of slideCaptions) {
            slideCaption.classList.remove("slide__caption--active")
           }
           let slideCaption = document.getElementById("slide__caption--" + index);
           if (slideCaption) {
              slideCaption.classList.add("slide__caption--active")
           }
  
        }