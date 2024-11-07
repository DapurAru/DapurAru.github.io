function openPopup(title, image, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-image').src = image;
    document.getElementById('popup-description').innerText = description;

    // Ganti path gambar agar menjadi URL penuh
    const imageUrl = `${window.location.origin}/img/produk1.jpg`;
    const whatsappNumber = '6282285402459';
    const whatsappMessage = `Hai, saya tertarik dengan produk ini: ${title}. Berikut gambar produknya: ${imageUrl}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;
    document.getElementById('whatsapp-button').href = whatsappUrl;

    const popup = document.getElementById('product-popup');
    popup.classList.remove('hidden');
    popup.style.opacity = 1; // Show the popup
}

function openPopup(title, image, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-image').src = image;
    document.getElementById('popup-description').innerText = description;

    // URL WhatsApp dengan nomor yang dituju
    const whatsappNumber = '6282285402459'; // Nomor WhatsApp yang dituju
    const whatsappMessage = `Hai, saya tertarik dengan produk ini, yaitu ${title} dan gambarnya ${image}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;
    document.getElementById('whatsapp-button').href = whatsappUrl;

    const popup = document.getElementById('product-popup');
    popup.classList.remove('hidden');
    popup.style.opacity = 1; // Show the popup
}
