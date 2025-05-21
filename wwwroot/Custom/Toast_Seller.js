export default class Toast {
    static toastCount = 0;
    static toasts = [];

    constructor(message, type) {
        this.message = message;
        this.type = type;
        this.id = Date.now() + Math.random().toString(36).substr(2, 5);
    }

    show() {
        // Tạo phần tử toast
        const toast = document.createElement('div');
        toast.classList.add('toast-seller', `toast-seller-${this.type}`);
        toast.id = `toast-seller-${this.id}`;
        
        // Thêm icon dựa vào loại thông báo (sử dụng Feather Icons)
        let icon = '';
        switch(this.type) {
            case 'success':
                icon = '<i class="feather-check-circle"></i>';
                break;
            case 'error':
                icon = '<i class="feather-x-circle"></i>';
                break;
            case 'warning':
                icon = '<i class="feather-alert-triangle"></i>';
                break;
            case 'info':
                icon = '<i class="feather-info"></i>';
                break;
        }
        
        // Tạo nội dung toast với icon và message
        toast.innerHTML = `
            <div class="toast-seller-content">
                <div class="toast-seller-icon">${icon}</div>
                <div class="toast-seller-message">${this.message}</div>
                <div class="toast-seller-close"><i class="feather-x"></i></div>
            </div>
        `;
        
        // Thêm CSS inline để phù hợp với giao diện Seller
        toast.style.position = 'fixed';
        toast.style.top = '20px';
        toast.style.right = '20px';
        toast.style.padding = '12px 15px';
        toast.style.borderRadius = '4px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '9999';
        toast.style.minWidth = '300px';
        toast.style.animation = 'slideInRight 0.3s ease-in-out';
        toast.style.opacity = '1';
        toast.style.fontFamily = 'Inter, sans-serif';
        
        // Thiết lập màu sắc dựa vào loại thông báo
        switch(this.type) {
            case 'success':
                toast.style.backgroundColor = '#4CAF50';
                toast.style.color = 'white';
                toast.style.borderLeft = '4px solid #2E7D32';
                break;
            case 'error':
                toast.style.backgroundColor = '#F44336';
                toast.style.color = 'white';
                toast.style.borderLeft = '4px solid #C62828';
                break;
            case 'warning':
                toast.style.backgroundColor = '#FF9800';
                toast.style.color = 'white';
                toast.style.borderLeft = '4px solid #EF6C00';
                break;
            case 'info':
                toast.style.backgroundColor = '#2196F3';
                toast.style.color = 'white';
                toast.style.borderLeft = '4px solid #1565C0';
                break;
            default:
                toast.style.backgroundColor = '#333';
                toast.style.color = 'white';
                toast.style.borderLeft = '4px solid #111';
        }
        
        // Tạo container cho toast nếu chưa tồn tại
        let toastContainer = document.getElementById('toast-seller-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-seller-container';
            toastContainer.style.position = 'fixed';
            toastContainer.style.top = '20px';
            toastContainer.style.right = '20px';
            toastContainer.style.display = 'flex';
            toastContainer.style.flexDirection = 'column';
            toastContainer.style.gap = '10px';
            toastContainer.style.zIndex = '9999';
            document.body.appendChild(toastContainer);
        }
        
        // Thêm style cho animation
        if (!document.getElementById('toast-seller-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-seller-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes fadeOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                .toast-seller {
                    transition: all 0.3s ease-in-out;
                    margin-bottom: 10px;
                }
                .toast-seller-content {
                    display: flex;
                    align-items: center;
                }
                .toast-seller-icon {
                    flex: 0 0 auto;
                    margin-right: 12px;
                    font-size: 1.2em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .toast-seller-message {
                    flex: 1;
                    font-size: 14px;
                    font-weight: 500;
                }
                .toast-seller-close {
                    flex: 0 0 auto;
                    margin-left: 12px;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }
                .toast-seller-close:hover {
                    opacity: 1;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Thêm toast vào container
        toastContainer.appendChild(toast);
        
        // Tăng số lượng toast và lưu toast vào mảng
        Toast.toastCount++;
        Toast.toasts.push({
            id: this.id,
            element: toast
        });
        
        // Sắp xếp lại vị trí các toast
        this.repositionToasts();
        
        // Xử lý sự kiện đóng toast khi click vào nút đóng
        const closeButton = toast.querySelector('.toast-seller-close');
        closeButton.addEventListener('click', () => {
            this.closeToast(toast, this.id);
        });
        
        // Đảm bảo toast hiển thị đủ thời gian
        let timeoutId;
        
        // Tự động đóng toast sau 5 giây
        timeoutId = setTimeout(() => {
            this.closeToast(toast, this.id);
        }, 5000);
        
        // Tạm dừng đếm ngược khi hover vào toast
        toast.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
        });
        
        // Tiếp tục đếm ngược khi rời chuột khỏi toast
        toast.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                this.closeToast(toast, this.id);
            }, 3000);
        });
    }
    
    closeToast(toast, id) {
        toast.style.animation = 'fadeOutRight 0.3s ease-in-out forwards';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                toast.remove();
                // Giảm số lượng toast và xóa khỏi mảng
                Toast.toastCount--;
                Toast.toasts = Toast.toasts.filter(t => t.id !== id);
                
                // Sắp xếp lại vị trí các toast còn lại
                this.repositionToasts();
                
                // Xóa container nếu không còn toast nào
                if (Toast.toastCount === 0) {
                    const container = document.getElementById('toast-seller-container');
                    if (container) container.remove();
                    const styles = document.getElementById('toast-seller-styles');
                    if (styles) styles.remove();
                }
            }
        }, 300);
    }
    
    repositionToasts() {
        // Sắp xếp lại vị trí các toast theo thứ tự từ trên xuống
        const TOAST_GAP = 10; // Khoảng cách giữa các toast (pixel)
        
        Toast.toasts.forEach((toast, index) => {
            const position = index * (toast.element.offsetHeight + TOAST_GAP);
            toast.element.style.top = `${position + 20}px`; // 20px là khoảng cách từ đỉnh
        });
    }
    
    // Các phương thức tiện ích
    static success(message) {
        return new Toast(message, 'success').show();
    }
    
    static error(message) {
        return new Toast(message, 'error').show();
    }
    
    static warning(message) {
        return new Toast(message, 'warning').show();
    }
    
    static info(message) {
        return new Toast(message, 'info').show();
    }
}
