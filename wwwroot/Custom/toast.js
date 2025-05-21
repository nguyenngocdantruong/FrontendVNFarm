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
        toast.classList.add('toast', `toast-${this.type}`);
        toast.id = `toast-${this.id}`;
        
        // Thêm icon dựa vào loại thông báo
        let icon = '';
        switch(this.type) {
            case 'success':
                icon = '<i class="fas fa-check-circle"></i> ';
                break;
            case 'error':
                icon = '<i class="fas fa-exclamation-circle"></i> ';
                break;
            case 'warning':
                icon = '<i class="fas fa-exclamation-triangle"></i> ';
                break;
            case 'info':
                icon = '<i class="fas fa-info-circle"></i> ';
                break;
        }
        
        // Tạo nội dung toast với icon và message (đã bỏ nút đóng)
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">${icon}</div>
                <div class="toast-message">${this.message}</div>
            </div>
        `;
        
        // Thêm CSS inline nếu chưa có file CSS riêng
        toast.style.position = 'fixed';
        toast.style.right = '20px';
        toast.style.padding = '12px 15px';
        toast.style.borderRadius = '4px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '9999';
        toast.style.minWidth = '250px';
        toast.style.animation = 'slideInUp 0.3s ease-in-out'; // Thay đổi animation
        toast.style.opacity = '1'; // Đảm bảo toast hiển thị rõ ràng
        
        // Thiết lập màu sắc dựa vào loại thông báo
        switch(this.type) {
            case 'success':
                toast.style.backgroundColor = '#4CAF50';
                toast.style.color = 'white';
                break;
            case 'error':
                toast.style.backgroundColor = '#F44336';
                toast.style.color = 'white';
                break;
            case 'warning':
                toast.style.backgroundColor = '#FF9800';
                toast.style.color = 'white';
                break;
            case 'info':
                toast.style.backgroundColor = '#2196F3';
                toast.style.color = 'white';
                break;
            default:
                toast.style.backgroundColor = '#333';
                toast.style.color = 'white';
        }
        
        // Tạo container cho toast nếu chưa tồn tại
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.position = 'fixed';
            toastContainer.style.bottom = '20px';
            toastContainer.style.right = '20px';
            toastContainer.style.display = 'flex';
            toastContainer.style.flexDirection = 'column-reverse'; // Hiển thị toast mới ở dưới cùng
            toastContainer.style.zIndex = '9999';
            document.body.appendChild(toastContainer);
        }
        
        // Thêm style cho animation - thay đổi animation để phù hợp với vị trí mới
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                @keyframes slideInUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fadeOutDown {
                    from { transform: translateY(0); opacity: 1; }
                    to { transform: translateY(100%); opacity: 0; }
                }
                .toast {
                    transition: all 0.3s ease-in-out;
                    margin-top: 10px;
                }
                #toast-container {
                    display: flex;
                    flex-direction: column-reverse;
                }
                .toast-content {
                    display: flex;
                    align-items: center;
                }
                .toast-icon {
                    flex: 0 0 25%;
                    font-size: 1.2em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .toast-message {
                    flex: 0 0 75%;
                    padding-left: 10px;
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
        
        // Đảm bảo toast hiển thị đủ thời gian
        let timeoutId;
        
        // Tự động đóng toast sau 3 giây
        timeoutId = setTimeout(() => {
            this.closeToast(toast, this.id);
        }, 3000);
        
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
        toast.style.animation = 'fadeOutDown 0.3s ease-in-out forwards';
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
                    const container = document.getElementById('toast-container');
                    if (container) container.remove();
                    const styles = document.getElementById('toast-styles');
                    if (styles) styles.remove();
                }
            }
        }, 300);
    }
    
    repositionToasts() {
        // Sắp xếp lại vị trí các toast còn lại với khoảng cách đều nhau
        const TOAST_GAP = 15; // Khoảng cách cố định giữa các toast (pixel)
        const toastHeight = 70; // Chiều cao ước tính của một toast
        
        Toast.toasts.forEach((toast, index) => {
            const position = index * (toastHeight + TOAST_GAP);
            toast.element.style.bottom = `${position + 20}px`; // 20px là khoảng cách từ đáy
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