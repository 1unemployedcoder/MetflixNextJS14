"use client"
import cl from "./Select.module.css"

type Options = {
    value: string
    name: string
}
interface Props {
    options: Options[]
    defaultName: string
    value: string
    onChange: (value: string) => void
    defaultValue: string
}

const Select: React.FC<Props> = ({options, defaultName, value, onChange, defaultValue}) => {
    return (
        <>
            {defaultName}:
            <select defaultValue={defaultValue} className={cl.select} value={value} onChange={e => onChange(e.target.value)}>
                {options.map(option =>
                    <option className={cl.option} key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </>
    );
};

export default Select;
