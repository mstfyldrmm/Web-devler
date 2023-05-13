"use";

let _buttons = document.getElementsByTagName("button");

let _uzunluk = _buttons.length;
let i = 0;
_sonuc = document.getElementById("sonuc");

for(i = 0; i < _uzunluk; i++) {
    _buttons[i].onclick = hesapla;
}

function hesapla() {
    let _deger = this.innerHTML;

    if(_deger == "=") {
        try {
            _sonuc.value = eval(_sonuc.value);
        } catch (error) {
            _sonuc.value = "0";
        }
        return;
    }
    _sonuc.value += _deger;

    //degeri sıfırlamak icin clear tusu icin gerekli kodlar
    if(_deger == "C") {
        _sonuc.value = "";
    }
}
