function addressmaker (address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country:'United States'
    };
    return newAddress;
}

var address = {
    city: ' Thanh Hoa',
    state: true
}

console.log(addressmaker(address));



