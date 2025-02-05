let categoryInformation = [
    {id: 0 , name : "Pizza"  ,image :'../../images/category-img-1.jpg', Branches : ['Qom   Arak  Karaj Bandar Abbas'] },
    {id: 1 , name : "Kebab"  ,image :'../../images/category-img-2.jpg', Branches : ['Shiraz   Lorestan  Isfahan '] },
    {id: 2 , name : "Soup"  ,image :'../../images/category-img-3.jpg', Branches : ['Tehran  Isfahan  Arak   Karaj '] },
    {id: 3 , name : "Sandwich"  ,image :'../../images/category-img-4.jpg', Branches : ['Bushehr  	Kuhsar  Bandar Abbas   Arak  Karaj Tabriz'] },
    {id: 4 , name : "PersianCosine"  ,image :'../../images/category-img-5.jpg', Branches : ['Isfahan   Kuhsar   '] },
    {id: 5 , name : "Fried"  ,image :'../../images/category-img-6.jpg', Branches : ['	Kerman  Kermanshah 	Ahvaz Sanandaj'] },
    {id: 6 , name : "Pasta"  ,image :'../../images/category-img-7.jpg', Branches : ['Tabriz Sanandaj   Kuhsar   karaj'] },
    {id: 7 , name : "Salad"  ,image :'../../images/category-img-8.jpg', Branches : ['Khorramabad  Rasht   	Azna   Babol'] },
    {id: 8 , name : "Breakfast"  ,image :'../../images/category-img-9.jpg', Branches : [' Isfahan Qom   Rasht    Tabriz Bandar Abbas'] },
    {id: 9 , name : "Steak"  ,image :'../../images/category-img-10.jpg', Branches : ['	Tabriz  Kuhsar Rasht   Babol   Nowshahr  Bojnord Qazvin Mashhad '] },

]


const categoryImage = document.querySelector('.category-image')
const statsContainer = document.querySelector('.Branches')




function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category'); 

    return category;
}

function getCategoryInfo(categoryName) {
    return categoryInformation.find(category => category.name.toLowerCase() === categoryName.toLowerCase());
}

const categoryName = getCategoryFromURL();

if (categoryName) {
    const categoryInfo = getCategoryInfo(categoryName);
    
    if (categoryInfo) {
        document.getElementById('category-title').innerText = categoryInfo.name;
        categoryImage.setAttribute('src' , categoryInfo.image)
        categoryInfo.Branches.forEach(Branch => {
            const div = document.createElement('div')
            div.innerHTML = Branch
            statsContainer.appendChild(div)
        })
    } else {
        console.log('Category not found');
    }
} else {
    console.log('Category parameter not found in URL');
}


const backBtn = document.querySelector('#back-btn')
backBtn.addEventListener('click' , () => {
    window.history.back()
})