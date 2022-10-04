function Select(props) {
    return (

        <div>
            <select value={props.selectInfo} onChange={props.HandleSelect}>
                <option value="">Select</option>
                <option value="lowest">Lowest-Highest</option>
                <option value="highest">Highest-Lowest</option>

            </select>
        </div>



    )
}

export default Select