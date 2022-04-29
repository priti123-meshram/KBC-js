console.log(" ** WELLCOME TO KBC ** ")
console.log(" ** KON BANEGA KARORPATI ** \n")
var question_list = [
    "how many continents are there ?",        
    "what is the capital of india?",          
    "Ng mei kon se course padhaya jaata hai", 
]
var option_list = [
    ["Four", "nine", "seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"],
]
var solution_list=[3,4,1]
var ans=["seven","delhi","software engineering"]
var i=0
while (i<question_list.length){
    m=question_list[i]
    console.log(m)
    var j=0
    var k=i
    while (j<=option_list.length){
        d=option_list[k][j]
        console.log(j+1,d)
        j++
    }
    var n=require("readline-sync")
    var user_input=n.question("do you using lifeline :- ")
    if (user_input=="yes"){
        console.log("5050")
        console.log(1,option_list[i][i])
        console.log(2,ans[i])
        var a=n.questionInt("choose the carect answer :- ")
        if (a==2){
            console.log("..your answer is correct..\n")
        }
        else{
            console.log("you can't use more lifeline")
            var b=n.question("choose the answer :-  ")
            if (b==solution_list[i]){
                console.log("..your ans is correct..")
            }
            else{
                console.log("your ans is wrong")
                break
            }
        }
    }
    else{
        
        var c=n.questionInt("choose the answer :-  ")
        if (c==solution_list[i]){
            console.log("..your answer is correct..\n")
        }
        else{
            console.log("..your answer is wrong..")
        }
    }
    i++
    
}



   
        

