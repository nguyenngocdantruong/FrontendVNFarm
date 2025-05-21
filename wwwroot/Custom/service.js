import url from "./endpoints.js"
import {BaseService} from "./BaseService.js"
import key from "/Custom/jwt.js"


const app = {
    baseUrl: url.base,
    storeId : -1, 
    userId : -1,
    endpoints: {
        auth: "/Auth",
        cart: "/Cart",
        order: "/Order",
        product: "/Product",
        user: "/Users",
        category: "/Category",
        contactRequest: "/ContactRequest",
        discount: "/Discount",
        enum: "/Enum",
        notification: "/Notification",
        payment: "/Payment",
        review: "/Review",
        store: "/Store",
        chat: "/Chat",
    },
    services : {
        auth : undefined,
        cart : undefined,
        order : undefined,
        product : undefined,
        user : undefined,
        category : undefined,
        contactRequest : undefined,
        discount : undefined,
        enum : undefined,
        notification : undefined,
        payment : undefined,
        review : undefined,
        store : undefined,
        chat : undefined,
    },
    initServices : function({requiredLogin = false, requiredSeller = false, requiredAdmin = false, requiredUser = false}){
        const token = key;
        const role = localStorage.getItem("role");
        this.storeId = parseInt(localStorage.getItem("storeId")) ?? -1;
        this.userId = parseInt(localStorage.getItem("id")) ?? -1;
        if(requiredLogin && (!token || !role || this.userId === -1)){
            window.location.href = "/Home/Login";
            return;
        }
        if(requiredSeller && role !== "Seller"){
            window.location.href = "/Home/Login";
            return;
        }
        if(requiredAdmin && role !== "Admin"){
            window.location.href = "/Home/Login";
            return;
        }
        if(requiredUser && role !== "User"){
            window.location.href = "/Home/Login";
            return;
        }
        this.services.auth = new BaseService(this.baseUrl + this.endpoints.auth, token);
        this.services.cart = new BaseService(this.baseUrl + this.endpoints.cart, token);
        this.services.order = new BaseService(this.baseUrl + this.endpoints.order, token);
        this.services.product = new BaseService(this.baseUrl + this.endpoints.product, token);
        this.services.user = new BaseService(this.baseUrl + this.endpoints.user, token);
        this.services.category = new BaseService(this.baseUrl + this.endpoints.category, token);
        this.services.contactRequest = new BaseService(this.baseUrl + this.endpoints.contactRequest, token);
        this.services.discount = new BaseService(this.baseUrl + this.endpoints.discount, token);
        this.services.enum = new BaseService(this.baseUrl + this.endpoints.enum, token);
        this.services.notification = new BaseService(this.baseUrl + this.endpoints.notification, token);
        this.services.payment = new BaseService(this.baseUrl + this.endpoints.payment, token);
        this.services.review = new BaseService(this.baseUrl + this.endpoints.review, token);
        this.services.store = new BaseService(this.baseUrl + this.endpoints.store, token);
        this.services.chat = new BaseService(this.baseUrl + this.endpoints.chat, token);
    }
}

export default app;
