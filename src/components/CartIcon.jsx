
export const CartIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g id="cart">
                <path className="cls-1" fill={props.color}
                    d="M29.46,10.14A2.94,2.94,0,0,0,27.1,9H10.22L8.76,6.35A2.67,2.67,0,0,0,6.41,5H3A1,1,0,0,0,3,7H6.41a.68.68,0,0,1,.6.31l1.65,3,.86,9.32a3.84,3.84,0,0,0,4,3.38H23.89a3.92,3.92,0,0,0,3.85-2.78l2.17-7.82A2.58,2.58,0,0,0,29.46,10.14ZM28,11.86l-2.17,7.83A1.93,1.93,0,0,1,23.89,21H13.48a1.89,1.89,0,0,1-2-1.56L10.73,11H27.1a1,1,0,0,1,.77.35A.59.59,0,0,1,28,11.86Z" />
                <circle className="cls-1" fill={props.color} cx="14" cy="26" r="2" />
                <circle className="cls-1" fill={props.color} cx="24" cy="26" r="2" />
            </g>
        </svg>
    )
}