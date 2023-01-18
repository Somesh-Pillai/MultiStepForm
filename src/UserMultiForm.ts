import { ReactElement, useState } from "react";

export function UserMultiForm(steps: ReactElement[]){  //react elements are basically list of components
const [currentStepIndex, setCurrentStepIndex] = useState(0)

function next(){
    setCurrentStepIndex(i => {
        if(i >=  steps.length - 1) return i
        return i + 1
    })
}

function back(){
setCurrentStepIndex(i => {
    if(i <  1) return i
    return i - 1
})
}

function goTo(index : number){
    setCurrentStepIndex(index)
}
return{
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    goTo,
    back,
    next,
    steps,
    isLastPage : currentStepIndex === steps.length - 1,
    isFirstPage: currentStepIndex === 0
}


}