document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".main-navigation-li");
  
    links.forEach(link => {
      link.addEventListener("click", function () {
        // Odstráni aktívnu triedu zo všetkých odkazov
        links.forEach(l => l.classList.remove("main-navigation-li.active"));
        // Pridá triedu active na kliknutý odkaz
       // this.class="main-navigation-li.active";
        this.classlist.add("main-navigation-li.active");
      });
    });
  });