const storageKey = 'portfolio_visitor_count';
const storedValue = Number(localStorage.getItem(storageKey) ?? '0');
localStorage.setItem(storageKey, String(storedValue + 1));
