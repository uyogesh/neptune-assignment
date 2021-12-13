import React, {FC, useState, useEffect} from "react";
import {GrSync} from 'react-icons/gr'
import Form from "../form";
import {stringIsNumber} from '../../utils/utils';
import styles from "./converter.module.css"

const conversionRate: {[key: string]: {[key: string]: number}} = {
    "NEP": {
        "BUSD": 3.0
    },
    "BUSD": {
        "NEP": 1.0/3.0
    }
}

interface CurrencyState {
    name: string,
    value?: string
}

const Converter:FC = ({}) => {
    const [firstCurrency, setFirstCurrency] = useState<CurrencyState>({name: "", value: ""});
    const [secondCurrency, setSecondCurrency ] = useState<CurrencyState>({name: "", value:""});
    
    const handleConversion = (val: string, from: string, to: string):string => {
        const conversed = (Number(val) * conversionRate[from][to]).toFixed(2);
        return conversed;
    }
    
    const resetState = () => {
        setFirstCurrency({...firstCurrency, value: ""});
        setSecondCurrency({...secondCurrency, value: ""});
    }

    const handleOnChange = (target: string) =>(event: React.ChangeEvent<HTMLInputElement>) =>{
        
        const {value} = event.target;
        
        //guard clauses
        if(!stringIsNumber(value)){
            return;
        }
        if(!!!value){
            resetState();
            return;
        }

        switch (target) {
            case firstCurrency.name:
                const secondVal = handleConversion(value, firstCurrency.name, secondCurrency.name);
                setSecondCurrency({...secondCurrency, value: secondVal});
                setFirstCurrency({...firstCurrency, value: value});
                break;
            case secondCurrency.name:
                const firstVal = handleConversion(value, secondCurrency.name, firstCurrency.name)
                setFirstCurrency({...firstCurrency, value: firstVal});
                setSecondCurrency({...secondCurrency, value: value});
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setFirstCurrency({name: 'NEP', value:""});
        setSecondCurrency({name: 'BUSD', value:""});
    }, []);

    return (
        <div className={styles["wrapper"]}>
            <h1>Crypto Converter</h1>
            <div className={styles["form-group"]}>
                <Form label={firstCurrency.name} name={firstCurrency.name} value={firstCurrency.value} onChange={handleOnChange(firstCurrency.name)}/>
                <div>
                    <button type="button" aria-label="Revert" className={styles["btn-revert"]}>
                        <GrSync color="black" size={24}/>
                    </button>
                </div>
                <Form label={secondCurrency.name} name={secondCurrency.name} value={secondCurrency.value} onChange={handleOnChange(secondCurrency.name)}/>
            </div>

        </div>
    );

}


export default Converter