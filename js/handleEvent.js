    let inputs=[];
    let actions =[];
    let pointer;
    let canType =true;
document.getElementById("num-zero").addEventListener("click", function () {
  const numZero = getValueFromId("num-zero");
  const displayScreen = document.getElementById("display-screen");
  const inputValue = displayScreen.value;
  if(inputValue.length>0 && canType===true){
      setValue(numZero);

  }else{
    alert('Click AC button to restart');
  }
});
document.getElementById('num-1').addEventListener('click',function(){
    const numOne = getValueFromId('num-1');
    if (canType === true) {
      setValue(numOne);
    } else {
       alert("Click AC button to restart");
    }
})
document.getElementById('num-2').addEventListener('click',function(){
    const numTwo = getValueFromId('num-2');
    if(canType===true)setValue(numTwo);
    else alert("Click AC button to restart");
})
document.getElementById('num-3').addEventListener('click',function(){
    const numThree = getValueFromId('num-3');
    if (canType === true) setValue(numThree);
    else alert("Click AC button to restart");
})
document.getElementById('num-4').addEventListener('click',function(){
    const numFour = getValueFromId('num-4');
    if (canType === true) setValue(numFour);
    else alert("Click AC button to restart");
})
document.getElementById('num-5').addEventListener('click',function(){
    const numFive = getValueFromId('num-5');
    if (canType === true) setValue(numFive);
    else alert("Click AC button to restart");
})
document.getElementById('num-6').addEventListener('click',function(){
    const numSix = getValueFromId('num-6');
    if (canType === true) setValue(numSix);
    else alert("Click AC button to restart");
})
document.getElementById('num-7').addEventListener('click',function(){
    const numSeven = getValueFromId('num-7');
    if (canType === true) setValue(numSeven);
    else alert("Click AC button to restart");
})
document.getElementById('num-8').addEventListener('click',function(){
    const numEight = getValueFromId('num-8');
    if (canType === true) setValue(numEight);
    else alert("Click AC button to restart");
})
document.getElementById('num-9').addEventListener('click',function(){
    const numNine = getValueFromId('num-9');
    if (canType === true) setValue(numNine);
    else alert("Click AC button to restart");
})

// + button 
document.getElementById('add-sign').addEventListener('click',function(){
    const displayScreen = document.getElementById('display-screen');
    const inputValue = displayScreen.value;
    if(inputValue!=='0'){
        if (
          inputValue[inputValue.length - 1] !== "+" &&
          inputValue[inputValue.length - 1] !== "-" &&
          inputValue[inputValue.length - 1] !== "*" &&
          inputValue[inputValue.length - 1] !== "/"
        ) {
          if (actions.length == 0) {
            inputs.push(inputValue);
            pointer = inputValue.length;
          }
          if (canType === true) {
            setValue("+");
            if (actions.length > 0) {
              const latestValue = inputValue.slice(pointer + 1);
              pointer = inputValue.length;
              inputs.push(latestValue);
            }

            actions.push("+");
            console.log(inputs);
          }
        }
    
   
    }
})
// - button 
document.getElementById('sub-sign').addEventListener('click',function(){
    const displayScreen = document.getElementById('display-screen');
    const inputValue = displayScreen.value;
   if(inputValue!=='0'){
     if (
       inputValue[inputValue.length - 1] !== "+" &&
       inputValue[inputValue.length - 1] !== "-" &&
       inputValue[inputValue.length - 1] !== "*" &&
       inputValue[inputValue.length - 1] !== "/"
     ) {
       if (actions.length == 0) {
         inputs.push(inputValue);
         pointer = inputValue.length;
       }
       if (canType === true) {
         setValue("-");
         console.log(displayScreen.value);
         if (actions.length > 0) {
           const latestValue = inputValue.slice(pointer + 1);
           pointer = inputValue.length;
           inputs.push(latestValue);
         }

         actions.push("-");
         console.log(inputs);
         console.log(actions);
       }
     }
    
   }
   
})

// * button 

document.getElementById('mul-sign').addEventListener('click',function(){
    const displayScreen = document.getElementById('display-screen');
    const inputValue = displayScreen.value;
    if(inputValue!=='0'){
        if (
          inputValue[inputValue.length - 1] !== "+" &&
          inputValue[inputValue.length - 1] !== "-" &&
          inputValue[inputValue.length - 1] !== "*" &&
          inputValue[inputValue.length - 1] !== "/"
        ) {
          if (actions.length == 0) {
            inputs.push(inputValue);
            pointer = inputValue.length;
          }
          if (canType === true) {
            setValue("*");
            console.log(displayScreen.value);
            if (actions.length > 0) {
              const latestValue = inputValue.slice(pointer + 1);
              pointer = inputValue.length;
              inputs.push(latestValue);
            }

            actions.push("*");
            console.log(inputs);
            console.log(actions);
          }
        }
    
    }
   
})
// / button 

document.getElementById('div-sign').addEventListener('click',function(){
    const displayScreen = document.getElementById('display-screen');
    const inputValue = displayScreen.value;
    if(inputValue!=='0'){
        if (
          inputValue[inputValue.length - 1] !== "+" &&
          inputValue[inputValue.length - 1] !== "-" &&
          inputValue[inputValue.length - 1] !== "*" &&
          inputValue[inputValue.length - 1] !== "/"
        ) {
          if (actions.length == 0) {
            inputs.push(inputValue);
            pointer = inputValue.length;
          }
          if (canType === true) {
            setValue("/");
            console.log(displayScreen.value);
            if (actions.length > 0) {
              const latestValue = inputValue.slice(pointer + 1);
              pointer = inputValue.length;
              inputs.push(latestValue);
            }

            actions.push("/");
            console.log(inputs);
            console.log(actions);
          }
        }
    }
    
   
})

// == button action 
document.getElementById('equal-sign').addEventListener('click',function(){
      const displayScreen = document.getElementById("display-screen");
      const inputValue = displayScreen.value;
    
    if(actions.length>0){

      const latestValue = inputValue.slice(pointer + 1);
      pointer = inputValue.length;
      inputs.push(latestValue);
    
     //for divisions

    let removeIndexes = [];

    let sign = [];
    for (let i = 0; i < actions.length; i++) {
      if (actions[i] === "/") {
        sign.push(i);
      }
    }
    console.log(sign);
    if (sign.length > 0) {
      for (let i = 0; i < sign.length; i++) {
        console.log(inputs);
        const inputOne =parseFloat(inputs[sign[i]-i]);
        const inputTwo =parseFloat(inputs[sign[i]+(1-i)]);
        console.log(inputOne,inputTwo);
        const newVal = parseFloat(inputOne/inputTwo );
        inputs[sign[i]-i] = newVal.toString();
        inputs.splice(sign[i]+1 -i, 1);
        console.log(inputs);
        actions.splice(sign[i] - i, 1);
      }
    }
    //for multiplications

    removeIndexes = [];
    sign = [];
      for (let i = 0; i < actions.length; i++) {
        if (actions[i] === "*") {
          sign.push(i);
        }
      }
      if (sign.length > 0) {
        for (let i = 0; i < sign.length; i++) {
          console.log(inputs);
          const inputOne = parseFloat(inputs[sign[i] - i]);
          const inputTwo = parseFloat(inputs[sign[i] + (1 - i)]);
          console.log(inputOne, inputTwo);
          const newVal = parseFloat(inputOne * inputTwo);
          inputs[sign[i] - i] = newVal.toString();
          inputs.splice(sign[i] + 1 - i, 1);
          console.log(inputs);
          actions.splice(sign[i] - i, 1);
        }
      }

      //for substractions
          removeIndexes = [];
          sign = [];
          for (let i = 0; i < actions.length; i++) {
            if (actions[i] === "-") {
              sign.push(i);
            }
          }
          if (sign.length > 0) {
              for (let i = 0; i < sign.length; i++) {
                console.log(inputs);
                const inputOne = parseFloat(inputs[sign[i] - i]);
                const inputTwo = parseFloat(inputs[sign[i] + (1 - i)]);
                console.log(inputOne, inputTwo);
                const newVal = parseFloat(inputOne - inputTwo);
                inputs[sign[i] - i] = newVal.toString();
                inputs.splice(sign[i] + 1 - i, 1);
                console.log(inputs);
                actions.splice(sign[i] - i, 1);
              }
          }

          //for addition
              removeIndexes = [];
              sign = [];
              for (let i = 0; i < actions.length; i++) {
                if (actions[i] === "+") {
                  sign.push(i);
                }
              }
              if (sign.length > 0) {
               for (let i = 0; i < sign.length; i++) {
                 console.log(inputs);
                 const inputOne = parseFloat(inputs[sign[i] - i]);
                 const inputTwo = parseFloat(inputs[sign[i] + (1 - i)]);
                 console.log(inputOne, inputTwo);
                 const newVal = parseFloat(inputOne + inputTwo);
                 inputs[sign[i] - i] = newVal.toString();
                 inputs.splice(sign[i] + 1 - i, 1);
                 console.log(inputs);
                 actions.splice(sign[i] - i, 1);
               }
              }
              const newVal ='='+inputs[0];
              setValue(newVal);
              canType=false;
 }
 else{

    if(canType===true){
        displayScreen.value = "=";
        setValue(inputValue);
    
    }
    canType=false;
 }
})

// AC Button 
document.getElementById('all-clear').addEventListener('click',function(){
    document.getElementById('display-screen').value ='0';
    inputs= [];
    actions = [];
    canType=true;
})