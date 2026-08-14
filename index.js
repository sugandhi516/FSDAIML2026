console.log("first")
//setTimeout(() => {console.log("second")}, 1000)
//for(let i = 0; i < 10000000; i++) {
  //  console.log("second")
//}
  //console.log("third")

 setTimeout(() => {
    console.log("one");

    setTimeout(() => {
        console.log("two");

        setTimeout(() => {
            console.log("three");

            setTimeout(() => {
                console.log("four");

                setTimeout(() => {
                    console.log("five");

                    setTimeout(() => {
                        console.log("six");

                        setTimeout(() => {
                            console.log("seven");
                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

const myPromise = new Promise((resolve, reject) => {
    usernamre = "John";
    password = "1234";
    if (username === "John" && password === "1234") {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }
});
myPromise.then((message) => {
    console.log(message);
}).catch((msg) => {
    console.error(msg);
})finally(() => {
    console.log("Promise is settled");
});

async function handleLogin() {
    try {
        await myPromise;
        console.log("Login successful");
    } catch (error) {
        console.error("Login failed");
    }
    finally {
        console.log("Promise is settled");
    }
    handleLogin();