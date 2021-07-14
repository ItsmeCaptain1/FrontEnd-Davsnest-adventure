function getData() {
  var platform = document.getElementById("platform").value;
  var inp = document.getElementById("name").value;
  var res1 = document.getElementById("res1");
  var res2 = document.getElementById("res2");
  var temp =
    "https://competitive-coding-api.herokuapp.com/api/" + platform + "/" + inp;
  //   console.log(typeof platform);

  fetch(temp)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status == "Failed") {
        res1.textContent = "Invalid Data";
        res2.textContent = "";
      } else {
        // console.log(data);
        if (platform.toLowerCase() === "codeforces") {
          res1.textContent = "Highest Rank" + " = " + data["max rank"];
          res2.textContent = "Highest Rating" + " = " + data["max rating"];
        }
        if (platform.toLowerCase() === "codechef") {
          res1.textContent = "Star" + " = " + data["stars"];
          res2.textContent = "Highest Rating" + " = " + data["highest_rating"];
        }
      }
    });
}
