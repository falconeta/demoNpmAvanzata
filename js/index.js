function caricaData() {
    setTimeout(function () { 
        moment.locale('it');
        var sunrise=1485762037;
        var oggi=moment();
        console.log(oggi);
        var dataScadenza= oggi.add(30, 'days');
        var date= moment.unix(sunrise);
        var dataEstesa= date.format('LLLL');
        var scadenzaS=dataScadenza.format('LLLL')
        var id=document.getElementById('sezione');
        var p=document.createElement('p');
        var p1=document.createElement('p1');
        p.innerText=dataEstesa;
        p1.innerText=scadenzaS;
        id.append(p);
        id.append(p1);
    }, 1000);
}