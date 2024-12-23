chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const regex = /.*seznam\.cz.*/; // Cílení na URL s čímkoliv před a za 'seznam.cz'

    if (tab.url && regex.test(tab.url) && changeInfo.status === "complete") {
        setInterval(() => {
            chrome.tabs.reload(tabId);
        }, 60000); // 60 sekund
    }
});