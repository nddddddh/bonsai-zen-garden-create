
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TreePine, ArrowLeft, Heart, Eye } from "lucide-react";

const Gallery = () => {
  const bonsaiCollection = [
    {
      id: 1,
      name: "Cây Sanh Cổ Thụ",
      age: "15 năm tuổi",
      style: "Phong cách thẳng đứng",
      description: "Một tác phẩm bonsai sanh với thân cây mạnh mẽ và tán lá xanh tươi.",
      image: "photo-1472396961693-142e6e269027",
      likes: 156,
      views: 1024
    },
    {
      id: 2,
      name: "Tùng La Hán",
      age: "25 năm tuổi",
      style: "Phong cách nghiêng",
      description: "Cây tùng la hán với dáng nghiêng tự nhiên, thể hiện sức sống mạnh mẽ.",
      image: "photo-1509316975850-ff9c5deb0cd9",
      likes: 203,
      views: 1456
    },
    {
      id: 3,
      name: "Thông Đỏ Nhật Bản",
      age: "30 năm tuổi",
      style: "Phong cách xòe tán",
      description: "Thông đỏ với tán lá xòe rộng, tạo cảm giác uy nghiêm và cổ kính.",
      image: "photo-1513836279014-a89f7a76ae86",
      likes: 298,
      views: 2103
    },
    {
      id: 4,
      name: "Cây Sung Mini",
      age: "8 năm tuổi",
      style: "Phong cách rừng",
      description: "Bonsai sung nhỏ xinh với lá nhỏ li ti, phù hợp để bàn làm việc.",
      image: "photo-1518495973542-4542c06a5843",
      likes: 134,
      views: 892
    },
    {
      id: 5,
      name: "Cây Duối Cổ",
      age: "40 năm tuổi",
      style: "Phong cách bán thác",
      description: "Duối cổ thụ với rễ gồ ghề, thể hiện vẻ đẹp của thời gian.",
      image: "photo-1472396961693-142e6e269027",
      likes: 412,
      views: 3256
    },
    {
      id: 6,
      name: "Mai Vàng Bonsai",
      age: "20 năm tuổi",
      style: "Phong cách tự do",
      description: "Cây mai vàng bonsai, biểu tượng của mùa xuân và may mắn.",
      image: "photo-1509316975850-ff9c5deb0cd9",
      likes: 189,
      views: 1678
    }
  ];

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
              <Link to="/gallery" className="text-green-900 font-semibold">Bộ sưu tập</Link>
              <Link to="/care" className="text-green-700 hover:text-green-900 transition-colors">Chăm sóc</Link>
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
              Bộ Sưu Tập Bonsai
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto animate-fade-in">
              Khám phá những tác phẩm bonsai tinh tế, mỗi cây mang một câu chuyện riêng về sự kiên nhẫn và nghệ thuật.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bonsaiCollection.map((bonsai, index) => (
              <Card key={bonsai.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border-green-100" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${bonsai.image}?auto=format&fit=crop&w=500&h=400`}
                    alt={bonsai.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{bonsai.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">{bonsai.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-green-800 mb-1">{bonsai.name}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">{bonsai.age}</span>
                      <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{bonsai.style}</span>
                    </div>
                  </div>
                  
                  <p className="text-green-600 text-sm leading-relaxed mb-4">
                    {bonsai.description}
                  </p>

                  <Button 
                    className="w-full bg-green-700 hover:bg-green-800 text-white transition-colors duration-300"
                    size="sm"
                  >
                    Xem Chi Tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Bạn Có Muốn Tạo Ra Tác Phẩm Của Riêng Mình?
          </h2>
          <p className="text-lg text-green-700 mb-8">
            Học cách chăm sóc và tạo hình bonsai từ những hướng dẫn chi tiết của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
              <Link to="/guide">Học Ngay</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link to="/care">Hướng Dẫn Chăm Sóc</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
