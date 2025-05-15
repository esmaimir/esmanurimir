 const cat = document.getElementById("cat");
    const obstacle = document.getElementById("obstacle");

    function jump() {
      if (!cat.classList.contains("jump")) {
        cat.classList.add("jump");
        setTimeout(() => {
          cat.classList.remove("jump");
        }, 500);
      }
    }

    document.addEventListener("keydown", function (e) {
      if (e.code === "Space" || e.code === "ArrowUp") {
        jump();
      }
    });

    let check = setInterval(() => {
      const catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("bottom"));
      const obsLeft = obstacle.getBoundingClientRect().left;
      const catLeft = cat.getBoundingClientRect().left;

      if (obsLeft < catLeft + 30 && obsLeft > catLeft && catTop < 30) {
        alert("Game Over! 😿");
        location.reload();
      }
    }, 10);