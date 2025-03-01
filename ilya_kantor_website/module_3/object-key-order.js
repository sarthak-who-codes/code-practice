const anime = {
    anime: "Fate",
    title: "Grand order",
    0: "This will come first",
    "49": "To test string to number coersion, should come second",
    "+12": "Checkmate JS",
    anotherField: "To check creation order",
}

for (const key in anime) {
    console.log(`
        key: ${ key },
        value: ${ anime[key] }
    `)
}

/* Output:
    
    key: 0,
        value: This will come first
    

        key: 49,
        value: To test string to number coersion, should come second
    

        key: anime,
        value: Fate
    

        key: title,
        value: Grand order
    

        key: +12,
        value: Checkmate JS
    

        key: anotherField,
        value: To check creation order
*/