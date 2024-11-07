// function openPopup(title, image, description) {
//     document.getElementById('popup-title').innerText = title;
//     document.getElementById('popup-image').src = image;
//     document.getElementById('popup-description').innerText = description;

//     // Ganti path gambar agar menjadi URL penuh
//     const imageUrl = `${window.location.origin}/img/produk1.jpg`;
//     const whatsappNumber = '6282285402459';
//     const whatsappMessage = `Hai, saya tertarik dengan produk ini: ${title}. Berikut gambar produknya: ${imageUrl}`;
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         whatsappMessage
//     )}`;
//     document.getElementById('whatsapp-button').href = whatsappUrl;

//     const popup = document.getElementById('product-popup');
//     popup.classList.remove('hidden');
//     popup.style.opacity = 1; // Show the popup
// }

// JavaScript Function to handle pop-up and WhatsApp button with image URL
function openPopup(title, image, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-image').src = image;
    document.getElementById('popup-description').innerText = description;

    // Full URL of the image for WhatsApp
    const fullImageUrl = `https://dapuraru.github.io/${image}`;
    const whatsappNumber = '6282285402459'; // WhatsApp number
    const whatsappMessage = `Hai, saya tertarik dengan produk ini yaitu ${title}. Berikut gambar produknya: ${fullImageUrl}`;

    // Set WhatsApp link with encoded URL and message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;
    document.getElementById('whatsapp-button').href = whatsappUrl;

    const popup = document.getElementById('product-popup');
    popup.classList.remove('hidden');
    popup.style.opacity = 1; // Show the popup
}

function closePopup() {
    const popup = document.getElementById('product-popup');
    popup.style.opacity = 0; // Hide the popup
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 300); // Delay hiding the popup to allow for the fade-out effect
}
