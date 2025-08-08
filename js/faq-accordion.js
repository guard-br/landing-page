document.addEventListener('DOMContentLoaded', () => {
  const accordionContainer = document.querySelector('.accordion');

  faqData.forEach((faqItem, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    const accordionQuestion = document.createElement('div');
    accordionQuestion.classList.add('accordion-question');
    accordionQuestion.textContent = faqItem.question;

    const accordionAnswer = document.createElement('div');
    accordionAnswer.classList.add('accordion-answer');
    accordionAnswer.innerHTML = `<p>${faqItem.answer}</p>`;

    accordionItem.appendChild(accordionQuestion);
    accordionItem.appendChild(accordionAnswer);

    accordionContainer.appendChild(accordionItem);

    accordionQuestion.addEventListener('click', () => {
      const allAccordionItems = document.querySelectorAll('.accordion-item');
      allAccordionItems.forEach(item => {
        if (item !== accordionItem) {
          item.querySelector('.accordion-answer').classList.remove('active');
          item.querySelector('.accordion-question').classList.remove('active');
        }
      });

      accordionAnswer.classList.toggle('active');
      accordionQuestion.classList.toggle('active');
    });
  });
});
