const { performance, PerformanceObserver } = require("perf_hooks")

// const age = 30
// console.log(age)

// age > 50 ? (age > 70 ? console.log("You are awesome!") : console.log("First True but second false")) : console.log("1st false")

// const value = 20
// const value1 = 20 + ""

// console.log(typeof value)

// const dynamic = "hobbies"

// const user = {
//   name: "Ed",
//   email: "deved@aol.com",
//   [dynamic]: "sleep",
// }

// console.log(user)

// const users = [1, 2, 3, 4, 5]
// // users.length = 3

// console.log(users.slice(-3))

// console.log(users)

// const users = [1, 2, 3, 4, 5]

// const usersObject = { ...users }

// console.log(usersObject)
// console.log(Object.keys(usersObject))
// console.log(Object.values(usersObject))

// let startAt = performance.now()

// for (let i = 0; i < 21920; i++) {
//   console.log(i)
// }

// let endAt = performance.now()

// console.log(`${endAt - startAt} took milliseconds to execute`)

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i])
// }

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// let canDrink = []
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }

// console.log(canDrink)

// const canDrink = ages.filter((age) => age >= 21)

// console.log(canDrink)

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true
//   }
// })

// const retailCompanies = companies.filter((company) => company.category === "Retail")

// console.log(retailCompanies)

// const eightiesCompanies = companies.filter((company) => company.start >= 1980 && company.start < 1990)
// console.log(eightiesCompanies)

// const lastedTenYears = companies.filter((company) => company.end - company.start > 10)
// console.log(lastedTenYears)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// const companyNames = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`
// })

// const companyNames = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`)

// console.log(companyNames)

// const agesSquare = ages.map((age) => Math.sqrt(age))
// console.log(agesSquare)

// const agesTimesTwo = ages.map((age) => age * 2)
// console.log(agesTimesTwo)

// const agesTimesTwo = ages.map((age) => age * 2).map((age) => Math.sqrt(age))
// console.log(agesTimesTwo)

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })

// console.log(sortedCompanies)

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

// console.log(sortedCompanies)

// console.log(ages.sort((a, b) => a - b))
// console.log(ages.sort((a, b) => b - a))

// let ageSum = 0
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// console.log(ageSum)

// const ageSum = ages.reduce(function (total, age) {
//   return total + age
// })

// console.log(ageSum)

// const ageSum = ages.reduce((total, age) => total + age, 0)

// console.log(ageSum)

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start)
// }, 0)

// console.log(totalYears)

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

// console.log(totalYears)

// const combined = ages
//   .map((age) => age * 2)
//   .filter((age) => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0)
// console.log(combined)
