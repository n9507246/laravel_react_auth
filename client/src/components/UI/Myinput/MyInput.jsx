import classes from './styles.module.css'

export default function(props){

    const {getDataByName, getErrorByName} = props.bindData !== undefined ? props.bindData : {}
    return(
        <div className={classes.inputField}>
            <label>{props.label}</label>
             <input 
                ref={ getDataByName ? getDataByName(props.name) : undefined} 
                type={props.type} 
                placeholder={props.placeholder}
            />
            <div className={classes.field__error}>{ getErrorByName ? getErrorByName(props.name) : undefined }</div> 
        </div>
    )
}