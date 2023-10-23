export default class UserInfo{
    constructor({userNameSelector, userUndertitleSelector, userAvatarSelector}){
        this._userName = document.querySelector(userNameSelector);
        this._userUndertitle = document.querySelector(userUndertitleSelector)
        this._avatarLink = document.querySelector(userAvatarSelector);
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
    setUserAvatar(avatarLink){
        this._avatarLink.src = avatarLink;
    }
}