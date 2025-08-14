let imgItems = [...document.querySelectorAll(".wrapper")];
// console.log(imgItems);

let sectionTitles = [...document.querySelectorAll("section h2")];
// console.log(sectionTitles);

let title = document.querySelector(".title");

//監視対象になった瞬間、.active を付与する関数
let setItemActive = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.5,
};

//どこにいるのか監視し、特定の位置に来たら関数を呼び出す。
let observer = new IntersectionObserver(setItemActive, options);
observer.observe(title);

//.wrapperは偶数と奇数とで出現する場所が異なる
imgItems.map((item , index ) => {
    item.children[0].style.backgroundImage=`url(//picsum.photos/1200/1200/?random=${index + 1})`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

sectionTitles.map((title, index) => {
    index % 2 == 0 ? title.style.left = " 45%" : title.style.left = "35%";
    observer.observe(title);
})

