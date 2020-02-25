function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        },3000);
    })
}

// resolveAfter3Seconds().then(resolve => {
//     console.log(resolve);
// })
// .catch(reject => {
//     console.log(reject);
// });

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter3Seconds();
    console.log(result);
}

asyncCall();