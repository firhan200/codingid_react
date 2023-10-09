/* eslint-disable react/prop-types */
export default function Button(props){
    const color = props.color

    return (
        <button style={{
            backgroundColor: color
        }}>{ props.children }</button>
    )
}