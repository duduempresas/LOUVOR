function likeVideo(button) {
    const likeCountSpan = button.querySelector('.like-count');
    let likeCount = parseInt(likeCountSpan.textContent, 10);
    likeCount += 1;
    likeCountSpan.textContent = likeCount;
}
