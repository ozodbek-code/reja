// console.log("Jack Ma maslaxatlari");
// const list =  [
//  "Organ va qiziq", // 0-20
//  "Yaxshi talim ol", // 20-30
//  "Tajriba orttir",  // 20-30 
//  "Kuchli tomoningga etibor ber", // 30-40
//  "Bilimingni ishga sol", // 40-50
//  "Yoshlarni orgat", // 50-60
//   "Hayotdan zavqlan", // 60+ 
// ];
//  // ASYNCHRONOUS FUNCTION
// async function maslaxatBering(a) {
//     if(typeof a !== 'number') throw new ERROR("insert a number");
//     else if(a <= 20) return list [0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//         } 
//     }

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
// async function run() {
//    let javob = await maslaxatBering(20);
//    console.log(javob);
//    javob = await maslaxatBering(31);
//    console.log(javob);
//    javob = await maslaxatBering(41);
//    console.log(javob);
// }
// run();

// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter("e", "engineer")); 

// function countDigits(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= "0" && str[i] <= "9") {
//             count++;
//         }
// }

    
// return count;
// }

// console.log(countDigits("h3c98jcanajk123cajkn092ankjna114"));





// D - task

// class Shop {
//     constructor(non, manti, fanta) {
//         this.non = non;
//         this.manti = manti;
//         this.fanta = fanta;
//     }

//     timeZone() {
//         const vaqt = new Date().toLocaleTimeString("ko-KR", {
//             timeZone: "Asia/Seoul",
//             hour: "2-digit",
//             minute: "2-digit"
//         });

//         const result = `Hozir ${vaqt}da ${this.non}ta non, ${this.manti}ta manti va ${this.fanta}ta fanta mavjud!`;

//         console.log(result);
//         return result;
//     }

//     sotish(mahsulot, soni) {
//         if (this[mahsulot] >= soni) {
//             this[mahsulot] -= soni;
//         } else {
//             console.log(`${mahsulot} yetarli emas!`);
//         }

//         const vaqt = new Date().toLocaleTimeString("ko-KR", {
//             timeZone: "Asia/Seoul",
//             hour: "2-digit",
//             minute: "2-digit"
//         });

//         console.log(`Hozir ${vaqt}da ${soni}ta ${mahsulot} sotildi.`);

//         return this;
//     }

//     qabul(mahsulot, soni) {
//         this[mahsulot] += soni;

//         const vaqt = new Date().toLocaleTimeString("ko-KR", {
//             timeZone: "Asia/Seoul",
//             hour: "2-digit",
//             minute: "2-digit"
//         });

//         console.log(`Hozir ${vaqt}da ${soni}ta ${mahsulot} qabul qilindi.`);

//         return this;
//     }
// }

// const shop = new Shop(4, 5, 2);

// shop.timeZone();

// shop.sotish("non", 3);

// shop.qabul("fanta", 4);


// function findDoublers(str) {
//     const letters = new Set();
//     for(let char of str) {
//         if(letters.has(char)){
//          return true;
//         }
        
//       letters.add(char);
//     }

//     return false;
// }
// console.log(findDoublers("hello"));
// console.log(findDoublers("dost"));
// console.log(findDoublers("ozod"));
// console.log(findDoublers("trust"));
// console.log(findDoublers("Mit"));

function getReverse(str) {
    let arr1 = str.split("");
    let arr2 = [];

    for (let i = arr1.length - 1; i >= 0; i--) {
        arr2.push(arr1[i]);
    }

    return arr2.join("");
}

console.log(getReverse("ASSALOM ALEKUM"));
console.log(getReverse("Python"));
