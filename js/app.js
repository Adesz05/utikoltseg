let valaszto=document.querySelector('#avgfuel')
let uzemanyagtipus=document.querySelector('#fueltype')
UzemAnyagTipusVizsgalat();
uzemanyagtipus.addEventListener('change',UzemAnyagTipusVizsgalat)










function UzemAnyagTipusVizsgalat(){
    if(uzemanyagtipus.value=="benzin"){
        valaszto.innerHTML=
    `<option value="1">1000 cm3-ig 7,6 l/100km</option>
    <option value="2">1001-1500 cm3 között 8,6 l/100km</option>
    <option value="3">1501-2000 cm3 között 9,5 l/100km</option>
    <option value="4">2001-3000 cm3 között 11,4 l/100km</option>
    <option value="5">3001 cm3 fölött 13,3 l/100km</option>`
    }
    if(uzemanyagtipus.value=="gazolaj"){
        valaszto.innerHTML=
    `<option value="1">1500 cm3-ig 5,7 l/100km</option>
    <option value="2">1501-2000 cm3 között 6,7 l/100km</option>
    <option value="3">2001-3000 cm3 között 7,6 l/100km</option>
    <option value="4">3001 cm3 fölött 9,5 l/100km</option>`
    }
}