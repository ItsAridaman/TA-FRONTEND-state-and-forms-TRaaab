import React from "react";

// function Sidebar(props) {
//     console.log(props.products);

//     let allsizes = props.products.reduce((acc, cv) => {
//         acc = acc.concat(cv.availableSizes);
//         return acc;
//     }, [])
//     console.log(allsizes);

//     let filtersize = [...new Set(allsizes)]
//     console.log(filtersize);

//     return (
//         <>
//             <div className="size-div">
//                 {
//                     filtersize.map((size) =>
//                         <span className="size-span">{size}</span>
//                     )
//                 }
//             </div>
//         </>
//     )
// }



class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
           
        })
    }


    render() {
        let allsizes = this.props.products.reduce((acc, cv) => {
            acc = acc.concat(cv.availableSizes);
            return acc;
        }, [])

        let filtersize = [...new Set(allsizes)]

        return (

            <>
                <div className="size-div">
                    {
                        filtersize.map((size) =>
                            <span onClick={() => this.props.HandleButtonClick(size)} className={`size-span ${this.props.clickedButton.includes(size)? "Active":""}`} >{size}</span>
                        )
                    }
                </div>
            </>
        )

    }

}

export default Sidebar