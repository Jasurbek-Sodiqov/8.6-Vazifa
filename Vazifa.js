// 1-Masala
// function findFirstRepeated(gifts) {
//   const map = new Map();

//    for (let i = 0; i < gifts.length; i++) {
//        const gift = gifts[i];

//        if (map.has(gift)) {
//            return gift;
//        } else {
//            map.set(gift, i);
//        }
//    }
//  return -1;
// }
// 2-Masala
// function manufacture(gifts, materials) {
//   const availableMaterials = new Set(materials);

//   const possibleGifts = [];
//   for (const gift of gifts) {
//       let canMakeGift = true;
//       for (const char of gift) {
//           if (!availableMaterials.has(char)) {
//               canMakeGift = false;
//               break;
//           }
//       }
//       if (canMakeGift) {
//           possibleGifts.push(gift);
//       }
//   }

//   return possibleGifts;
// }
// 17-Masala
// function optimizeIntervals(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);

//   const mergedIntervals = [];
//   let currentInterval = intervals[0];

//   for (let i = 1; i < intervals.length; i++) {
//       const nextInterval = intervals[i];

//       if (currentInterval[1] >= nextInterval[0]) {
//           currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
//       } else {
//           mergedIntervals.push(currentInterval);
//           currentInterval = nextInterval;
//       }
//   }
//   mergedIntervals.push(currentInterval);

//   return mergedIntervals;
// }
// 22-Masala
// function compile(code) {
//   let counter = 0;
//   const returnPoints = [];

//   for (let i = 0; i < code.length; i++) {
//       const instruction = code[i];

//       switch (instruction) {
//           case '+':
//               counter++;
//               break;
//           case '*':
//               counter *= 2;
//               break;
//           case '-':
//               counter--;
//               break;
//           case '%':
//               returnPoints.push(i);
//               break;
//           case '<':
//               if (returnPoints.length > 0) {
//                   i = returnPoints.pop() - 1;
//               }
//               break;
//           case '¿':
//               if (counter > 0) {
//                   returnPoints.push(i);
//               }
//               break;
//           case '?':
//               if (counter <= 0) {
//                   returnPoints.pop();
//               }
//               break;
//       }
//   }

//   return counter;
// }
// Xatosini topomadim 22misolda
// 16-Masala
// function createChristmasTree(ornaments, height) {
//   let tree = '';

//   for (let i = 1; i <= height; i++) {
//       const ornamentCount = i * 2 - 1;
//       let rowOrnaments = '';

//       for (let j = 0; j < ornamentCount; j++) {
//           const ornamentIndex = j % ornaments.length;
//           rowOrnaments += ornaments[ornamentIndex] + ' ';
//       }

//       const spacesCount = height - i;
//       const spaces = ' '.repeat(spacesCount);
//       tree += spaces + rowOrnaments.trim() + '\n';
//   }

//   const trunkSpaces = ' '.repeat(height - 1) + '|';
//   tree += trunkSpaces + '\n';

//   return tree;
// }
// 9 - Masala;
// function adjustLights(lights) {
//   let changesNeeded = 0;

//   for (let i = 0; i < lights.length; i++) {
//     const expectedColor = i % 2 === 0 ? "🔴" : "🟢";
//     if (lights[i] !== expectedColor) {
//       changesNeeded++;
//     }
//   }

//   return changesNeeded;
// }
