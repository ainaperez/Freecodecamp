function checkCashRegister(price, cash, cid) {
    var difference = cash - price;
    const originalDiff = difference;
    cid.reverse();
    
    var cidSum = 0;
    for(let i = 0; i<cid.length; i++){
      cidSum += cid[i][1];
    }
    
    let arrCurrency = [
      ["ONE HUNDRED", 100], 
      ["TWENTY", 20], 
      ["TEN", 10], 
      ["FIVE", 5], 
      ["ONE", 1], 
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
      ]
      
    var result = [...arrCurrency];//new array where we are going to include all coins to return(it is going to be the value of the key 'change' 
    
    for(let i = 0; i<arrCurrency.length; i++){
      let returnMoney = 0; //initialize variable where we are going to save each coin value to return.
      let bill = cid[i][1]/arrCurrency[i][1]//check if there is a bill or coin available (has to be greater than 1)
        bill.toFixed(2);
        while(difference.toFixed(2)>=arrCurrency[i][1] && bill>=1){
          difference -= arrCurrency[i][1];
          returnMoney += arrCurrency[i][1];
          bill--;
          
        }
          if(returnMoney>0){
            if(returnMoney - Math.floor(returnMoney) !== 0){result[i][1]= returnMoney.toFixed(2)
            result[i][1] = parseFloat(result[i][1])}else{
              result[i][1]= returnMoney;
            }
            
          }else{
            result[i][1]= returnMoney;
          }
    }
    
    let sumResult = 0;//In order to check if we can return the exact change we create this variable where we will store the sum of all the change calculated before. If the sum is less to the change, then it will mean we can not give back the exact change.
    for(let i = 0; i<cid.length; i++){
      sumResult += result[i][1];
    }
    sumResult = sumResult.toFixed(2);
    
    
    cid.reverse();//we reverse the cid again to return it to the original.
    console.log(sumResult)
    console.log(originalDiff)
    if(cidSum < originalDiff || sumResult < originalDiff  ){
      return {status: 'INSUFFICIENT_FUNDS', change: []};
      }else if(cidSum == originalDiff ){
        return {status: 'CLOSED', change: cid}
      }else{
        let resultFiltered =[];
        for(let a = 0; a<result.length; a++){
          if(result[a][1]!==0){
            resultFiltered.push(result[a]);  
          } 
          }
        return {status: 'OPEN', change: resultFiltered}
      }
    }
    
    
    
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));