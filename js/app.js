var the_heading = document.getElementById('heading'),
  the_ul = document.getElementById('list'),
  the_button = document.getElementById('button'),
  the_li = document.getElementById('list').getElementsByTagName('li'),
  x = 0;


for (var i = 0; i < the_li.length; i++) {
  the_li[i].addEventListener("click", active);
}

function active() {
  the_heading.innerHTML = this.innerHTML;
  for (var i = 0; i < array.length; i++) {
    the_li[i].classList.remove("active");
  }
  this.classList.add("active");
}

the_button.addEventListener("click", add)

function add() {
  the_ul.innerHTML += "<li class='list-group-item'>new Item " + x + "</li>";
  x++;
}
