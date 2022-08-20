const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentElement.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target == imgPopup) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = 'auto';

        }
    });
};

export default images;