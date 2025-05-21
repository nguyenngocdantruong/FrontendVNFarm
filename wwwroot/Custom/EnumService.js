/**
 * Service xử lý việc gọi API từ EnumController
 * Class dùng để fetch các giá trị Enum từ server
 */
export class EnumService {
  constructor(baseUrl = 'http://localhost:5172', token = null) {
    this.baseUrl = baseUrl;
    this.apiEndpoint = `${baseUrl}/api/enum`;
    this.token = token;
  }

  /**
   * Phương thức cơ bản để gọi API
   * @param {string} endpoint - Phần endpoint cụ thể
   * @returns {Promise<any>} - Promise chứa kết quả trả về từ API
   */
  async fetchApi(endpoint) {
    try {
      const headers = {
        'Content-Type': 'application/json'
      };

      // Thêm token nếu có
      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const response = await fetch(`${this.apiEndpoint}${endpoint}`, {
        method: 'GET',
        headers
      });

      if (!response.ok) {
        throw new Error(`Lỗi khi gọi API: ${response.status} - ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      throw error;
    }
  }

  /**
   * Lấy danh sách trạng thái đăng ký kinh doanh
   * @returns {Promise<Array>} - Danh sách trạng thái
   */
  async getBusinessRegisterStatuses() {
    return this.fetchApi('/business-register-statuses');
  }

  /**
   * Lấy danh sách loại giảm giá
   * @returns {Promise<Array>} - Danh sách loại giảm giá
   */
  async getDiscountTypes() {
    return this.fetchApi('/discount-types');
  }

  /**
   * Lấy danh sách trạng thái giảm giá
   * @returns {Promise<Array>} - Danh sách trạng thái giảm giá
   */
  async getDiscountStatuses() {
    return this.fetchApi('/discount-statuses');
  }

  /**
   * Lấy danh sách trạng thái đơn hàng
   * @returns {Promise<Array>} - Danh sách trạng thái đơn hàng
   */
  async getOrderStatuses() {
    return this.fetchApi('/order-statuses');
  }

  /**
   * Lấy danh sách loại sự kiện đơn hàng
   * @returns {Promise<Array>} - Danh sách loại sự kiện
   */
  async getOrderEventTypes() {
    return this.fetchApi('/order-event-types');
  }

  async getOrderTimelineStatuses() {
    return this.fetchApi('/order-timeline-statuses');
  }

  /**
   * Lấy danh sách entity có thể sắp xếp
   * @returns {Promise<Array>} - Danh sách entity
   */
  async getSortEntities() {
    return this.fetchApi('/sort-entities');
  }

  /**
   * Lấy loại sắp xếp theo entity
   * @param {string} entityName - Tên entity
   * @returns {Promise<Array>} - Danh sách loại sắp xếp
   */
  async getSortTypesByEntity(entityName) {
    return this.fetchApi(`/sort-by-entity?entityName=${encodeURIComponent(entityName)}`);
  }

  /**
   * Lấy danh sách loại đơn vị
   * @returns {Promise<Array>} - Danh sách loại đơn vị
   */
  async getUnitTypes() {
    return this.fetchApi('/unit-types');
  }

  /**
   * Lấy danh sách nguồn gốc (tỉnh thành)
   * @returns {Promise<Array>} - Danh sách tỉnh thành
   * ví dụ ["Hà Nội", "Hải Phòng", "An Giang"]
   */
  async getOriginTypes() {
    return this.fetchApi('/origin-types');
  }

  /**
   * Lấy danh sách phương thức thanh toán
   * @returns {Promise<Object>} - Đối tượng chứa danh sách phương thức thanh toán
   */
  async getPaymentMethods() {
    return this.fetchApi('/payment-methods');
  }

  /**
   * Lấy danh sách trạng thái thanh toán
   * @returns {Promise<Array>} - Danh sách trạng thái thanh toán
   */
  async getPaymentStatuses() {
    return this.fetchApi('/payment-statuses');
  }

  /**
   * Lấy danh sách trạng thái shop
   * @returns {Promise<Array>} - Danh sách trạng thái shop
   */
  async getShopStatuses() {
    return this.fetchApi('/store-statuses');
  }

  /**
   * Lấy danh sách loại shop
   * @returns {Promise<Array>} - Danh sách loại shop
   */
  async getShopTypes() {
    return this.fetchApi('/store-types');
  }

  /**
   * Lấy danh sách trạng thái đăng ký shop
   * @returns {Promise<Array>} - Danh sách trạng thái đăng ký shop
   */
  async getRegistrationStatuses() {
    return this.fetchApi('/business-register-statuses');
  }
} 
