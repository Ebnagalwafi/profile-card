
function sendSMS(){
    let number = "+2180944012418";
    let message = " السلام عليكم اخي عبدالقادر اود التواصل مع بشأن بعض الامور ارجو الرد في اقرب فرصة ";

    var url = "https://wa.me/" + number + "?text="  + message + "%0a" + "%0a" + "مرسلة من نموذج المراسلة " + "%0a";

    window.open(url, '_blank').focus();
}