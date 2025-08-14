const menus = []
for (let i = 1; i <= 4; i++) {
  let menu = document.getElementById(`menu${i}`);
  menus.push(menu);
}

document.addEventListener("click", (e) => {
  console.log(e.target.id);
  menus.map()
});