//1.
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(
  () => {
    user.loginOk();
  },
  () => {
    user.loginFail();
  }
);
askPassword(
  () => {
    user.loginOk.call(user);
  },
  () => {
    user.loginFail.call(user);
  }
);
askPassword(
  () => {
    user.loginOk.apply(user);
  },
  () => {
    user.loginFail.apply(user);
  }
);

//2.
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk(result) {
    alert(this.name + " " + (result ? "logged in" : "failed to log in"));
  },
};

askPassword(
  () => user.loginOk(true),
  () => user.loginOk(false)
);
askPassword(user.loginOk.bind(user), user.loginOk.bind(user));
askPassword(
  () => user.loginOk.call(user),
  () => user.loginOk.call(user)
);
askPassword(
  () => user.loginOk.apply(user),
  () => user.loginOk.apply(user)
);

//3.
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group.showList();
