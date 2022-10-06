class Element1 {
  constructor(selector) {
    this.elem = document.getElementById(selector);
  }

  html(text) {
    this.elem.innerHTML += text;
    return this;
  }

  attr(name, value) {
    this.elem.setAttribute(name, value);
    return this;
  }

  append1(text) {
    this.elem.append(text);
    return this;
  }

  prepend1(text) {
    this.elem.prepend(text);
    return this;
  }
}

const element = new Element1("selector");

// element.html("!"); //запишет в текст элемента '!'
// element.append1("!"); //запишет в начало элемента '!'
// element.prepend1("!"); //запишет в конец элемента '!'
// element.attr("class", "www"); //запишет в атрибут class значение www

//Должны работать цепочки методов:
element.html("hello").append1("!").prepend1("!");
element.attr("class", "www").attr("title", "hello");
