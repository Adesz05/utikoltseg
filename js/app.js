let valaszto=document.querySelector('#avgfuel')
let uzemanyagtipus=document.querySelector('#fueltype')
let ellenorzesgomb=document.querySelector('#check')

ellenorzesgomb.addEventListener('click',()=>{
    let nev=document.querySelector('#name').value
    let cim=document.querySelector('#adress').value
    let szuldatum=document.querySelector('#birthdate').value
    let kocsitipus=document.querySelector('#cartype').value
    let utazasdatum=document.querySelector('#dateofjourney').value
    let uzemanyagar=document.querySelector('#costoffuel').value
    let kiindulasihely=document.querySelector('#starterpos').value
    let uticel=document.querySelector('#destination').value
    let tovabbiuticel=document.querySelector('#otherdestination').value
    let megtettkilometer=document.querySelector('#numberofkilometers').value
    let utikoltseg=document.querySelector('#priceofjourney')
    let amortizacio=document.querySelector('#amortization')
    let osszeskoltseg=document.querySelector('#sum')

    let atlagfogyasztas=valaszto.value
    console.log(atlagfogyasztas)
    if(nev=="" || cim=="" || szuldatum=="" || kocsitipus=="" || utazasdatum=="" || uzemanyagar=="" || kiindulasihely=="" || uticel=="" || tovabbiuticel=="" || megtettkilometer=="" ){
        alert("Nem töltött ki minden adatot")
    }
    else{
        //megtettkilometer=Number(megtettkilometer)
        //atlagfogyasztas=Number(atlagfogyasztas)
        //uzemanyagar=Number(uzemanyagar)
        utikoltseg.innerHTML=(Number(megtettkilometer)/100)*Number(atlagfogyasztas)*Number(uzemanyagar)
        console.log((megtettkilometer/100)*atlagfogyasztas*uzemanyagar)
        console.log(megtettkilometer)
        console.log(atlagfogyasztas)
        console.log(uzemanyagar)
    }
})


UzemAnyagTipusVizsgalat();
uzemanyagtipus.addEventListener('change',()=>{
    UzemAnyagTipusVizsgalat()
})










function UzemAnyagTipusVizsgalat(){
    if(uzemanyagtipus.value=="benzin"){
        valaszto.innerHTML=
    `<option value="7,6">1000 cm3-ig 7,6 l/100km</option>
    <option value="8,6">1001-1500 cm3 között 8,6 l/100km</option>
    <option value="9,5">1501-2000 cm3 között 9,5 l/100km</option>
    <option value="11,4">2001-3000 cm3 között 11,4 l/100km</option>
    <option value="13,3">3001 cm3 fölött 13,3 l/100km</option>`
    }
    if(uzemanyagtipus.value=="gazolaj"){
        valaszto.innerHTML=
    `<option value="5,7">1500 cm3-ig 5,7 l/100km</option>
    <option value="6,7">1501-2000 cm3 között 6,7 l/100km</option>
    <option value="7,6">2001-3000 cm3 között 7,6 l/100km</option>
    <option value="9,5">3001 cm3 fölött 9,5 l/100km</option>`
    }
}
