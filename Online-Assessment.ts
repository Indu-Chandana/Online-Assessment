// Question 1:
const hasAllUniqueCharacters = (input: string) => {
    const lowString = input.toLowerCase().split("");
    const result = lowString.map((val, i) => {
        return input.includes(val);
    })
    const isValid = result.find((res) => !res)

    if (isValid) {
        return true
    } else {
        return false
    }

}

// Question 2
// Task 1: 
`SELECT  Customers.CustomerName, data.TotalSpent FROM Customers INNER JOIN data ON Customers.CustomerID=data.CustomerID WHERE Customers.CustomerID='$CustomerID'`

// Task 2: 
interface resultType { CustomerName: string, TotalSpent: number }
let highestSpend: resultType
const HighestTotalSpent = (results: resultType[]): resultType => {

    results.forEach((val, i) => {
        if (val.TotalSpent > highestSpend.TotalSpent) {
            return highestSpend = val
        } else {
            return
        }
    })

    return highestSpend;
}