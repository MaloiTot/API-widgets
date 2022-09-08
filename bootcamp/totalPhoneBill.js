
export default function totalPhoneBill(billString) {
    var record = billString.split(', ');
    let bill = 0;
    const call = 2.75;
    const sms = 0.65;
    
    for ( let i= 0; i<record.length; i++) {
      if (record[i] === 'call') {
        bill = bill + call;}
       else if (record[i] === 'sms') {
          bill = bill + sms;}
      else
        bill = bill + 0;
    }
  console.log('R' + bill.toFixed(2));
      return 'R' + bill.toFixed(2); 
          }