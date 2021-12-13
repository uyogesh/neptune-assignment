import {FC} from 'react'
import styles from './form.module.css'

interface Props {
    name: string
    label: string
    value: string|undefined
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Form: FC<Props> = (props) => {
    return (
        <div className={styles["form-wrapper"]}>
            <label>{props.label}</label>
            <input type={"text"} name={props.name} value={props.value}  onChange={props.onChange} className="form-input" placeholder={`0.00`}/>
        </div>
    )
}

export default Form