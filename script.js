function split(){
    const item1 = document.querySelector("#item1").value;
    const item2 = document.querySelector("#item2").value;
    const item3 = document.querySelector("#item3").value;
    const item4 = document.querySelector("#item4").value;
    const item5 = document.querySelector("#item5").value;

 const noOfPeople= document.querySelector("noOfPeopleson").value;

 let totalbill=parseInt(item1)+
 let totalbill=parseInt(item2)+
 let totalbill=parseInt(item3)+
 let totalbill=parseInt(item4)+
 let totalbill=parseInt(item5)+

 let eachbill = totalbill/noOfPeople;
 document.querySelector("#totalbill").innerHTMl=totalbill;
 document.querySelector("#eachbill").innerHTMl=eachbill;


}