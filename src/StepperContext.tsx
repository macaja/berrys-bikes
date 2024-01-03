import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Files, User } from './types';

type StepperContextProps = {
    stepNumber: number;
    isLoading: boolean;
    user: User;
    files: Files;
    acceptTerms: boolean;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    setIsLoading: (v: boolean) => void;
    setUser: (user: User) => void;
    setFiles: (files: Files) => void;
    setAcceptTerms: (b: boolean) => void;
};

export const StepperContext = createContext<StepperContextProps | undefined>(undefined);

const { Provider } = StepperContext;

const StepperProvider = ({ children }: { children?: ReactNode }) => {
    const initialUser: User = {
        firstName: { field: '', error: false },
        middleName: { field: '', error: false },
        lastName: { field: '', error: false },
        address: { field: '', error: false },
        country: { field: '', error: false },
        passport: { field: '', error: false },
        visaGrantNumber: { field: '', error: false },
        mobileNumber: { field: '', error: false },
        email: { field: '', error: false },
    };
    const [isLoading, setIsLoading] = useState(false);
    const [stepNumber, setStepNumber] = useState(0);
    const [user, setUser] = useState(initialUser);
    const [files, setFiles] = useState<Files>({
        passportFile: null,
        visaFile: null,
    });
    const [acceptTerms, setAcceptTerms] = useState(false);
    const value: StepperContextProps = {
        stepNumber: stepNumber,
        isLoading: isLoading,
        user: user,
        files: files,
        acceptTerms: acceptTerms,
        handleNextStep: () => setStepNumber(stepNumber + 1),
        handlePreviousStep: () => setStepNumber(stepNumber - 1),
        setIsLoading: (b) => setIsLoading(b),
        setUser: (user) => setUser(user),
        setFiles: (files) => setFiles(files),
        setAcceptTerms: (b) => setAcceptTerms(b),
    };
    return <Provider value={value}>{children}</Provider>;
};

const useStepperContext = () => {
    const ctx = useContext(StepperContext);
    if (!ctx) throw Error('StepContextProvider not a parent');
    return ctx;
};
export default StepperProvider;
export { useStepperContext };
