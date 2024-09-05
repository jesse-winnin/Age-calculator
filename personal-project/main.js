const button = document.getElementById("btn")
function myFunction(){
    let personAge = document.querySelector("#date1").value
    let currentDate= new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let personDate = new Date(personAge)
    let personYear = personDate.getFullYear()
    const age = currentYear-personYear
    console.log(age)
    let personMonth = personDate.getMonth()
    const ageInMonths = currentMonth - personMonth
    let emptyPtag = document.getElementById("EmptyPtag")
    emptyPtag.textContent  = "Your age is " + age + "years" + ", " + ageInMonths + "months" +"😊"

    if (personMonth > currentMonth ){
        let newAgeInmonths= 12 + ageInMonths
        let newEmptyPtag = document.getElementById("EmptyPtag")
        newEmptyPtag.textContent  = "Your age is " + age + "years" + ", " + newAgeInmonths + "months" +"😊" 
    }
    
    


    console.log (emptyPtag)
//    let specificYear= personAge.getFullYear()
//    console.log(specificYear)
//    const diffDate = Math.abs(currentDate-personAge)
//    const diffDays = Math.floor(diffDate/ 1000 * 60 * 60 * 24)
//    console.log(diffDays + "days")
//    console.log(diffDate + "millisenconds")
}




// const year= currentDate.getFullYear()
// const month = currentDate.getMonth() + 9
// const day = currentDate.getDate() + 2
// console.log(currentDate)
// console.log("hi

