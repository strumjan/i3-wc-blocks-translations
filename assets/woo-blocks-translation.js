(function() {
    // Заменете го патот со вистински URL или inline JSON
    const translationsJSON = {
        "Place order": "Плати",
        "In stock": "На залиха",
        "Return to cart": "Врати се во кошничка",
        "Add coupons": "купон",
        "Estimated total": "вкупно",
        "Contact information": "е-пошта",
        "We'll use this email to send you details and updates about your order.": "Внесете е-пошта на која ќе ви го испратиме билетот.",
        "Billing address": "податоци",
        "Enter the billing address that matches your payment method.": "Основни податоци за патникот.",
        "Payment options": "начин на плаќање",
        "Add a note to your order": "додадете забелешка ако е потребно",
        "Return to Cart": "кон кошничка",
        "Order summary": "нарачка",
        "Please enter a valid Email адреса": "Ве молиме внесете валидна е-пошта",
        "You are currently checking out as a guest.": "Во моментов купувате како гостин",
        "Enter the податоци that matches your payment method.": "Основни податоци за патникот.",
        "By proceeding with your purchase you agree to our": "Со плаќање вие се согласувате со нашите",
        "Terms and Conditions": "Општи услови",
        "and": "и",
        "Privacy Policy": "правила за приватност",
        "Please enter a valid име": "Внесете име",
        "Please enter a valid презиме": "Внесете презиме",
        "Your cart is currently empty!": "Вашата кошничка е празна!",
        "New in store": "Првпат купувате билет, појдете на насловната"
        
        // TODO: генерација од JSON фајл
    };

    // конвертирање на keys во case-insensitive RegExp
    const translations = Object.keys(translationsJSON).map(key => ({
        regex: new RegExp(key, 'gi'),  // g = global, i = ignore case
        replacement: translationsJSON[key]
    }));

    function translateTextNodes(node) {
        const walker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        let textNode;
        while(textNode = walker.nextNode()) {
            translations.forEach(tr => {
                if (tr.regex.test(textNode.nodeValue)) {
                    textNode.nodeValue = textNode.nodeValue.replace(tr.regex, tr.replacement);
                }
            });
        }
    }

    translateTextNodes(document.body);

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    translateTextNodes(node);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
	
})();