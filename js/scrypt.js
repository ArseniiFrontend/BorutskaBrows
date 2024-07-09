const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);

const allLang = ['ru', 'pl', 'ua'];
function changeURLLanguage () {
    let lang = select.value;
    location.href = window.location.pathname + '#'+ lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1)
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru'
        location.reload()
    }

    select.value = hash;
    // document.querySelector('.lng-abt').innerHTML = langArr['abt'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if(elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();

