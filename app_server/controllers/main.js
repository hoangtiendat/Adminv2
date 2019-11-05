const homelist = (req, res) => {
  res.render('index', { title: 'Home' });
};

const users = (req, res) => {
  res.render('users', { title: 'Người dùng' });
};
const products = (req, res) => {
  res.render('products', { title: 'Sản phẩm' });
};
const orders = (req, res) => {
  res.render('orders', { title: 'Đơn đặt hàng' });
};
const shops = (req, res) => {
  res.render('shops', { title: 'Shops' });
};
const edit_user = (req, res) => {
  res.render('edit-users', { title: 'Thay đổi thông tin cá nhân người dùng' });
};

const revenue = (req, res) => {
  res.render('revenue', { title: 'Doanh thu' });
};
module.exports = { 
	homelist,
	users,
	products,
	orders,
	shops,
	edit_user,
	revenue
}
