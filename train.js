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

async function maslaxatBering(a) {
    if(typeof a !== 'number') throw new ERROR("insert a number");
    else if(a <= 20) return list [0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            }, 5000);
        });
        } 
    }

// then/ catch
//console.log("passed here o");
//maslaxatBering(20)
//.then((data) => {
 //console.log('javob:', data);
//});
//.catch((err) => {
  //console.log("ERROR:", err);
//});
//console.log("passed here 1");

// async/await
async function run() {
   let javob = await maslaxatBering(20);
   console.log(javob);
   javob = await maslaxatBering(31);
   console.log(javob);
   javob = await maslaxatBering(41);
   console.log(javob);
}
run();