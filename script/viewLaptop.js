function ViewLaptop() {}

ViewLaptop.prototype.addLaptop = function (obj) {
  var block = document.querySelector("#list");
  var ulList = document.createElement("ul");

  ulList.innerHTML =
    "<li>" +
    obj.title +
    "</li>" +
    "<li>" +
    obj.cpu +
    "</li>" +
    "<li>" +
    obj.ram +
    "</li>" +
    "<li>" +
    obj.cores +
    "</li>" +
    '<li class="delete"><button>Удалить</button></li>' +
    '<li class="info"><button>Общая информация</button></li>';

  block.appendChild(ulList);
};

ViewLaptop.prototype.deleteLaptop = function () {
  var del = document.getElementsByClassName("delete");
  for (let d of del) {
    d.addEventListener("click", function () {
      d.parentElement.remove();
      event.preventDefault();
    });
  }
};

ViewLaptop.prototype.info = function (obj) {
  var modal = document.querySelector("#myModal");
  var btnInfo = document.getElementsByClassName("info");
  var span = document.getElementsByClassName("close")[0];
  var modalContent = document.querySelector(".modal_content");
  var divInfo = document.createElement("div");

  for (let info of btnInfo) {
    info.addEventListener("click", function () {
      modal.style.display = "block";

      divInfo.innerHTML =
        "<p>Год выпуска: " +
        obj.year +
        "</p>" +
        "\n" +
        "<p>Вес ноутбука: " +
        obj.weight +
        " г." +
        "</p>" +
        "\n" +
        "<p>Материал корпуса: " +
        obj.caseMaterial +
        "</p>" +
        "\n";

      modalContent.appendChild(divInfo);
    });

    span.addEventListener("click", function () {
      modal.style.display = "none";
      divInfo.remove();
    });
  }
};

ViewLaptop.prototype.getMessage = function (message, nameCl) {
  var wrap = document.querySelector(".wrapper");
  var form = document.querySelector(".forms");

  var infoBlok = document.createElement("div");
  infoBlok.className = nameCl;
  infoBlok.innerText = message;

  wrap.insertBefore(infoBlok, form);
};

ViewLaptop.prototype.clearInput = function () {
  document.querySelector("#title_l").value = "";
  document.querySelector("#year_l").value = "";
  document.querySelector("#cpu_l").value = "";
  document.querySelector("#ram_l").value = "";
  document.querySelector("#core_l").value = "";
  document.querySelector("#caseMaterial_l").value = "";
  document.querySelector("#weight_l").value = "";
};
