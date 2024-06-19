fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((photos) => {
        const itemDivs = document.querySelectorAll('.item');

        itemDivs.forEach((item, index) => {
            const img = item.querySelector('img');
            if (photos[index]) {
                img.src = photos[index].url;
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.borderRadius = '50%';
                img.onclick = () => {
                    openModal(photos[index]);
                };
            }
        });

        const mainImageImg = document.querySelector('.main_img img');
        if (photos[0]) {
            mainImageImg.src = photos[0].url;
            mainImageImg.alt = photos[0].title;
            mainImageImg.onclick = () => {
                openModal(photos[0]);
            };
        }
    });

function openModal(photo) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = photo.url;
    modalImg.alt = photo.title;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => {
            const modalRight = document.querySelector('.modal-right .glav');
            modalRight.innerHTML = ''; 

            users.forEach(user => {
                const infoDiv = document.createElement('div');
                infoDiv.classList.add('info');

                const nameSpan = document.createElement('span');
                nameSpan.textContent = user.name;

                const nav = document.createElement('nav');
                nav.textContent = user.company.bs;

                infoDiv.append(nameSpan);
                infoDiv.append(nav);
                modalRight.append(infoDiv);
            });
        });

    modal.style.display = 'flex'; 
}

function openMessageModal() {
    const modal = document.getElementById('modal'); 
    modal.style.display = 'flex'; 

    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '';

   
}


const closeModalBtn = document.querySelector('.close');
closeModalBtn.onclick = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}



const header = document.createElement('header');
const logoImg = document.createElement('img');
logoImg.src = './imgORicons/Logo.png';
logoImg.alt = '';
logoImg.classList.add('logo');
header.append(logoImg);

const form = document.createElement('form');
form.classList.add('formInp');

const inputContainerDiv = document.createElement('div');
inputContainerDiv.classList.add('inputContainer');

const input = document.createElement('input');
input.type = 'text';
input.name = 'search';
input.placeholder = 'Search';
input.classList.add('inpSearch');
inputContainerDiv.append(input);

const searchIconImg = document.createElement('img');
searchIconImg.src = './imgORicons/Search.png';
searchIconImg.alt = 'search-icon';
searchIconImg.classList.add('searchIcon');
inputContainerDiv.append(searchIconImg);

form.append(inputContainerDiv);
header.append(form);

const iconsDiv = document.createElement('div');
iconsDiv.classList.add('icons');

const homeIconImg = document.createElement('img');
homeIconImg.id = 'home';
homeIconImg.src = './imgORicons/home.png';
homeIconImg.alt = '';
iconsDiv.append(homeIconImg);

const iconNames = ['massege', 'interesting', 'like', 'Avatar'];
iconNames.forEach(iconName => {
    const iconImg = document.createElement('img');
    iconImg.src = `./imgORicons/${iconName}.png`;
    iconImg.alt = '';
    iconsDiv.append(iconImg);
});

header.append(iconsDiv);
document.body.append(header);

const section = document.createElement('section');
section.classList.add('sect');

const checkDiv = document.createElement('div');
checkDiv.classList.add('check');

const mainBoxDiv = document.createElement('div');
mainBoxDiv.classList.add('main_Box');

const itemNames = [
    "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir",
    "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir",
    "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir",
    "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir",
    "pishak", "induk", "mr.bean", "mr.crazy", "bugatti", "mercedes", "bmw", "camry", "toyota", "lexus",
    "chevrolet", "porsche", "RONALDO", "messi", "matiz", "cobbalt", "nexia", "malibu", "jentra", "TAHOE",
    "lacetti", "monza", "onix", "russkiy", "uzbekskiy", "tojiki", "angliyskiy", "raptor", "ferrari", "cherry",
    "li", "jetour", "byd", "matiz", "jiguli", "banan", "m5f90", "mishka", "klava", "dipfeyker", "fake",
    "bagatata", "lujpik", "balasteyshn", "katiye", "rolex", "gucci", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir",
    "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir", "al.safir",
    "al.safir", "al.safir", "al.safir"
];

itemNames.forEach(itemName => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const img = document.createElement('img');
    img.src = './imgORicons/storisAvatar.png';
    img.alt = '';
    img.classList.add('itemImg');

    const textNode = document.createTextNode(itemName);
    itemDiv.append(img);
    itemDiv.append(textNode);

    mainBoxDiv.append(itemDiv);
});

const button = document.createElement('button');
button.classList.add('tuda_suda');
button.textContent = '>';

mainBoxDiv.append(button);

checkDiv.append(mainBoxDiv);
section.append(checkDiv);
document.body.append(section);

const main = document.createElement('main');
const headerMainDiv = document.createElement('div');
headerMainDiv.classList.add('header_main');

const glavDiv = document.createElement('div');
glavDiv.classList.add('glav');

const leftDiv = document.createElement('div');
leftDiv.classList.add('left');

const avatarImg = document.createElement('img');
avatarImg.src = './imgORicons/Avatar.png';
avatarImg.alt = '';

leftDiv.append(avatarImg);

const vozleDiv = document.createElement('div');
vozleDiv.classList.add('vozle');

const nicknameH5 = document.createElement('h5');
nicknameH5.textContent = 'nickname';

const cityCountryH4 = document.createElement('h4');
cityCountryH4.textContent = 'City, Country';

vozleDiv.append(nicknameH5);
vozleDiv.append(cityCountryH4);

const rightDiv = document.createElement('div');
rightDiv.classList.add('right');

const moreOptionsB = document.createElement('b');
moreOptionsB.textContent = '···';

rightDiv.append(moreOptionsB);
glavDiv.append(leftDiv);
glavDiv.append(vozleDiv);
glavDiv.append(rightDiv);

const mainImgDiv = document.createElement('div');
mainImgDiv.classList.add('main_img');

const mainImageImg = document.createElement('img');
mainImageImg.src = './imgORicons/me.jpg';
mainImageImg.alt = '';

mainImageImg.ondblclick = () => {
    likeImg.src = "./imgORicons/icons8-сердце-50 (1).png"
    likeCountSpan.innerHTML = '7,777'
}

mainImgDiv.append(mainImageImg);

const otherDiv = document.createElement('div');
otherDiv.classList.add('other');

const leftImgDiv = document.createElement('div');
leftImgDiv.classList.add('left_img');

const likeImg = document.createElement('img');
likeImg.id = 'like';
likeImg.src = './imgORicons/icons8-сердце-50.png';
likeImg.alt = '';

const soobsheniyeImg = document.createElement('img');
soobsheniyeImg.src = './imgORicons/soobsheniye.png';
soobsheniyeImg.alt = '';

const mesageImg = document.createElement('img');
mesageImg.src = './imgORicons/mesage.png';
mesageImg.alt = '';





leftImgDiv.append(likeImg);
leftImgDiv.append(soobsheniyeImg);
leftImgDiv.append(mesageImg);

const rightImgDiv = document.createElement('div');
rightImgDiv.classList.add('right_img');

const izbrannoeImg = document.createElement('img');
izbrannoeImg.src = './imgORicons/izbrannoe.png';
izbrannoeImg.alt = '';

rightImgDiv.append(izbrannoeImg);
otherDiv.append(leftImgDiv);
otherDiv.append(rightImgDiv);

const countLikesDiv = document.createElement('div');
countLikesDiv.classList.add('count_likes');

const likeCountSpan = document.createElement('span');
likeCountSpan.textContent = '7,776';

countLikesDiv.append(likeCountSpan);

const commentDiv1 = document.createElement('div');
const commentSpan1 = document.createElement('span');
const commentText1 = document.createElement('b');
commentDiv1.append(commentSpan1);
commentDiv1.append(commentText1);

const grayDiv1 = document.createElement('div');
grayDiv1.classList.add('gray');
grayDiv1.textContent = 'View all 33 comments';

const commentDiv2 = document.createElement('div');
const commentSpan2 = document.createElement('span');
const commentText2 = document.createElement('b');
commentDiv2.append(commentSpan2);
commentDiv2.append(commentText2);

const grayDiv2 = document.createElement('div');
grayDiv2.classList.add('gray');
grayDiv2.textContent = '1 HOUR AGO';

const linyaDiv = document.createElement('div');
linyaDiv.classList.add('linya');



const footerDiv = document.createElement('div');
footerDiv.classList.add('footer');

const leftFooterDiv = document.createElement('div');
leftFooterDiv.classList.add('left_footer');

const emojiImg = document.createElement('img');
emojiImg.src = './imgORicons/emoji.png';
emojiImg.alt = '';

leftFooterDiv.append(emojiImg);

const addDiv = document.createElement('div');
addDiv.classList.add('add');

const addInput = document.createElement('input');
addInput.classList.add('input_');
addInput.type = 'text';
addInput.placeholder = 'Add a comment...';
addDiv.append(addInput);

const rightFooterDiv = document.createElement('div');
rightFooterDiv.classList.add('right_footer');

const postButton = document.createElement('button');
postButton.classList.add('post');
postButton.textContent = 'Post';

rightFooterDiv.append(postButton);
footerDiv.append(leftFooterDiv);
footerDiv.append(addDiv);
footerDiv.append(rightFooterDiv);

headerMainDiv.append(glavDiv);
headerMainDiv.append(mainImgDiv);
headerMainDiv.append(otherDiv);
headerMainDiv.append(countLikesDiv);
headerMainDiv.append(commentDiv1);
headerMainDiv.append(grayDiv1);
headerMainDiv.append(commentDiv2);
headerMainDiv.append(grayDiv2);
headerMainDiv.append(linyaDiv);
headerMainDiv.append(footerDiv);

main.append(headerMainDiv);

const mainSpravaDiv = document.createElement('div');
mainSpravaDiv.classList.add('main_sprava');

const meDiv = document.createElement('div');
meDiv.classList.add('me');

const leftMeDiv = document.createElement('div');
leftMeDiv.classList.add('left_me');

const avatarMeImg = document.createElement('img');
avatarMeImg.src = './imgORicons/Avatar.png';
avatarMeImg.alt = '';

leftMeDiv.append(avatarMeImg);

const nickMeDiv = document.createElement('div');
nickMeDiv.classList.add('nick_me');

const nickMeH4 = document.createElement('h4');
nickMeH4.textContent = '_al.safir_';

const nameMeH5 = document.createElement('h5');
nameMeH5.textContent = 'Al Safir Bozorov';

nickMeDiv.append(nickMeH4);
nickMeDiv.append(nameMeH5);

const rightMeDiv = document.createElement('div');
rightMeDiv.classList.add('right_me');

const switchButton = document.createElement('button');
switchButton.textContent = 'Switch';

rightMeDiv.append(switchButton);

meDiv.append(leftMeDiv);
meDiv.append(nickMeDiv);
meDiv.append(rightMeDiv);

const sugestionsDiv = document.createElement('div');
sugestionsDiv.classList.add('sugestions');

const leftSugestionsDiv = document.createElement('div');
leftSugestionsDiv.classList.add('left_sugestions');
leftSugestionsDiv.textContent = 'Suggestions for you';

const seeAllDiv = document.createElement('div');
seeAllDiv.classList.add('see_all');
seeAllDiv.innerHTML = '<b>See All</b>';

sugestionsDiv.append(leftSugestionsDiv);
sugestionsDiv.append(seeAllDiv);

const itemBrbrDiv = document.createElement('div');
itemBrbrDiv.classList.add('item_brbr');




for (let i = 0; i < 5; i++) {

    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(photos => {
            const photo = photos[i];
            const itemNickDiv = document.createElement('div');
            itemNickDiv.classList.add('item_nick');

            const itemImgDiv = document.createElement('div');
            itemImgDiv.classList.add('item_img');

            const avatarItemImg = document.createElement('img');
            avatarItemImg.src = photo.url;
            avatarItemImg.style.borderRadius = "50%"

            itemImgDiv.append(avatarItemImg);



            const nicknameItemDiv = document.createElement('div');
            nicknameItemDiv.classList.add('nickname_item');

            const nickH4 = document.createElement('h4');
            nickH4.textContent = 'nickname';

            const suggestionH5 = document.createElement('h5');
            suggestionH5.textContent = 'Suggestions for you';

            nicknameItemDiv.append(nickH4);
            nicknameItemDiv.append(suggestionH5);

            const itemBtnDiv = document.createElement('div');
            itemBtnDiv.classList.add('item_btn');

            const followButton = document.createElement('button');
            followButton.textContent = 'Follow';

            followButton.onclick = () => {
                followButton.textContent = "Followed";
                followButton.style.color = 'green';
                suggestionH5.textContent = "You are Suggestion"
                suggestionH5.style.color = 'green'
            }

            followButton.ondblclick = () => {
                followButton.textContent = "Follow";
                followButton.style.color = 'blue';
                suggestionH5.textContent = "Suggestions for you"
                suggestionH5.style.color = 'gray'
            }

            itemBtnDiv.append(followButton);

            itemNickDiv.append(itemImgDiv);
            itemNickDiv.append(nicknameItemDiv);
            itemNickDiv.append(itemBtnDiv);

            itemBrbrDiv.append(itemNickDiv);
        }
        )
}

mainSpravaDiv.append(meDiv);
mainSpravaDiv.append(sugestionsDiv);
mainSpravaDiv.append(itemBrbrDiv);

main.append(mainSpravaDiv);



document.body.append(main);


let tudaSudaButton = document.querySelector('.tuda_suda');



function removeItems() {

    let itemsToRemove = document.querySelectorAll('.item');
    let item_count = 8
    for (let i = 0; i < item_count; i++) {
        if (itemsToRemove.length > 0) {
            itemsToRemove[i].remove()
        } else {
            break;
        }
    }


}

tudaSudaButton.onclick = () => {
    removeItems()
}

like.ondblclick = () => {
    like.src = "./imgORicons/icons8-сердце-50 (1).png"
    likeCountSpan.innerHTML = '7,777'
}
like.onclick = () => {
    like.src = "./imgORicons/icons8-сердце-50.png"
    likeCountSpan.innerHTML = '7,776'

}


izbrannoeImg.ondblclick = () => {
    izbrannoeImg.src = "./imgORicons/yel.png"
}
izbrannoeImg.onclick = () => {
    izbrannoeImg.src = "./imgORicons/izbrannoe.png"
}
const buttons = document.querySelectorAll('button');

homeIconImg.ondblclick = () => {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo');
    const homeIconImg = document.getElementById('home');
    const peredelanit_iconNames = ['whitemes', 'kompas', 'whiteserdse'];

    header.style.backgroundColor = "black";
    logoImg.src = "./imgORicons/logo_white.png";
    homeIconImg.src = './imgORicons/whitehom.png';
    document.body.style.color = "white";
    document.body.style.backgroundColor = " rgb(19, 19, 19)"
    button.style.backgroundColor = "rgb(19, 19, 19)"
    peredelanit_iconNames.forEach(peredelka => {
        const peredelka_icon = document.createElement('img');
        peredelka_icon.src = `./imgORicons/${peredelka}.png`;
        button.style.background = "none"
        checkDiv.style.backgroundColor = "rgb(19, 19, 19)"

        buttons.forEach(button => {
            button.style.backgroundColor = 'rgb(19, 19, 19)';
        });
    });
};


homeIconImg.onclick = () => {
    homeIconImg.src = "./imgORicons/home.png"
    header.style.backgroundColor = "white"
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white"
    buttons.forEach(button => {
        button.style.backgroundColor = 'white';
    });
    button.style.background = "none"
    checkDiv.style.backgroundColor = "rgb(241, 241, 241)"


}



