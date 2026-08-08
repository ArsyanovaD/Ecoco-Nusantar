window.addEventListener("scroll",function(){

const nav=document.getElementById("navbar");

if(window.scrollY>50){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}

});

// ===== NEWS & ARTICLE DATA =====
const newsData = [
    {
        category: "NEWS",
        title: "Latest export shipment milestone",
        desc: "Recent achievements and shipment news — to be filled in.",
        image: "",
        link: "#"
    },
    {
        category: "KNOWLEDGE",
        title: "Why coconut shell beats hardwood for shisha",
        desc: "A deep dive into burn time, ash, and aroma.",
        image: "",
        link: "#"
    },
    {
        category: "KNOWLEDGE",
        title: "How we select mature coconut shells",
        desc: "Our criteria for raw material quality.",
        image: "",
        link: "#"
    }
];

function renderNews() {
    const grid = document.getElementById("newsGrid");
    if (!grid) return;

    grid.innerHTML = newsData.map(item => `
        <a href="${item.link}" class="news-card">
            <div class="news-thumb">
                ${
                    item.image
                    ? `<img src="${item.image}" alt="${item.title}">`
                    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                         <rect x="4" y="5" width="16" height="14" rx="1.5"/>
                         <path d="M8 13l2.5-2.5L13 13l2-2 3 3"/>
                       </svg>`
                }
            </div>
            <div class="news-info">
                <p class="news-category">${item.category}</p>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-desc">${item.desc}</p>
            </div>
        </a>
    `).join("");
}