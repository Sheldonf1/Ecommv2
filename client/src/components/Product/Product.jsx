export const Product = (props) => {
    const item = props.item
    return (
        <>
            <section>
                <img src={require(`../../${item.image}`)}></img>
            </section>
            <section id="design">
                <h2>{item.type}</h2>
                <h3>{item.price}</h3>
                <p>{item.description}</p>
                <button id="add"> Click Here </button>
            </section>
        </>
    )
}