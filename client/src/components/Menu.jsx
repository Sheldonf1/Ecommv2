export const Menu = () => {
    return (
        <>
            <ul className="menu">
                <li className="menu_list">
                    <span className="front fas fa-home"></span>
                    <a href="/" className="side">home</a>
                </li>
                <li className="menu_list">
                    <span className="front fas fa-briefcase"></span>
                    <a href="Products" className="side">products</a>
                </li>
                <li className="menu_list">
                    <span className="front fas fa-paper-plane"></span>
                    <a href="Contact" className="side">contact</a>
                </li>
            </ul>
        </>
    )
}