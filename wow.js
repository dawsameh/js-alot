function insertionMethod(listing) {
    let n = listing.length;
    for (let i = 1; i < n; i++) {
        let current = listing[i];
        let j = i-1;
        while ((j > -1) && (current > listing[j])) {
            listing[j+1] = listing[j];
            j--;
        } 
        listing[j+1] = current;
    }
    return listing;
}

function partetoSort(listing) {
    let filteredlist = [];
    let n = listing.length;
    let bignum = listing[0];
    let smallnum = listing[listing.length - 1];
    let bigMinSmall = (bignum - smallnum) * 0.8;
    console.log('20% of the numbers are above ' + Math.round(bigMinSmall) + '.');
        for (let i = 0; i <= n; i++) {
            let current_i = listing[i];
                if (current_i >= Math.round(bigMinSmall)){
                    filteredlist[i] = current_i;
                }        
        }
    return filteredlist;
}

function avgNumOfList(filteredlist) {
    let n = filteredlist.length;
    let totalCalc = 0; 
        for (let i = 0; i < n; i++) {
            current = filteredlist[i]
            totalCalc += current;
        }
    return Math.round(totalCalc/n);
}

let listing = [625, 23, 762, 531, 388, 513, 578, 389, 62, 231, 782, 366, 299, 202, 224, 693, 223, 500, 372, 314, 742, 711, 971, 281, 88, 108, 562, 9, 542, 886, 393, 31, 161, 594, 620, 862, 310, 529, 541, 175, 66, 274, 821, 572, 218, 286, 353, 210, 731, 57, 245, 84, 270, 643, 373, 219, 723, 346, 600, 165, 771, 229, 548, 908, 356, 8, 511, 750, 283, 488, 450, 205, 96, 140, 606, 909, 770, 359, 415, 608, 155, 102, 523, 823, 290, 917, 814, 91, 561, 540, 243, 660, 220, 86, 701, 718, 295, 671, 484, 928, 673, 859, 888, 695, 798, 913, 768, 456, 368, 626, 676, 697, 736, 479, 136, 700, 738, 383, 793, 728, 168, 98, 134, 805, 162, 475, 784, 776, 629, 724, 331, 897, 300, 428, 866, 595, 842, 127, 681, 477, 183, 692, 916, 267, 655, 597, 984, 977, 828, 884, 265, 841, 44, 760, 647, 360, 305, 380, 15, 863, 468, 192, 857, 580, 569, 25, 670, 471, 277, 555, 668, 872, 639, 865, 527, 651, 376, 34, 187, 272, 390, 824, 239, 320, 324, 896, 849, 991, 344, 209, 214, 751, 707, 39, 830, 238, 730, 413, 661, 502, 813, 399, 112, 740, 918, 358, 78, 963, 645, 467, 790, 371, 520, 417, 509, 923, 341, 197, 664, 574, 892, 811, 808, 802, 204, 443, 852, 157, 143, 92, 213, 822, 391, 524, 147, 796, 642, 786, 195, 313, 103, 90, 840, 4, 394, 51, 440, 638, 375, 174, 819, 967, 263, 893, 343, 621, 482, 604, 169, 461, 545, 400, 378, 566, 253, 691, 875, 142, 936, 565, 493, 335, 581, 745, 60, 709, 309, 133, 506, 401, 338, 532, 704, 323, 575, 876, 596, 962, 636, 903, 882, 934, 894, 276, 81, 154, 255, 975, 490, 803];

insertionMethod(listing);

console.log(listing);

let filteredlist = partetoSort(listing);
let avgNum = avgNumOfList(filteredlist);

console.log(filteredlist);
console.log('The average number is ' + avgNum + '.');


