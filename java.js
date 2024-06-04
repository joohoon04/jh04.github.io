document.addEventListener("DOMContentLoaded", () => {
    const pTag1 = document.querySelector('.first-parallel');
    const pTag2 = document.querySelector('.second-parallel');
    const textArr1 = [
        { text: '허브', image: 'img1' },
        { text: '떨', image: 'img2' },
        { text: '아이스', image: 'img3' },
        { text: '고기', image: 'img4' },
        { text: '얼음', image: 'img5' },
        { text: '물건', image: 'img6' },
        { text: '필로폰', image: 'img7' },
        { text: '대마', image: 'img8' }
    ];
    const textArr2 = [
        { text: 'Herb', image: 'img1' },
        { text: 'shaking', image: 'img2' },
        { text: 'ice', image: 'img3' },
        { text: 'meat', image: 'img4' },
        { text: 'ice', image: 'img5' },
        { text: 'thing', image: 'img6' },
        { text: 'Philopon', image: 'img7' },
        { text: 'hemp', image: 'img8' }
    ];

    function initTexts(element, textArray) {
        textArray.push(...textArray);  // 배열을 두 번 반복하여 결합
        for (let i = 0; i < textArray.length; i++) {
            const span = document.createElement('span');
            span.className = 'text-box';
            span.innerText = textArray[i].text;
            span.setAttribute('data-image', textArray[i].image);
            element.appendChild(span);
        }
    }

    if (pTag1 && pTag2) {
        initTexts(pTag1, textArr1);
        initTexts(pTag2, textArr2);
    }

    function animateText(element, direction) {
        let count = 0;
        function marquee() {
            count += direction;
            if (count > element.scrollWidth / 2) {
                element.style.transform = 'translateX(0)';
                count = 0;
            } else {
                element.style.transform = `translateX(${count * -1}px)`;
            }
            requestAnimationFrame(marquee);
        }
        marquee();
    }

    if (pTag1 && pTag2) {
        animateText(pTag1, 1);
        animateText(pTag2, -1);
    }
});



    const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Palatino", "Garamond", "Comic Sans MS", "Trebuchet MS"];

    function getRandomFont() {
        return fonts[Math.floor(Math.random() * fonts.length)];
    }
    
    function applyRandomFonts() {
        const spanSelectors = [
            '.main span.random-font' // random-font 클래스가 적용된 span 요소만 선택
        ];
    
        spanSelectors.forEach(selector => {
            const spans = document.querySelectorAll(selector);
            spans.forEach(span => {
                span.style.fontFamily = getRandomFont();
            });
        });
    }
    
    applyRandomFonts();
    setInterval(applyRandomFonts, 1500); // 3초
    

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            } else {
                entry.target.classList.remove('scrolled');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const mainContent1 = document.querySelector('.main_content1');

    if (mainContent1) {
        observer.observe(mainContent1);
    }

    const images = [
        'img/du (1).png',
        'img/du (2).png',
        'img/du (3).png',
        'img/du (4).png',
        'img/du (5).png',
        'img/du (6).png',
        'img/du (7).png',
        'img/du (8).png',
        'img/du (9).png',
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function getRandomSize() {
        return Math.floor(Math.random() * 300) + 50; // 300px ~ 50px 사이의 크기
    }

    const imageCreationProbability = 0.15;

    function handleMouseMove(event) {
        const cursorArea = document.querySelector('.web');
        const header = document.querySelector('.header');
        const mainText0 = document.querySelector('.main_text0');
        
        if (!cursorArea || !header || !mainText0) return;
        
        const headerRect = header.getBoundingClientRect();
        const mainText0Rect = mainText0.getBoundingClientRect();
        
        if (event.clientY > headerRect.bottom && event.clientY < mainText0Rect.top) {
            if (Math.random() < imageCreationProbability) {
                const follower = document.createElement('img');
                follower.src = getRandomImage();
                follower.className = 'follower';

                const size = getRandomSize();
                follower.style.width = `${size}px`;
                follower.style.height = `${size}px`;
                follower.style.position = 'absolute';
                follower.style.left = `${event.clientX - size / 2}px`;
                follower.style.top = `${event.clientY - size / 2}px`;
                follower.style.pointerEvents = 'none';

                document.body.appendChild(follower);

                setTimeout(() => {
                    follower.remove();
                }, 900);
            }
        }
    }

    const webArea = document.querySelector('.web');
    if (webArea) {
        webArea.addEventListener('mousemove', handleMouseMove);
    }

const elements = document.querySelectorAll('.main_text2 > #box');
let currentIndex = 0;

function toggleElements() {
    elements[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].style.display = 'block';
}

// 최초에 한 번 실행
toggleElements();

// 5초마다 토글
setInterval(toggleElements, 5000);

document.addEventListener("DOMContentLoaded", () => {
    // 이미 적용된 이벤트 핸들러들입니다.
    $(".input-placeholder").on("click keyup", function(event) {
        if (event.type === "click" || event.key === "Enter") {
            $(this).prev().removeClass("hide").trigger("focus").next().remove();
        }
    });

    $(".input-placeholder").on("focus", function(event) {
        $(event.currentTarget).nextAll("hr").first().addClass("highlight");
    }).on("blur", function(event) {
        $(event.currentTarget).nextAll("hr").first().removeClass("highlight");
    }).on("input", function() {
        var noText = true;
        $(".input").each(function(index, element) {
            if ($(element).text().trim() !== "") {
                noText = false;
                return false;
            }
        });
        $("#submit-button").toggleClass("disabled", noText);
    });

    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        if (!$(this).prop("disabled")) {
            $(this).closest('.overlap-group').find('.input-placeholder').trigger("click");
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // 스크롤 위치가 300px을 넘으면
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});




