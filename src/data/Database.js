class Database {

    get privacy() {
        return [
            `Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).
            You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.`
            ,
            `These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.
            Without these cookies, we cannot provide you certain services on our website.`
            ,
            `These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.
            For example, we may use functionality cookies to remember your language preferences or remember your login details.`
            ,
            `These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.
            For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website site for you.
            The information collected through these tracking and performance cookies do not identify any individual visitor.
            `
        ]
    }
}
export default new Database();