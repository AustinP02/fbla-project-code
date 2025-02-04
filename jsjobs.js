// This code simply hides and unhides the preview boxes when you click on them in the jobs.html page

// hi joe

let previewContainer = document.querySelector('.jobs-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.jobs-container .jobs').forEach(jobs =>{
    jobs.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = jobs.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target)
            {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});