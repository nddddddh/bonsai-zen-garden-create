import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { TreePine, ArrowLeft, Droplets, Sun, Scissors, Leaf, Clock, AlertTriangle } from "lucide-react";

const Care = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold text-green-800">ZenBonsai</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-green-700 hover:text-green-900 transition-colors">Trang chủ</Link>
              <Link to="/gallery" className="text-green-700 hover:text-green-900 transition-colors">Bộ sưu tập</Link>
              <Link to="/care" className="text-green-900 font-semibold">Chăm sóc</Link>
              <Link to="/guide" className="text-green-700 hover:text-green-900 transition-colors">Hướng dẫn</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" className="mb-6 text-green-700 hover:text-green-900">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Về trang chủ
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-800 mb-6 animate-fade-in">
              Hướng Dẫn Chăm Sóc Bonsai
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto animate-fade-in">
              Tất cả những gì bạn cần biết để chăm sóc và duy trì vẻ đẹp cho cây bonsai của mình.
            </p>
          </div>
        </div>
      </section>

      {/* Care Guide Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="watering" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 bg-green-100">
              <TabsTrigger value="watering" className="text-xs sm:text-sm">Tưới nước</TabsTrigger>
              <TabsTrigger value="sunlight" className="text-xs sm:text-sm">Ánh sáng</TabsTrigger>
              <TabsTrigger value="pruning" className="text-xs sm:text-sm">Cắt tỉa</TabsTrigger>
              <TabsTrigger value="soil" className="text-xs sm:text-sm">Đất trồng</TabsTrigger>
              <TabsTrigger value="seasons" className="text-xs sm:text-sm">Theo mùa</TabsTrigger>
              <TabsTrigger value="problems" className="text-xs sm:text-sm">Xử lý lỗi</TabsTrigger>
            </TabsList>

            {/* Watering Tab */}
            <TabsContent value="watering" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Droplets className="h-6 w-6 text-blue-600" />
                      Cách Tưới Nước Đúng
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Nguyên tắc cơ bản:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Kiểm tra độ ẩm đất bằng tay</li>
                        <li>• Tưới khi đất bề mặt khô</li>
                        <li>• Tưới từ từ, đều khắp bề mặt</li>
                        <li>• Đảm bảo nước chảy ra lỗ thoát nước</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Tần suất tưới:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Mùa hè: 1-2 lần/ngày</li>
                        <li>• Mùa xuân/thu: 1 lần/ngày</li>
                        <li>• Mùa đông: 2-3 lần/tuần</li>
                        <li>• Tùy thuộc vào loại cây và kích thước chậu</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <img 
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&h=300"
                      alt="Tưới nước bonsai"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Lưu ý quan trọng:
                      </h4>
                      <ul className="text-amber-700 space-y-1 text-sm">
                        <li>• Không để cây ngâm trong nước</li>
                        <li>• Sử dụng nước mưa hoặc nước để 24h</li>
                        <li>• Tránh tưới vào lúc trưa nắng gắt</li>
                        <li>• Quan sát phản ứng của cây</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Sunlight Tab */}
            <TabsContent value="sunlight" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Sun className="h-6 w-6 text-yellow-600" />
                      Ánh Sáng Và Vị Trí
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Yêu cầu ánh sáng:</h4>
                      <ul className="text-yellow-700 space-y-1 text-sm">
                        <li>• Hầu hết bonsai cần ánh sáng trực tiếp</li>
                        <li>• Ít nhất 6 giờ ánh sáng mặt trời/ngày</li>
                        <li>• Tránh ánh sáng quá gắt buổi trưa</li>
                        <li>• Xoay chậu để cây phát triển đều</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Vị trí lý tưởng:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Ban công hướng Đông hoặc Tây</li>
                        <li>• Cửa sổ có ánh sáng tự nhiên</li>
                        <li>• Sân vườn có bóng râm nhẹ</li>
                        <li>• Tránh gió mạnh và mưa to</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <img 
                      src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&h=300"
                      alt="Bonsai dưới ánh sáng"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Theo mùa:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Mùa hè: Cần bóng râm buổi trưa</li>
                        <li>• Mùa đông: Tối đa hóa ánh sáng</li>
                        <li>• Mùa mưa: Bảo vệ khỏi ẩm ướt</li>
                        <li>• Có thể dùng đèn LED nếu thiếu sáng</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Pruning Tab */}
            <TabsContent value="pruning" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Scissors className="h-6 w-6 text-red-600" />
                      Kỹ Thuật Cắt Tỉa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Dụng cụ cần thiết:</h4>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Kéo cắt chuyên dụng sắc bén</li>
                        <li>• Kìm cắt cành lớn</li>
                        <li>• Dao cắt tỉa nhỏ</li>
                        <li>• Khử trùng dụng cụ trước sử dụng</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Thời điểm cắt:</h4>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Mùa xuân: Cắt tỉa để tạo dáng</li>
                        <li>• Mùa hè: Cắt bỏ lá già, cành yếu</li>
                        <li>• Mùa thu: Chuẩn bị cho mùa đông</li>
                        <li>• Tránh cắt khi cây đang stress</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <img 
                      src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=500&h=300"
                      alt="Cắt tỉa bonsai"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Nguyên tắc cắt tỉa:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Cắt theo hướng phát triển mong muốn</li>
                        <li>• Loại bỏ cành chéo, cành song song</li>
                        <li>• Giữ lại cành khỏe mạnh</li>
                        <li>• Cắt nghiêng 45 độ phía trên mắt lá</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs content similar structure... */}
            <TabsContent value="soil" className="mt-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Leaf className="h-6 w-6 text-brown-600" />
                    Đất Trồng Và Thay Chậu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-2">Thành phần đất:</h4>
                      <ul className="text-amber-700 space-y-1 text-sm">
                        <li>• 1/3 đất sét</li>
                        <li>• 1/3 đất cát</li>
                        <li>• 1/3 mùn hữu cơ</li>
                        <li>• Có thể thêm perlite để thoát nước</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Thay chậu:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Cây non: 1-2 năm/lần</li>
                        <li>• Cây trưởng thành: 3-5 năm/lần</li>
                        <li>• Thời điểm: cuối đông, đầu xuân</li>
                        <li>• Cắt bớt rễ khi thay chậu</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Dấu hiệu cần thay:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Rễ mọc ra ngoài lỗ thoát nước</li>
                        <li>• Đất cứng, thoát nước kém</li>
                        <li>• Cây phát triển chậm</li>
                        <li>• Đất có mùi chua, ôi thiu</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seasons" className="mt-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Clock className="h-6 w-6 text-purple-600" />
                    Chăm Sóc Theo Mùa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">🌸 Mùa Xuân:</h4>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Thay chậu nếu cần</li>
                          <li>• Bắt đầu bón phân</li>
                          <li>• Cắt tỉa tạo dáng</li>
                          <li>• Tăng tần suất tưới nước</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">☀️ Mùa Hè:</h4>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                          <li>• Tưới nước nhiều hơn</li>
                          <li>• Che bóng râm buổi trưa</li>
                          <li>• Bón phân định kỳ</li>
                          <li>• Quan sát sâu bệnh</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">🍂 Mùa Thu:</h4>
                        <ul className="text-orange-700 space-y-1 text-sm">
                          <li>• Giảm bón phân dần</li>
                          <li>• Cắt tỉa lá già</li>
                          <li>• Chuẩn bị chống lạnh</li>
                          <li>• Giảm tần suất tưới</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">❄️ Mùa Đông:</h4>
                        <ul className="text-blue-700 space-y-1 text-sm">
                          <li>• Tưới ít, kiểm tra độ ẩm</li>
                          <li>• Bảo vệ khỏi sương giá</li>
                          <li>• Dừng bón phân</li>
                          <li>• Đặt trong nhà nếu quá lạnh</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="problems" className="mt-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    Xử Lý Vấn Đề Thường Gặp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">🍃 Lá vàng, rụng lá:</h4>
                        <p className="text-red-700 text-sm mb-2">Nguyên nhân có thể:</p>
                        <ul className="text-red-700 space-y-1 text-sm">
                          <li>• Tưới quá nhiều hoặc quá ít</li>
                          <li>• Thiếu ánh sáng</li>
                          <li>• Thay đổi môi trường đột ngột</li>
                          <li>• Bệnh nấm</li>
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">🐛 Sâu bệnh:</h4>
                        <p className="text-yellow-700 text-sm mb-2">Cách xử lý:</p>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                          <li>• Phun thuốc diệt côn trùng sinh học</li>
                          <li>• Cách ly cây bị bệnh</li>
                          <li>• Tăng cường thông gió</li>
                          <li>• Kiểm tra định kỳ</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">💡 Mẹo phòng ngừa:</h4>
                      <ul className="text-green-700 space-y-1 text-sm grid md:grid-cols-2 gap-x-4">
                        <li>• Quan sát cây hàng ngày</li>
                        <li>• Đảm bảo vệ sinh chậu cây</li>
                        <li>• Không để nước đọng</li>
                        <li>• Cách ly cây mới</li>
                        <li>• Khử trùng dụng cụ</li>
                        <li>• Chọn vị trí thông thoáng</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-700 to-green-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Bắt Đầu Với Hướng Dẫn Chi Tiết</h2>
          <p className="text-lg mb-8">
            Tìm hiểu thêm về cách tạo hình và chăm sóc bonsai từ cơ bản đến nâng cao.
          </p>
          <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
            <Link to="/guide">Xem Hướng Dẫn</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Care;
