(()=>{"use strict";var e=document.querySelector("#name"),t=document.querySelector("#job"),r=(document.querySelector("#edit-form"),document.querySelector(".popup__form"),document.querySelector(".profile__avatar-edit")),n=document.querySelector(".profile__edit-button"),o=document.querySelector("#avatar-form"),i=document.querySelector(".profile__add-button"),a=document.querySelector("#edit-form"),u=document.querySelector("#add-form");function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var s=function(){function e(t){var r=t.url,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=r,this._headers=n}var t,r;return t=e,(r=[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.username,about:e.userjob})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"sendAvatarData",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatarlink})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"putCardLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log(e)})).then((function(e){return t._checkServerResponse(e)}))}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var d=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._submitInactiveClass=t.submitInactiveClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSelector=t.formSelector,this._form=r}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._addInputListners()}},{key:"_showInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_handleFormInput",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButton",value:function(){this._buttonSubmit=this._form.querySelector(this._submitButtonSelector),this._isFormValid=this._form.checkValidity(),this._buttonSubmit.disabled=!this._isFormValid,this._buttonSubmit.classList.toggle(this._submitInactiveClass,!this._isFormValid)}},{key:"_addInputListners",value:function(){var e=this;this._toggleButton(),this._inputList=this._form.querySelectorAll(this._inputSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._handleFormInput(t),e._toggleButton()}))}))}},{key:"clearValidationForm",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var m=function(){function e(t,r,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardAlt=this._card.name,this._likeArea=this._card.likes,this._templateSelector=r,this._userId=n,this._cardId=o.cardId,this._authorId=o.authorId,this._handleCardZoom=i.handleCardZoom,this._handleCardDelete=i.handleCardDelete,this._handleCardLike=i.handleCardLike,this._handleCardDeleteLike=i.handleCardDeleteLike}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_checkLike",value:function(){var e=this;return this._likeArray.find((function(t){return t._id===e._userId}))}},{key:"_checkAuthorCard",value:function(){var e=this;this._userId===this._authorId?this._cardElementDelete.addEventListener("click",(function(){return e._handleCardDelete(e,e._cardId)})):this._cardElementDelete.remove()}},{key:"createCard",value:function(){return this._cardElement=this._getTemplate(),this._cardElementTitle=this._cardElement.querySelector(".element__title"),this._cardElementImage=this._cardElement.querySelector(".element__image"),this._cardElementLike=this._cardElement.querySelector(".element__button-like"),this._cardElementDelete=this._cardElement.querySelector(".element__delete-button"),this._cardElementLikeCounter=this._cardElement.querySelector(".element__like-counter"),this._cardElementTitle.textContent=this._cardName,this._cardElementImage.src=this._cardImage,this._cardElementImage.alt=this._cardName,this.renderCardLike(this._card),this._checkAuthorCard(),this._setEventListeners(),this._cardElement}},{key:"renderCardLike",value:function(e){this._likeArray=e.likes,0===this._likeArray.length?this._cardElementLikeCounter.textContent="":this._cardElementLikeCounter.textContent=this._likeArray.length,this._checkLike()?this._cardElementLike.classList.add("element__button-like_active"):this._cardElementLike.classList.remove("element__button-like_active")}},{key:"_addLike",value:function(){this._checkLike()?this._handleCardDeleteLike(this._cardId):this._handleCardLike(this._cardId)}},{key:"_setEventListeners",value:function(){var e=this;this._cardElementLike.addEventListener("click",(function(){e._addLike()})),this._cardElementImage.addEventListener("click",(function(){e._handleCardZoom(e._cardName,e._cardImage)})),this._cardElementDelete.addEventListener("click",(function(){e._handleCardDelete(e,e._cardId)}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickOnOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},g.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(o){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r,n=t.callbackNotice;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._submitButton=r._popup.querySelector(".popup__form"),r._callbackNotice=n,r}return t=a,(r=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,g(E(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("submit",(function(t){t.preventDefault(),e._callbackNotice(e._cardObject,e._cardId)})),g(E(a.prototype),"setEventListeners",this).call(this)}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},P.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r,n=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._callbackFormSubmit=n,r._popupForm=r._popup.querySelector(".popup__form"),r._buttonSubmit=r._popupForm.querySelector(".popup__button-submit"),r._buttonSubmitText=r._buttonSubmit.textContent,r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r}return t=a,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"putSavingProcessText",value:function(){this._buttonSubmit.textContent="Сохранение..."}},{key:"returnSavingProcessText",value:function(){this._buttonSubmit.textContent=this._buttonSubmitText}},{key:"setEventListeners",value:function(){var e=this;P(I(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){P(I(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},x.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(o){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__image"),t._popupTitle=t._popup.querySelector(".popup__undertitle"),t}return t=a,(r=[{key:"open",value:function(e,t){x(A(a.prototype),"open",this).call(this),this._popupImg.src=t,this._popupImg.alt=e,this._popupTitle.textContent=e}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===N(o)?o:String(o)),n)}var o}var B=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderedItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}var J=function(){function e(t){var r=t.userNameSelector,n=t.userUndertitleSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userUndertitle=document.querySelector(n),this._avatarLink=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,userjob:this._userUndertitle.textContent}}},{key:"setUserInfo",value:function(e){var t=e.username,r=e.userjob;this._userName.textContent=t,this._userUndertitle.textContent=r}},{key:"setUserAvatar",value:function(e){this._avatarLink.src=e}}])&&Z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),H={formSelector:"popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",submitInactiveClass:"popup__button-submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var z,$=new s({url:"https://mesto.nomoreparties.co/v1/cohort-77",headers:{"Content-Type":"application/json",authorization:"5588321e-1d02-429a-9d38-02609fab1db2"}}),G=new J({userNameSelector:".profile__username",userUndertitleSelector:".profile__undertitle",userAvatarSelector:".profile__avatar"});Promise.all([$.getUserData(),$.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];z=o._id,G.setUserInfo({username:o.name,userjob:o.about}),Q.renderedItems(i),G.setUserAvatar(o.avatar)})).catch((function(e){console.log("Возникла глобальная ошибка, ".concat(e))}));var K=function(e){var t=new m(e,".card-template",z,{cardId:e._id,authorId:e.owner._id},{handleCardZoom:function(e,t){W.open(e,t)},handleCardDelete:function(e,t){Y.open(e,t)},handleCardLike:function(e){$.putCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("При лайке карточки возникла ошибка, ".concat(e))}))},handleCardDeleteLike:function(e){$.deleteCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("При дизлайке карточки возникла ошибка,s ".concat(e))}))}});return t.createCard()},Q=new B({renderer:function(e){Q.addItem(K(e))}},".elements"),W=new F(".popup_img-preview");W.setEventListeners();var X=new T("#avatar-popup",{callbackFormSubmit:function(e){X.putSavingProcessText(),$.sendAvatarData(e).then((function(e){G.setUserAvatar(e.avatar),X.close()})).catch((function(e){console.log("При обновлении аватара возникла ошибка, ".concat(e))})).finally((function(){X.returnSavingProcessText()}))}});X.setEventListeners();var Y=new j("#notice-popup",{callbackNotice:function(e,t){$.deleteCard(t).then((function(){e.deleteCard(),Y.close()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});Y.setEventListeners();var ee=new T("#profile-popup",{callbackFormSubmit:function(e){ee.putSavingProcessText(),$.sendUserData(e).then((function(e){G.setUserInfo({username:e.name,userjob:e.about}),ee.close()})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){ee.returnSavingProcessText()}))}});ee.setEventListeners();var te=new T("#add-popup",{callbackFormSubmit:function(e){te.putSavingProcessText(),$.addNewCard({name:e.place,link:e.placelink}).then((function(e){Q.prependItem(K(e)),te.close()})).catch((function(e){console.log("При добавлении новой карточки возникла ошибка, ".concat(e))})).finally((function(){te.returnSavingProcessText()}))}});te.setEventListeners();var re=new d(H,u);re.enableValidation();var ne=new d(H,a);ne.enableValidation();var oe=new d(H,o);oe.enableValidation(),n.addEventListener("click",(function(){ee.open(),ne.clearValidationForm();var r=G.getUserInfo();e.value=r.username,t.value=r.userjob})),r.addEventListener("click",(function(){X.open(),oe.clearValidationForm()})),i.addEventListener("click",(function(){te.open(),re.clearValidationForm()}))})();