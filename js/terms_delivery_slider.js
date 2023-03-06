(() => {
    const step_1 = document.querySelector(".step_01_mob");
    const step_2 = document.querySelector(".step_02_mob");
    const step_3 = document.querySelector(".step_03_mob");
    const step_4 = document.querySelector(".step_04_mob");


    const block_1 = document.getElementById("delivery_mob-tab_icon_description_01");
    const block_2 = document.getElementById("delivery_mob-tab_icon_description_02");
    const block_3 = document.getElementById("delivery_mob-tab_icon_description_03");
    const block_4 = document.getElementById("delivery_mob-tab_icon_description_04");

       block_2.style.display = "none";
       block_3.style.display = "none";
       block_4.style.display = "none";
   
   
   
   
    step_1.addEventListener("click", () => {
        step_1.classList.add("active");
        step_2.classList.remove("active");
        step_3.classList.remove("active");
       step_4.classList.remove("active");
       
        block_1.style.display = "block";
        
         block_2.style.display = "none";
       block_3.style.display = "none";
       block_4.style.display = "none";
   

    })

    step_2.addEventListener("click", () => {
        step_2.classList.add("active");
        step_1.classList.remove("active");
        step_3.classList.remove("active");
        step_4.classList.remove("active");


        block_2.style.display = "block";

      block_1.style.display = "none";
       block_3.style.display = "none";
       block_4.style.display = "none";
    })

   step_3.addEventListener("click", () => {
       step_3.classList.add("active");
        step_1.classList.remove("active");
        step_2.classList.remove("active");
       step_4.classList.remove("active");
       
       block_3.style.display = "block";


       block_1.style.display = "none";
       block_2.style.display = "none";
       block_4.style.display = "none";
    })

      step_4.addEventListener("click", () => {
        step_4.classList.add("active");   
        step_1.classList.remove("active");
        step_3.classList.remove("active");
          step_2.classList.remove("active");
          
          block_4.style.display = "block";


        block_1.style.display = "none";
       block_2.style.display = "none";
       block_3.style.display = "none";
    })

}

)()