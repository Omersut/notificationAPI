const title= document.title;
const icon = "icon.png";
const body = "This is a notification";

const notification = new Notification(title, {icon, body});

if(!("Notification" in window)) {
    alert("This browser does not support desktop notification");
} else if(Notification.permission === "granted") {
    notification.onclick = () => {
        notification.close();
        window.parent.focus();
    }
} else {
    Notification.requestPermission().then((permission) => {
        if(permission === "granted") {
            notification.onclick = () => {
                notification.close();
                window.parent.focus();
            }
        }
    });
}