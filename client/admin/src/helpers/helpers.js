import Vue from "vue";

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export  function toast(message, type='default') {
    Vue.$toast.open({ message, type})
}
export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
export function toTitleCase(str) {
    if (!str) {
        return '';
    }
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
export function isEmpty(objectOrArray) {
    if (Array.isArray(objectOrArray)) {
        for (let i = 0; i < objectOrArray.length; i++) {
            if (![objectOrArray[i]] && objectOrArray[i] !== 0) {
                console.log(i)
                return true;
            }
        }
        return false;
    }
    let keys = Object.keys(objectOrArray);
    for (let i = 0; i < keys.length; i++) {
        if (!objectOrArray[keys[i]] && objectOrArray[keys[i]] !== 0) {
            console.log(keys[i])
            return true;
        }
    }

}

export function getMonth(int) {
    let months = [
        '',
        'Jan',
        'Fev',
        'Mars',
        'Avr',
        'Mai',
        'Juin',
        'Jul',
        'Aout',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return months[parseInt(int)]
}

export function truncate(str, n) {
    if (!str) {
        return "";
    }
    return (str.length > n) ? str.substr(0, n - 1) + ' ...' : str;
}
