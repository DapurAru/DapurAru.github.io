function openPopup(title, image, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-image').src = image;
    document.getElementById('popup-description').innerText = description;

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
