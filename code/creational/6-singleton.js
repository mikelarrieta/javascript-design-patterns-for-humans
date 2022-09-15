const president = (function () {
    const presidentsPrivateInformation = "Super private";
    const name = 'Turd Sandwich';

    function getName () {
        return name;
    }

    return {
        getName
    };
}());

console.log(president.getName());
console.log(president.name);
console.log(president.presidentsPrivateInformation);
