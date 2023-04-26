let countdownH1 = document.querySelector("#countdowm");

let count = 10;

    setTimeout(() => {
        countdownH1.innerHTML = `<h1>${count}</h1>`;
        count--;
        setTimeout(()=>{
            countdownH1.innerHTML = `<h1>${count}</h1>`;
            count--;
            setTimeout(()=>{
                countdownH1.innerHTML = `<h1>${count}</h1>`;
                count--;
                setTimeout(()=>{
                    countdownH1.innerHTML = `<h1>${count}</h1>`;
                    count--;
                    setTimeout(()=>{
                        countdownH1.innerHTML = `<h1>${count}</h1>`;
                        count--;
                        setTimeout(()=>{
                            countdownH1.innerHTML = `<h1>${count}</h1>`;
                            count--;
                            setTimeout(()=>{
                                countdownH1.innerHTML = `<h1>${count}</h1>`;
                                count--;
                                setTimeout(()=>{
                                    countdownH1.innerHTML = `<h1>${count}</h1>`;
                                    count--;
                                    setTimeout(()=>{
                                        countdownH1.innerHTML = `<h1>${count}</h1>`;
                                        count--;
                                        setTimeout(()=>{
                                            countdownH1.innerHTML = `<h1>${count}</h1>`;
                                            count--;
                                            setTimeout(()=>{
                                                countdownH1.innerHTML = `<h1>${count}</h1>`;
                                                setTimeout(()=>{
                                                    countdownH1.innerHTML = `<h1>Welcome to call back hell countdown</h1>`;
                                                }, 500)
                                               
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);
