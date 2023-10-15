export default class UserInfo{
    constructor({userNameSelector, userUndertitleSelector}){
        this._userName = document.querySelector(userNameSelector);
        this._userUndertitle = document.querySelector(userUndertitleSelector)
    }

    getUserInfo(){
        return {
            username: this._userName.textContent,
            userjob: this._userUndertitle.textContent
        };
    }

    setUserInfo({username, userjob}){
        this._userName.textContent = username;
        this._userUndertitle.textContent = userjob;
    }
}