import global from "./global"


const getPageContext = ( page ) => {
    return {
        ...global(page),
    };
}

export default getPageContext;