document.addEventListener("DOMContentLoaded", () => {
    const pTag1 = document.querySelector('.first-parallel');
    const textArr1 = [
        { text: '허브', image: 'img1' },
        { text: '떨', image: 'img2' },
        { text: '아이스', image: 'img3' },
        { text: '고기', image: 'img4' },
        { text: '얼음', image: 'img5' },
        { text: '물건', image: 'img6' },
        { text: '필로폰', image: 'img7' },
        { text: '대마', image: 'img8' },
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

    if (pTag1) {
        initTexts(pTag1, textArr1);
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

    if (pTag1) {
        animateText(pTag1, 2);
    }
});



    // const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Palatino", "Garamond", "Comic Sans MS", "Trebuchet MS"];

    // function getRandomFont() {
    //     return fonts[Math.floor(Math.random() * fonts.length)];
    // }
    
    // function applyRandomFonts() {
    //     const spanSelectors = [
    //         '.main span.random-font' // random-font 클래스가 적용된 span 요소만 선택
    //     ];
    
    //     spanSelectors.forEach(selector => {
    //         const spans = document.querySelectorAll(selector);
    //         spans.forEach(span => {
    //             span.style.fontFamily = getRandomFont();
    //         });
    //     });
    // }
    
    // applyRandomFonts();
    // setInterval(applyRandomFonts, 1500); // 3초
    

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
    
    //뉴스 기사 2개를 한 개의 섹션으로 만들어 번갈아가면 5초동안 보여줌
// function toggleElements() {
//     elements[currentIndex].style.display = 'none';
//     currentIndex = (currentIndex + 1) % elements.length;
//     elements[currentIndex].style.display = 'block';
// }

// // 최초에 한 번 실행
// toggleElements();

// // 5초마다 토글
// setInterval(toggleElements, 5000);

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

// 뉴스 
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id^='section']"); // id 속성이 'section'으로 시작하는 모든 섹션을 선택합니다.

    // 각 섹션에 대한 클릭 이벤트를 추가합니다.
    sections.forEach(section => {
        section.addEventListener("click", () => {
            const iframe = document.querySelector("#player iframe"); // iframe 요소를 선택합니다.
            const topLine = document.querySelector(".top-line"); // top-line 요소를 선택합니다.
            const bottomLine = document.querySelector(".bottom-line"); // bottom-line 요소를 선택합니다.

            // 선택한 섹션에 맞게 iframe의 src를 설정합니다.
            if (section.id === 'section1') {
                iframe.src = "https://www.youtube.com/embed/heImz-mkwo8?si=gZKz52pgkUUn2W1M";
            } else if (section.id === 'section2') {
                iframe.src = "https://www.youtube.com/embed/dYMJuUcNG14?si=WUhnBjfqDgn-dhwE";
            } else if (section.id === 'section3') {
                iframe.src = "https://www.youtube.com/embed/OuGb_VjApQ0?si=dClryk7Eg9ZtxYBV";
            }

            // 다른 섹션들을 숨깁니다.
            sections.forEach(s => {
                if (s !== section) {
                    s.classList.remove('active');
                }
            });

            // 현재 클릭된 섹션을 활성화합니다.
            section.classList.add('active');

            // top-line과 bottom-line의 위치를 조정합니다.
            // const sectionIndex = Array.from(sections).indexOf(section);
            // const lineHeight = 30; // 원하는 추가적인 간격을 설정합니다.
            // const totalOffset = (sectionIndex + 1) * lineHeight;
            // topLine.style.top = (281 + totalOffset) + "px";
            // bottomLine.style.top = (558 + totalOffset) + "px";
        });
    });
});

