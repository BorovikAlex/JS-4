document.querySelector("#laptop").addEventListener("submit", function (event) {
  var title = document.querySelector("#title_l").value;
  var year = document.querySelector("#year_l").value;
  var cpu = document.querySelector("#cpu_l").value;
  var ram = document.querySelector("#ram_l").value;
  var core = document.querySelector("#core_l").value;
  var caseMaterial = document.querySelector("#caseMaterial_l").value;
  var weight = document.querySelector("#weight_l").value;

  var laptop = new Laptop(title, year, cpu, ram, core, caseMaterial, weight);
  var viewLaptop = new ViewLaptop();

  if (
    title === "" ||
    year === "" ||
    cpu === "" ||
    ram === "" ||
    core === "" ||
    caseMaterial === "" ||
    weight === ""
  ) {
    viewLaptop.getMessage("Ошибка! Заполните все поля!", "warning");
    setTimeout(() => document.querySelector(".warning").remove(), 2000);
  } else {
    if (weight > 3) {
      viewLaptop.getMessage("Вес ноутбука не должен превышать 3 кг", "warning");
      setTimeout(() => document.querySelector(".warning").remove(), 5000);
    } else {
      if (year > 2020 || year < 1982) {
        viewLaptop.getMessage("Укажите верный год производства", "warning");
        setTimeout(() => document.querySelector(".warning").remove(), 5000);
      } else {
        if (ram < 1) {
          viewLaptop.getMessage("Укажите верные данные", "warning");
          setTimeout(() => document.querySelector(".warning").remove(), 5000);
        } else {
          if (core < 1) {
            viewLaptop.getMessage("Укажите верные данные", "warning");
            setTimeout(() => document.querySelector(".warning").remove(), 5000);
          } else {
            viewLaptop.addLaptop(laptop);
            viewLaptop.getMessage("Ноутбук добавлен успешно!", "success");
            setTimeout(() => document.querySelector(".success").remove(), 2000);
            viewLaptop.clearInput();
            viewLaptop.info(laptop);
          }
        }
      }
    }
  }

  viewLaptop.deleteLaptop();
  event.preventDefault();
});

document
  .querySelector("#ultrabook")
  .addEventListener("submit", function (event) {
    var title = document.querySelector("#title_u").value;
    var year = document.querySelector("#year_u").value;
    var cpu = document.querySelector("#cpu_u").value;
    var ram = document.querySelector("#ram_u").value;
    var core = document.querySelector("#core_u").value;
    var bodyColor = document.querySelector("#bodyColor_u").value;
    var weight = document.querySelector("#weight_u").value;

    var ultrabook = new Ultrabook(
      title,
      year,
      cpu,
      ram,
      core,
      bodyColor,
      weight
    );
    var viewUltrabook = new ViewUltrabook();

    if (
      title === "" ||
      year === "" ||
      cpu === "" ||
      ram === "" ||
      core === "" ||
      bodyColor === "" ||
      weight === ""
    ) {
      viewUltrabook.getMessage("Ошибка! Заполните все поля!", "warning");
      setTimeout(() => document.querySelector(".warning").remove(), 2000);
    } else {
      if (weight > 1.5) {
        viewUltrabook.getMessage(
          "Вес ультрабука не должен превышать 1,5 кг",
          "warning"
        );
        setTimeout(() => document.querySelector(".warning").remove(), 5000);
      } else {
        if (year > 2020 || year < 1982) {
          viewUltrabook.getMessage(
            "Укажите верный год производства",
            "warning"
          );
          setTimeout(() => document.querySelector(".warning").remove(), 5000);
        } else {
          if (ram < 1) {
            viewUltrabook.getMessage("Укажите верные данные", "warning");
            setTimeout(() => document.querySelector(".warning").remove(), 5000);
          } else {
            if (core < 1) {
              viewUltrabook.getMessage("Укажите верные данные", "warning");
              setTimeout(
                () => document.querySelector(".warning").remove(),
                5000
              );
            } else {
              viewUltrabook.addUltrabook(ultrabook);
              viewUltrabook.getMessage(
                "Ультрабук добавлен успешно!",
                "success"
              );
              setTimeout(
                () => document.querySelector(".success").remove(),
                2000
              );
              viewUltrabook.clearInput();
              viewUltrabook.info(ultrabook);
            }
          }
        }
      }
    }
    viewUltrabook.deleteUltrabook();
    event.preventDefault();
  });
