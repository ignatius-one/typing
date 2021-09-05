const Type_Span = document.querySelector('.type-dinamic');
const array_text = [
    'hard',
    'fun',
    'Awsome'
]

const Type_delay = 200;
const Delate_delay = 100;
const NextText_delay = 2000;

let Text_Index = 0;
let Caracter_Index = 0;

function type() {
    if (Caracter_Index < array_text[Text_Index].length) {
        Type_Span.textContent += array_text[Text_Index].charAt(Caracter_Index);
        Caracter_Index++;
        setTimeout(type, Type_delay);
    } else {
        setTimeout(deleate_text, Type_delay);
    }
}
function deleate_text() {
    if (Caracter_Index > 0) {
        Type_Span.textContent = array_text[Text_Index].substring(0,Caracter_Index-1);
        Caracter_Index--;
        setTimeout(deleate_text, Delate_delay);
    } else {
        Text_Index++;
        if (Text_Index >= array_text.length) Text_Index = 0;
        setTimeout(type,Type_delay + 1100);
    }
}
type()

document.addEventListener('DOMcontentLoaded', function () {
    setTimeout(type, NextText_delay + 250 );
})

