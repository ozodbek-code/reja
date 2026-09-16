console.log("Jack Ma maslaxatlari");
const list =  [
 "Organ va qiziq", // 0-20
 "Yaxshi talim ol", // 20-30
 "Tajriba orttir",  // 20-30 
 "Kuchli tomoningga etibor ber", // 30-40
 "Bilimingni ishga sol", // 40-50
 "Yoshlarni orgat", // 50-60
  "Hayotdan zavqlan", // 60+ 
];

function maslaxatBering(a, callback) {
    if(typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function() {
         callback(null, list[5]);   
        }, 5000);
    } 
}
console.log("passed here o");
maslaxatBering(10, (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
    console.log("javob:", data);
    }
});
console.log("passed here 1"); 