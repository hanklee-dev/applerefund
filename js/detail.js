document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMoreDescription');
    const description = document.querySelector('.description p');

    showMoreButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
            showMoreButton.textContent = '더 보기';
        } else {
            description.style.maxHeight = description.scrollHeight + 'px';
            showMoreButton.textContent = '접기';
        }
    });

    const shareButton = document.querySelector('.share-button');
    shareButton.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: '애플환불 - 환불나라',
                text: '환불이 쉬워진다! 애플환불 앱을 확인해보세요.',
                url: window.location.href
            }).then(() => {
                console.log('공유 성공');
            }).catch((error) => {
                console.log('공유 실패:', error);
            });
        } else {
            alert('이 브라우저에서는 공유 기능을 지원하지 않습니다.');
        }
    });

    // Swiper 초기화
    new Swiper('.preview-images', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
    });
});