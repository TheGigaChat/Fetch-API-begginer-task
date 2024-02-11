// class
//const userComments = [];
const section = document.querySelector(".section__comments");

export default class User {
  constructor(name, comment, exportTime) {
    this.name = name;
    this.comment = comment;
    this.exTime = exportTime;
  }
  post() {
    setTimeout(() => {
      //console.log(section);
      section.innerHTML = `<div>
        <p>"${this.comment}"
          <span class="fontName">"${this.name}"</span>
        </p>
      </div>`;
      //console.log(newHTML);
    }, this.exTime);
  }
}

// create a new User
/* userComments.push(new User("Abuser", "NOT a good luck", 1500));
userComments[0].post(); */
