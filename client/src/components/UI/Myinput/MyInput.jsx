import classes from './styles.module.css'

export default function(props){
    return(
        <div className={classes.inputField}>
            <label>{props.label}</label>
             <input ref={props.data} type='text' placeholder={props.placeholder}/>
            {/* <input ref={el => console.log('zzzzzzz',el  )} type='text' placeholder={props.placeholder}/> */}
        </div>
    )
}