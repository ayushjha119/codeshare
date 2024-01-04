import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import { ChoiceDefinition, LanguageDefinition, ThemeDefinition } from "@/lib/types";
import { FC, ReactNode, createContext, useContext, useState } from "react";


interface SettingsContextProps {
    language: LanguageDefinition
    setLanguage: (_:LanguageDefinition) => void
    theme: ThemeDefinition
    setTheme: (_:ThemeDefinition) => void
    lineNumbers: boolean
    setLineNumbers: (_:boolean) => void
    padding: ChoiceDefinition;
    setPadding: (_:ChoiceDefinition) => void

}

const SettingsContext = createContext<SettingsContextProps>(
    {} as SettingsContextProps

);
const useSettingsContext = () => useContext(SettingsContext);
type SettingsProviderProps = {
    children: ReactNode

}

const SettingsProvider: FC<SettingsProviderProps> = ({children}) => {

    const [language, setLanguage]  = useState<LanguageDefinition>(
        SUPPORTED_LANGUAGES[0]
    );
    const [theme, setTheme] = useState<ThemeDefinition>()
}
