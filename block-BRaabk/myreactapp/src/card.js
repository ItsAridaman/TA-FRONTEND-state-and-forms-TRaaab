function Card(props) {
    console.log("starting");
    console.log(props.Infor);
    return <>
        <div class="menu-main">
            {props.Infor.map((info) =>
                <>
                    <div class="menu-card-div">
                        <div class="menu-card-div-1">
                            <img src={info.img} alt="img" />
                        </div>
                        <div class="menu-card-div-2">
                            <div class="menu-card-div-2-a">
                                <span>{info.title}</span>
                                <span class="span-1">{info.price}</span>
                            </div>
                            <hr />
                            <div class="menu-card-div-2-b">
                                <p>{info.desc}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    </>

}

export default Card;