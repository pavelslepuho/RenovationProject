const tabs = (parentSelector, tabButtonSelector, activeClass, tabsContentSelector, display = 'block', focus = 0) => {
    let tabsButtonsParentSelector = document.querySelector(parentSelector),
        tabButton = document.querySelectorAll(tabButtonSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    function showTabs(tabs, i = 0) {
        tabs.forEach(item => {
            item.style.display= 'none';
        });

        tabs[i].style.display = display;
    }

    showTabs(tabsContent);

    tabsButtonsParentSelector.addEventListener('click', (e) => {
        e.preventDefault();
        tabButton.forEach(item => {
            item.classList.remove(activeClass.replace(/\./g, ""));
            if (focus) {
                item.firstChild.classList.remove(focus);
            }
        });

        if (e.target.classList.contains(tabButtonSelector.replace(/\./g, "")) || e.target.parentElement.classList.contains(tabButtonSelector.replace(/\./g, ""))) {
            tabButton.forEach((item, i) => {
                if (e.target === item || e.target.parentElement === item) {
                    item.classList.add(activeClass.replace(/\./gi, ""));
                    if (focus) {
                        item.firstChild.classList.add(focus);
                    }
                    showTabs(tabsContent, i);
                }
            });
        }
    });


};

export default tabs;