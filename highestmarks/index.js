// highest marks
const marks = [ 85,94,56,54,58]
let highestmarks = 0;
let highestmarksstudent =''
marks.forEach((mark,i)=>{
    if(mark > highestmarks){
        highestmarks=mark;
        highestmarksstudent=`student ${i+1}`
    }
})
console.log(`The highest marks were scored by ${highestmarksstudent} with a score of ${highestmarks}`);