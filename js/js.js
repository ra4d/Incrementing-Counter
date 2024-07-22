const counters = document.querySelectorAll(".counter")
counters.forEach((counter, index)=>{
        const updateCounter = () => {
            const terget = +counter.getAttribute("data-target")
            // console.log(terget);
            const c = +counter.innerText;
            // console.log(c);

            const increment = terget / 100;
            // console.log(increment);
            if(c < terget){
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter , 10);
            }
            else{
                counter.innerText = terget;
            }
        }
        updateCounter();
})

