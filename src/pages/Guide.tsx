
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TreePine, ArrowLeft, Star, Clock, BookOpen, Users, Award, ChevronRight } from "lucide-react";

const Guide = () => {
  const courses = [
    {
      id: 1,
      title: "Bonsai Cho Người Mới Bắt Đầu",
      description: "Học những kiến thức cơ bản về bonsai, từ cách chọn cây đến chăm sóc hàng ngày.",
      level: "Cơ bản",
      duration: "4 tuần",
      lessons: 12,
      students: 1250,
      rating: 4.8,
      price: "Miễn phí",
      image: "photo-1472396961693-142e6e269027",
      highlights: ["Chọn cây phù hợp", "Cách tưới nước", "Ánh sáng và vị trí", "Dụng cụ cơ bản"]
    },
    {
      id: 2,
      title: "Kỹ Thuật Tạo Dáng Nâng Cao",
      description: "Học các kỹ thuật tạo dáng chuyên nghiệp để tạo ra những tác phẩm bonsai ấn tượng.",
      level: "Nâng cao",
      duration: "8 tuần",
      lessons: 24,
      students: 680,
      rating: 4.9,
      price: "299.000đ",
      image: "photo-1509316975850-ff9c5deb0cd9",
      highlights: ["Kỹ thuật uốn cành", "Cắt tỉa chuyên nghiệp", "Tạo phong cách", "Sử dụng dây đồng"]
    },
    {
      id: 3,
      title: "Bonsai Theo Phong Cách Nhật Bản",
      description: "Tìm hiểu sâu về nghệ thuật bonsai truyền thống Nhật Bản và triết lý đằng sau.",
      level: "Trung cấp",
      duration: "6 tuần",
      lessons: 18,
      students: 420,
      rating: 4.7,
      price: "199.000đ",
      image: "photo-1513836279014-a89f7a76ae86",
      highlights: ["Lịch sử bonsai", "Phong cách truyền thống", "Triết lý Zen", "Kỹ thuật cổ điển"]
    },
    {
      id: 4,
      title: "Chăm Sóc Bonsai Qua Các Mùa",
      description: "Hướng dẫn chi tiết cách chăm sóc bonsai theo từng mùa trong năm.",
      level: "Trung cấp",
      duration: "12 tháng",
      lessons: 48,
      students: 890,
      rating: 4.8,
      price: "399.000đ",
      image: "photo-1518495973542-4542c06a5843",
      highlights: ["Chăm sóc mùa xuân", "Bảo vệ mùa hè", "Chuẩn bị mùa đông", "Lịch chăm sóc"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Cơ bản": return "bg-green-100 text-green-800";
      case "Trung cấp": return "bg-blue-100 text-blue-800";
      case "Nâng cao": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
              <Link to="/care" className="text-green-700 hover:text-green-900 transition-colors">Chăm sóc</Link>
              <Link to="/guide" className="text-green-900 font-semibold">Hướng dẫn</Link>
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
              Hướng Dẫn Học Bonsai
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto animate-fade-in">
              Từ những bước đầu tiên đến kỹ thuật chuyên nghiệp. Học bonsai một cách có hệ thống và hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-800 mb-2">3,240+</div>
              <div className="text-green-600">Học viên</div>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-800 mb-2">102</div>
              <div className="text-green-600">Bài học</div>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-800 mb-2">4.8★</div>
              <div className="text-green-600">Đánh giá</div>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-800 mb-2">24/7</div>
              <div className="text-green-600">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Các Khóa Học Bonsai
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border-green-100" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=600&h=300`}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getLevelColor(course.level)} border-0`}>
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-green-800">{course.price}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-green-600 text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 text-sm text-green-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} bài</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-green-600">{course.rating}/5</span>
                  </div>

                  {/* Course Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-800 mb-2">Nội dung chính:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-green-600">
                          <ChevronRight className="h-3 w-3" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-700 hover:bg-green-800 text-white transition-all duration-300 group-hover:shadow-lg"
                    size="sm"
                  >
                    {course.price === "Miễn phí" ? "Bắt Đầu Ngay" : "Đăng Ký Học"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Lộ Trình Học Bonsai
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Kiến Thức Cơ Bản",
                  description: "Tìm hiểu về lịch sử, triết lý và các khái niệm cơ bản của bonsai",
                  duration: "1-2 tuần"
                },
                {
                  step: 2,
                  title: "Chọn Cây & Dụng Cụ",
                  description: "Học cách chọn cây phù hợp và các dụng cụ cần thiết cho người mới bắt đầu",
                  duration: "1 tuần"
                },
                {
                  step: 3,
                  title: "Chăm Sóc Hàng Ngày",
                  description: "Nắm vững kỹ thuật tưới nước, ánh sáng và các yếu tố môi trường",
                  duration: "2-4 tuần"
                },
                {
                  step: 4,
                  title: "Tạo Dáng Cơ Bản",
                  description: "Học các kỹ thuật cắt tỉa và tạo dáng đơn giản",
                  duration: "4-8 tuần"
                },
                {
                  step: 5,
                  title: "Kỹ Thuật Nâng Cao",
                  description: "Áp dụng các kỹ thuật chuyên nghiệp và tạo ra tác phẩm độc đáo",
                  duration: "6-12 tháng"
                }
              ].map((item, index) => (
                <div key={item.step} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-100 text-green-800">Bước {item.step}</Badge>
                          <Badge variant="outline" className="text-green-600">{item.duration}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">{item.title}</h3>
                        <p className="text-green-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 bg-green-600 rounded-full text-white font-bold text-sm mx-4 z-10">
                    {item.step}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-700 to-green-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Sẵn Sàng Bắt Đầu Hành Trình Bonsai?</h2>
          <p className="text-lg mb-8">
            Tham gia cộng đồng học viên và bắt đầu tạo ra những tác phẩm bonsai tuyệt đẹp của riêng bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Đăng Ký Khóa Học Miễn Phí
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              <Link to="/care">Xem Hướng Dẫn Chăm Sóc</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
