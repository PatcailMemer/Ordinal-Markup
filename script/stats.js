function OrdToNumber(ord,base) {
   if(ord.search(/([0-9])\w*/) == 0) {
     return (parseInt(ord) > base) ? base : parseInt(ord)
   } else if(ord.search(/w([0-9])\w*/) == 0) {
     return parseInt(/w([0-9])\w*/.exec(ord)[1]) * base
   } else if(ord.search(/w([0-9])\w*\+([0-9])*/) == 0) {
     return /w([0-9])\w*\+([0-9])\w*/.exec(ord)[1] * base + Math.min(parseInt(/w([0-9])\w*\+([0-9])\w*/.exec(ord)[2]),base)
   }
}


//ExpantaNum is your best bet well i'm gonna stick with this for now and besides if the number is big enough the thing can't tell