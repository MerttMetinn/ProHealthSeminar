import React, { useState } from "react";

const PageForm = () => {
  const [currentPage, setCurrentPage] = useState("baslik");
  const [formData, setFormData] = useState({
    baslik: "",
    ozet: "",
    baglantilar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const basliklarArasiGecis = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const ilerleButonu = () => {
    if (currentPage === "baslik") {
      setCurrentPage("ozet");
    } else if (currentPage === "ozet") {
      setCurrentPage("baglantilar");
    }
  };

  const geriButonu = () => {
    if (currentPage === "baglantilar") {
      setCurrentPage("ozet");
    } else if (currentPage === "ozet") {
      setCurrentPage("baslik");
    }
  };

  const kaydetButonu = () => {
    console.log("Kaydedilen Veriler:", formData);
    setCurrentPage("baslik");
    setFormData({
      baslik: "",
      ozet: "",
      baglantilar: "",
    });
  };

  return (
    <div>
      <div className="flex space-x-4">
        <div
          style={{ color: currentPage === "baslik" ? "red" : "black" }}
          onClick={() => basliklarArasiGecis("baslik")}
        >
          Konu Başlığı
        </div>
        <div
          style={{ color: currentPage === "ozet" ? "red" : "black" }}
          onClick={() => basliklarArasiGecis("ozet")}
        >
          Konu Özeti
        </div>
        <div
          style={{ color: currentPage === "baglantilar" ? "red" : "black" }}
          onClick={() => basliklarArasiGecis("baglantilar")}
        >
          Konu ile İlgili Bağlantılar
        </div>
      </div>
      <div>
        <h2 className="mt-8">
          {currentPage === "baslik" ? "Konu Başlığı" : currentPage === "ozet" ? "Konu Özeti" : "Konu ile İlgili Bağlantılar"}
        </h2>
        <div>
          <textarea
            name={currentPage}
            value={formData[currentPage]}
            onChange={handleInputChange}
            className="giris-Metni-Boyut w-40 h-40" // w-40 ve h-40 stilleriyle genişlik ve yüksekliği yüzde olarak ayarlıyoruz
          />
        </div>
      </div>
      <div className="mt-8 space-x-4">
        {currentPage !== "baslik" && (
          <button onClick={geriButonu} className="px-4 py-2 bg-gray-300">
            Geri
          </button>
        )}
        <button onClick={ilerleButonu} disabled={currentPage === "baglantilar"} className="px-4 py-2 bg-blue-500 text-white">
          İlerle
        </button>
        <button onClick={kaydetButonu} className="px-4 py-2 bg-green-500 text-white">
          Kaydet ve Çık
        </button>
      </div>
    </div>
  );
};

export default PageForm;