import { ReactElement, useState } from "react";
// this is custome Hook for manage multi steps form
export function useMultistepsForm(steps: ReactElement[]){
    const [currentStepIndex,setCurrentStepIndex] = useState(0);
    // next function to go ahead in the steps
    function next(){
        setCurrentStepIndex(i => {
            if(i>=steps.length - 1) return i;
            return i + 1
        })
    }
    // back function to go back in the steps
    function back(){
        setCurrentStepIndex(i => {
            if(i<=0) return i;
            return i - 1
        })
    }

    // back function to go back in the steps but to solve the problem of back to uncorrect step
    function customeBack(){
        setCurrentStepIndex(i => {
            if(i<=0) return i;
            if(i==3) return 1;
            return i - 1
        })
    }
        // back function to go back in the steps but to solve the problem of back to uncorrect step
        function customeBackTwo(){
            setCurrentStepIndex(i => {
                if(i<=0) return i;
                if(i==2) return 0;
                return i - 1
            })
        }
    // go to specific step in the steps
    function goTo(index: number) {
        setCurrentStepIndex(index)
    }
    return{
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length -1,
        steps,
        next,
        goTo,
        back,
        customeBack,
        customeBackTwo
    }
}