const nama = [ 
    "Agung", "Cahaya", "Dian", "Halimah",
    "Hasan", "Imam", "Iskandar", "Ismail",
    "Rahma", "Saiful", "Sari", "Surya",  
    "Umar", "Wati", "Wira", "Yusuf" 
]


function callback (x) {
    let re = new RegExp("^.*"+this+".*$")    
    return re.test(x);
}

function searching(word, listName) {
    let result = listName.filter(callback, word)
    if (result.length < 1) {
        return "Not Found"
    } else {
        return result
    }    
}

console.log(searching("ah", nama))
