import React, { ReactNode, createContext, useContext, useState } from 'react';

type StepperContextProps = {
    stepNumber: number;
    isLoading: boolean;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    setIsLoading: ({v} : {v: boolean}) => void
}

export const StepperContext = createContext<StepperContextProps | undefined>(undefined);

const { Provider } = StepperContext;

const StepperProvider = ({ children }: { children?: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [stepNumber, setStepNumber] = useState(0);
    const value: StepperContextProps = {
        stepNumber: stepNumber,
        isLoading: isLoading,
        handleNextStep: () => setStepNumber(stepNumber + 1),
        handlePreviousStep: () => setStepNumber(stepNumber - 1),
        setIsLoading: ({v}) => setIsLoading(v)
    }
    return <Provider value={value}>{children}</Provider>
}

const useStepperContext= () => {
    const ctx = useContext(StepperContext);
    if (!ctx) throw Error('StepContextProvider not a parent');
    return ctx;
}
export default StepperProvider;
export { useStepperContext };
