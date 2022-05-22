function show(anything) {
    document.querySelector(".textBox").value = anything;
  }
  
  // let dropdown = document.querySelector('.dropdown');
  // dropdown. onclick= function(){
  //     dropdown.classList.toggle('active');
  // }
  
  const sliders = document.querySelectorAll(".slidecontainer");
  
  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      slider.lastElementChild.innerHTML = slider.firstElementChild.value;
    });
  });
  
  function f1() {
    var name = document.forms["myForm"]["fname"].value;
    console.log(name);
  
    // output.innerHTML =` your name is <span>${name}</span>`;
  
    var family_member = document.forms["myForm"]["fmember"].value;
  
    var electricity_usage = document.forms["myForm"]["felectricity"].value;
    var emission_factor_electricity = 0.91;
    var months = 12;
    var CO2_electricity =
      electricity_usage * months * emission_factor_electricity;
  
    var cylinder_usage = document.forms["myForm"]["fcylinder"].value;
    var emission_factor_cylinder = 2.983;
    var LPG_gas_to_KG = 14; // 1 lpg cylinder contain 14 kg gas in it.
    var CO2_cylinder =
      cylinder_usage * emission_factor_cylinder * LPG_gas_to_KG * months;
  
    var CO2_fuel;
    document.getElementsByName("Fuel").forEach((radio) => {
      if (radio.checked) {
        console.log(radio.value);
        if (radio.value == "Petrol") {
          var fuel_usage = document.forms["myForm"]["ffuel"].value;
          var emission_factor_fuel = 2.296;
          CO2_fuel = fuel_usage * emission_factor_fuel * months;
        } else {
          var fuel_usage = document.forms["myForm"]["ffuel"].value;
          var emission_factor_fuel = 2.653;
          CO2_fuel = fuel_usage * emission_factor_fuel * months;
        }
      }
    });
  
    var fuel_usage = document.forms["myForm"]["ffuel"].value;
    var emission_factor_fuel = 2.653;
    var CO2_fuel = fuel_usage * emission_factor_fuel * months;
  
    var total_carbonFootprint =
      (CO2_electricity + CO2_cylinder + CO2_fuel) / 1000 / family_member;
    console.log("Your Carbon Footprint Is ", total_carbonFootprint, " tonnes");
    total_carbonFootprint = total_carbonFootprint.toFixed(4);
    output.innerHTML = ` ${name} Your carbon footprint is  <span>${total_carbonFootprint}</span> tonne`;
  
    var Average_carbonFootprint_India_perCapita = 0.56;
    if (total_carbonFootprint < Average_carbonFootprint_India_perCapita) {
      console.log(
        "Your Carbon Footprint is good, Carry on your day-to-day activities as it is. "
      );
      output2.innerHTML = `Your Carbon Footprint is good, Carry on your day-to-day activities as it is.`;
    } else if (total_carbonFootprint > Average_carbonFootprint_India_perCapita) {
      console.log(
        "Your Carbon footprint is greater than the average carbon footprint of individual in India."
      );
      // console.log('Follow the certain steps to reduce your carbon footprints : ');
      output2.innerHTML = `Your Carbon footprint is greater than the average carbon footprint of individual in India.`;
    } else {
      console.log(
        "You have average carbon footprint, so you can improved it more by taking following measures : "
      );
      output2.innerHTML = `You have average carbon footprint, so you can improve it more by taking following measures : `;
    }
    var result = document.getElementById("result-container");
    result.style.display = "block";
    return false;
  }
  
  function f2() {
    var result = document.getElementById("result-container");
    result.style.display = "none";
  }