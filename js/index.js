document.addEventListener('DOMContentLoaded', () => {
    const refundButton = document.getElementById('refundButton');
    const pageTransition = document.querySelector('.page-transition');

    refundButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 페이지 전환 효과 시작
        pageTransition.style.transform = 'translateX(0)';
        
        // 스켈레톤 UI를 잠시 보여준 후 페이지 이동
        setTimeout(() => {
            window.location.href = 'detail.html';
        }, 1000); // 1초 후 페이지 이동
    });
});