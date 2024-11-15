document.getElementById('generate-fact').addEventListener('click', function() {
    const facts = [
        "You love spending time outdoors in parks.",
        "You enjoy the tranquility of snowy landscapes.",
        "You relish the sun, sand, and sea at beaches."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});

