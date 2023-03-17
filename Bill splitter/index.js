// Bill splitter
function billsplitter(costperdish,person){
  const  totalbill = costperdish*person
  const  billperperson = totalbill/person
  console.log({
    Totalbill: totalbill,
    Eachperson:billperperson

    

  })
}
billsplitter(20,3)