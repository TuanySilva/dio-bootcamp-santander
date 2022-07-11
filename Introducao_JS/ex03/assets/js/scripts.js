
//Solução 1 
function verificaPalindrome(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindrome("ovo"));


// Solução 2
// omo
// 012

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i=0; i< string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2('abba'));