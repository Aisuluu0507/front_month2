////////////////////////////////////DZ1
var user = ["name", "John", "lastname", "Black", "age", "23"]
var obj = {}

for (var i = 0; i < user.length; i += 2) {
    var keys = user[i]
    var values = user[i + 1]
    obj[keys] = values
}

console.log(obj)

////////////////////////////////////DZ2

function arithmetic_averages_numbers(...rest) {
    if (rest.length === 0) {
        return 0
    }

    var sum = rest.reduce((a, b) => a + b, 0)
    var arithmetic_numbers = sum / rest.length

    return arithmetic_numbers
}

var arithmetic_numbers = arithmetic_averages_numbers(10,20,80,160,350,580)
console.log(arithmetic_numbers)

////////////////////////////////////DZ3

function call(data_types) {
    console.log(typeof data_types)
}

call(2005)//number
call("My name is Aisuluu and I am Geeks student")//string
call(true)//boolean

///////////////// THE END


