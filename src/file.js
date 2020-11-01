console.log('', 2);

const foo = async (data) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(13), 3000)
    })
}