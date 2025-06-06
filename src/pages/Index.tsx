
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, TreePine, Heart, BookOpen, Camera, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold text-green-800">ZenBonsai</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-green-700 hover:text-green-900 transition-colors">Trang chủ</Link>
              <Link to="/gallery" className="text-green-700 hover:text-green-900 transition-colors">Bộ sưu tập</Link>
              <Link to="/care" className="text-green-700 hover:text-green-900 transition-colors">Chăm sóc</Link>
              <Link to="/guide" className="text-green-700 hover:text-green-900 transition-colors">Hướng dẫn</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              Nghệ Thuật
              <span className="block text-amber-700">Bonsai</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto">
              Khám phá vẻ đẹp tinh tế của nghệ thuật trồng và chăm sóc bonsai. 
              Hành trình tìm hiểu về sự kiên nhẫn, cân bằng và hòa hợp với thiên nhiên.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3">
                <Link to="/gallery" className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Xem Bộ Sưu Tập
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-3">
                <Link to="/guide" className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Bắt Đầu Học
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
            Tại Sao Chọn Bonsai?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-green-100">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Thiền Định</h3>
                <p className="text-green-600">
                  Chăm sóc bonsai mang lại sự bình yên, giúp giảm stress và tập trung tinh thần.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-green-100">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Heart className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Kiên Nhẫn</h3>
                <p className="text-green-600">
                  Học cách kiên nhẫn và cẩn thận thông qua việc tạo hình và chăm sóc cây.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-green-100">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Cộng Đồng</h3>
                <p className="text-green-600">
                  Kết nối với cộng đồng yêu thích bonsai, chia sẻ kinh nghiệm và học hỏi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Bonsai Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
            Các Loại Bonsai Phổ Biến
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cây Sanh", description: "Dễ chăm sóc, phù hợp người mới bắt đầu", image: "photo-1472396961693-142e6e269027" },
              { name: "Cây Tùng", description: "Cổ kính, thể hiện sức sống mạnh mẽ", image: "photo-1509316975850-ff9c5deb0cd9" },
              { name: "Cây Thông", description: "Biểu tượng của sự trường tồn", image: "photo-1513836279014-a89f7a76ae86" },
              { name: "Cây Sung", description: "Lá nhỏ xinh, dễ tạo dáng", image: "photo-1518495973542-4542c06a5843" }
            ].map((tree, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${tree.image}?auto=format&fit=crop&w=400&h=300`}
                    alt={tree.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">{tree.name}</h3>
                  <p className="text-green-600 text-sm">{tree.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-green-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Bắt Đầu Hành Trình Bonsai</h2>
          <p className="text-xl mb-8">
            Khám phá thế giới bonsai cùng chúng tôi. Từ những kiến thức cơ bản đến kỹ thuật nâng cao.
          </p>
          <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3">
            <Link to="/guide">
              Bắt Đầu Ngay
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <TreePine className="h-8 w-8" />
            <span className="text-2xl font-bold">ZenBonsai</span>
          </div>
          <p className="text-green-200 mb-4">
            Nghệ thuật bonsai - Nơi tâm hồn tìm về sự yên bình
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/gallery" className="text-green-200 hover:text-white transition-colors">Bộ sưu tập</Link>
            <Link to="/care" className="text-green-200 hover:text-white transition-colors">Chăm sóc</Link>
            <Link to="/guide" className="text-green-200 hover:text-white transition-colors">Hướng dẫn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
