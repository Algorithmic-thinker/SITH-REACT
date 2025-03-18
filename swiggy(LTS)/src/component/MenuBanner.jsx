

const MenuBanner = ({menuName , fontSize}) =>{
    return(
        <>
            <h1 className={`${fontSize} font-bold py-6`}>{menuName}</h1>
        </>
    )
}

export default MenuBanner