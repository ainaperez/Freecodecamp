function checkCashRegister(price, cash, cid) {
    var difference = cash - price;
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
      ["NICKEL", 0.05],
      ["PENNY", 0.01],
      ["DIME", 0.1] 
      ]
    var result = [...arrCurrency];//new array where we are going to include all coins to return(it is going to be the value of the key 'change' 
    
    for(let i = 0; i<arrCurrency.length; i++){
      let returnMoney = 0; //initialize variable where we are going to save each coin value to return.
      let bill = cid[i][1]/arrCurrency[i][1]//check if there is a bill or coin available (has to be greater than 1)
        while(difference>=arrCurrency[i][1] && bill>=1){
          difference -= arrCurrency[i][1];
          returnMoney += arrCurrency[i][1];
          
        }
          result[i][1]= returnMoney;
    }
    let resultFiltered =[];
    
    for(let a = 0; a<result.length; a++){
      if(result[a][1]!==0){
        result.filtered.push(result[a][1]);  
      } 
      }
    console.log(resultFiltered);
    
    
    
      if(cidSum < difference){
      return {status: 'INSUFFICIENT_FUNDS', change: []};
      }else if(cidSum = difference){
        return {status: 'CLOSED', change: [cid]}
      }else{
        return {status: 'OPEN', change: [cid]}
      }
    }
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);