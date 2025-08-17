function handleStickey() {
    let windowWidth = window.innerWidth;
    const fixedElements = document.querySelectorAll(".fixed");

    if (windowWidth >= 768) {
        fixedElements.forEach((el) => Stickeyfill.add(el));
    } else {
        fixedElements.forEach((el) => StickeyFill.remove(el));
    }
}

window.addEventListener('load', handleStickey);
window.addEventListener('resize', handleStickey);